<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        {{-- Métadonnées SEO de base --}}
        <meta name="description" content="{{ $meta_description ?? config('app.description', 'La Mission d\'Appui à la Mobilisation des Ressources Intérieures (MAMRI) est un service public guinéen dédié à l\'amélioration de la mobilisation des ressources intérieures.') }}">
        <meta name="keywords" content="{{ $meta_keywords ?? 'MAMRI, ressources intérieures, Guinée, finances publiques, gouvernance locale' }}">
        <meta name="author" content="MAMRI">
        
        {{-- Métadonnées pour le référencement local --}}
        <meta name="geo.region" content="GN">
        <meta name="geo.placename" content="Conakry">
        <meta name="geo.position" content="9.509167;-13.712222">
        <meta name="ICBM" content="9.509167, -13.712222">

        {{-- Sécurité et performances --}}
        <meta http-equiv="X-Content-Type-Options" content="nosniff">
        <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()">
        <meta name="referrer" content="strict-origin-when-cross-origin">
        <meta name="format-detection" content="telephone=no">

        {{-- Thème et apparence --}}
        <meta name="theme-color" content="#1e4b94" media="(prefers-color-scheme: light)">
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)">
        <meta name="color-scheme" content="light dark">

        {{-- Application mobile --}}
        <meta name="application-name" content="{{ config('app.name', 'MAMRI') }}">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        <meta name="apple-mobile-web-app-title" content="{{ config('app.name', 'MAMRI') }}">

        {{-- Open Graph / Facebook --}}
        <meta property="og:site_name" content="{{ config('app.name', 'MAMRI') }}">
        <meta property="og:locale" content="{{ str_replace('_', '-', app()->getLocale()) }}">
        <meta property="og:type" content="{{ $og_type ?? 'website' }}">
        <meta property="og:title" content="{{ $meta_title ?? config('app.name', 'MAMRI') }}">
        <meta property="og:description" content="{{ $meta_description ?? config('app.description') }}">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:image" content="{{ $og_image ?? url('/images/mamri.png') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Logo MAMRI">

        {{-- Twitter Card --}}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@mamriguinee">
        <meta name="twitter:creator" content="@mamriguinee">
        <meta name="twitter:title" content="{{ $meta_title ?? config('app.name', 'MAMRI') }}">
        <meta name="twitter:description" content="{{ $meta_description ?? config('app.description') }}">
        <meta name="twitter:image" content="{{ $og_image ?? url('/images/mamri.png') }}">

        {{-- Balises canoniques et alternatives --}}
        <link rel="canonical" href="{{ url()->current() }}">
        <link rel="alternate" hrefLang="fr" href="{{ config('app.url') }}">

        <title inertia>{{ $meta_title ?? config('app.name', 'MAMRI') }}</title>

        {{-- Favicons --}}
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
        <link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e4b94">
        <meta name="msapplication-TileColor" content="#1e4b94">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="msapplication-config" content="/browserconfig.xml">

        {{-- Préchargement des ressources --}}
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link rel="preload" href="https://fonts.bunny.net/css?family=figtree:400,500,600" as="style">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600" rel="stylesheet" />

        {{-- Schema.org JSON-LD --}}
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "MAMRI",
            "alternateName": "Mission d'Appui à la Mobilisation des Ressources Intérieures",
            "url": "{{ config('app.url') }}",
            "logo": "{{ url('/images/mamri.png') }}",
            "description": "{{ config('app.description') }}",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Commune de Kaloum",
                "addressLocality": "Conakry",
                "addressCountry": "GN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+224 99 99 99 99",
                "contactType": "customer service",
                "email": "contact@mamri.gov.gn",
                "availableLanguage": ["French"]
            },
            "sameAs": [
                "https://www.facebook.com/mamriguinee",
                "https://www.twitter.com/mamriguinee",
                "https://www.linkedin.com/company/mamriguinee",
                "https://www.youtube.com/mamriguinee"
            ]
        }
        </script>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        <noscript>
            <div style="padding: 20px; text-align: center; background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;">
                Pour une expérience optimale, veuillez activer JavaScript dans votre navigateur.
            </div>
        </noscript>
    </body>
</html>
