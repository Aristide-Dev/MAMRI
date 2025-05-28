<?php

namespace App\Services;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;

class SeoService
{
    /**
     * Obtenir les métadonnées SEO pour une page
     *
     * @param array $customMeta
     * @return array
     */
    public function getMetadata(array $customMeta = []): array
    {
        $defaultMeta = Config::get('seo.default');
        $meta = array_merge($defaultMeta, $customMeta);

        // Génération des métadonnées Open Graph
        $meta['og'] = array_merge([
            'title' => $meta['title'],
            'description' => $meta['description'],
            'site_name' => Config::get('seo.og.site_name'),
            'type' => Config::get('seo.og.type'),
            'image' => Config::get('seo.og.image.url'),
            'url' => url()->current(),
        ], $customMeta['og'] ?? []);

        // Génération des métadonnées Twitter Card
        $meta['twitter'] = array_merge([
            'card' => Config::get('seo.twitter.card'),
            'site' => Config::get('seo.twitter.site'),
            'creator' => Config::get('seo.twitter.creator'),
            'title' => $meta['title'],
            'description' => $meta['description'],
            'image' => $meta['og']['image'],
        ], $customMeta['twitter'] ?? []);

        // Génération du JSON-LD
        $meta['json_ld'] = $this->generateJsonLd($meta);

        return $meta;
    }

    /**
     * Générer les données structurées JSON-LD
     *
     * @param array $meta
     * @return array
     */
    protected function generateJsonLd(array $meta): array
    {
        $company = Config::get('seo.company');
        
        $jsonLd = [
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => $company['name'],
            'legalName' => $company['legal_name'],
            'url' => config('app.url'),
            'logo' => url('/images/aristech-brand.png'),
            'description' => $meta['description'],
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => $company['address']['street'],
                'addressLocality' => $company['address']['city'],
                'addressCountry' => $company['address']['country'],
            ],
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'telephone' => $company['contact']['phone'],
                'contactType' => 'customer service',
                'email' => $company['contact']['email'],
                'availableLanguage' => array_keys(Config::get('seo.locales')),
            ],
            'sameAs' => array_values($company['social']),
        ];

        // Ajouter des données spécifiques selon le type de page
        if (isset($meta['page_type'])) {
            switch ($meta['page_type']) {
                case 'article':
                    $jsonLd = array_merge($jsonLd, [
                        '@type' => 'Article',
                        'headline' => $meta['title'],
                        'image' => $meta['og']['image'],
                        'datePublished' => $meta['published_at'] ?? now()->toIso8601String(),
                        'dateModified' => $meta['updated_at'] ?? now()->toIso8601String(),
                        'author' => [
                            '@type' => 'Person',
                            'name' => $meta['author'] ?? $company['name'],
                        ],
                    ]);
                    break;

                case 'service':
                    $jsonLd = array_merge($jsonLd, [
                        '@type' => 'Service',
                        'name' => $meta['title'],
                        'description' => $meta['description'],
                        'provider' => [
                            '@type' => 'Organization',
                            'name' => $company['name'],
                        ],
                        'areaServed' => [
                            '@type' => 'Country',
                            'name' => 'Guinée',
                        ],
                    ]);
                    break;
            }
        }

        return $jsonLd;
    }

    /**
     * Générer un titre SEO optimisé
     *
     * @param string $title
     * @param string|null $suffix
     * @return string
     */
    public function generateTitle(string $title, ?string $suffix = null): string
    {
        $suffix = $suffix ?? Config::get('seo.default.title');
        
        if (Str::contains($title, $suffix)) {
            return $title;
        }

        return trim($title . ' - ' . $suffix);
    }

    /**
     * Générer une description SEO optimisée
     *
     * @param string $text
     * @param int $length
     * @return string
     */
    public function generateDescription(string $text, int $length = 160): string
    {
        return Str::limit(strip_tags($text), $length);
    }

    /**
     * Générer des mots-clés à partir d'un texte
     *
     * @param string $text
     * @param int $maxKeywords
     * @return string
     */
    public function generateKeywords(string $text, int $maxKeywords = 10): string
    {
        $text = strip_tags($text);
        $words = str_word_count(strtolower($text), 1, 'àáâãäçèéêëìíîïñòóôõöùúûüýÿ');
        $words = array_unique($words);
        $words = array_filter($words, fn($word) => strlen($word) > 3);
        $words = array_slice($words, 0, $maxKeywords);
        
        return implode(', ', $words);
    }
} 