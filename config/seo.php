<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Configuration SEO par défaut
    |--------------------------------------------------------------------------
    |
    | Ces valeurs seront utilisées si aucune métadonnée spécifique n'est définie
    | pour une page donnée.
    |
    */

    'default' => [
        'title' => 'MAMRI - Mission d\'Appui à la Mobilisation des Ressources Intérieures',
        'description' => 'La Mission d\'Appui à la Mobilisation des Ressources Intérieures (MAMRI) est un service public guinéen dédié à l\'amélioration de la mobilisation des ressources intérieures.',
        'keywords' => 'MAMRI, ressources intérieures, Guinée, finances publiques, gouvernance locale, développement territorial, collectivités locales',
        'author' => 'MAMRI',
        'robots' => 'index, follow',
    ],

    /*
    |--------------------------------------------------------------------------
    | Informations de l'entreprise
    |--------------------------------------------------------------------------
    */
    'company' => [
        'name' => 'MAMRI',
        'legal_name' => 'Mission d\'Appui à la Mobilisation des Ressources Intérieures',
        'address' => [
            'street' => 'Commune de Kaloum',
            'city' => 'Conakry',
            'country' => 'Guinée',
            'postal_code' => '',
        ],
        'contact' => [
            'phone' => '+224 99 99 99 99',
            'email' => 'contact@mamri.gov.gn',
        ],
        'social' => [
            'facebook' => 'https://www.facebook.com/mamriguinee',
            'twitter' => 'https://www.twitter.com/mamriguinee',
            'linkedin' => 'https://www.linkedin.com/company/mamriguinee',
            'youtube' => 'https://www.youtube.com/mamriguinee',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Configuration Open Graph par défaut
    |--------------------------------------------------------------------------
    */
    'og' => [
        'site_name' => 'MAMRI',
        'type' => 'website',
        'image' => [
            'url' => '/images/mamri.png',
            'width' => 1200,
            'height' => 630,
            'alt' => 'Logo MAMRI',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Configuration Twitter Card par défaut
    |--------------------------------------------------------------------------
    */
    'twitter' => [
        'card' => 'summary_large_image',
        'site' => '@mamriguinee',
        'creator' => '@mamriguinee',
    ],

    /*
    |--------------------------------------------------------------------------
    | Langues disponibles
    |--------------------------------------------------------------------------
    */
    'locales' => [
        'fr' => 'Français',
    ],

    /*
    |--------------------------------------------------------------------------
    | Géolocalisation
    |--------------------------------------------------------------------------
    */
    'geo' => [
        'region' => 'GN',
        'placename' => 'Conakry',
        'position' => [
            'latitude' => '9.509167',
            'longitude' => '-13.712222',
        ],
    ],
]; 