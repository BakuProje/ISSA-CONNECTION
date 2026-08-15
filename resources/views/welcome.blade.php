<!DOCTYPE html>
<html lang="id" class="scroll-smooth overflow-x-hidden w-full">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISSA CONNECTION</title>

    <meta name="description"
        content="ISSA CONNECTION adalah penyedia jasa sewa tenda pernikahan, tenda kerucut, tenda hall, dekorasi pengantin, serta perlengkapan meja kursi terbaik, berkualitas, dan harga murah kompetitif di Makassar.">
    <meta name="keywords"
        content="Issa Connection, Sewa Tenda Makassar, Jasa Sewa Tenda Makassar, Sewa Tenda Pernikahan Makassar, Dekorasi Pernikahan Makassar, Sewa Kursi Makassar, Sewa Meja Makassar, Sewa Tenda Murah Makassar">
    <meta name="google-site-verification" content="Aq0OVChriUSz1c9nfoDLnswWLV8CssePyA2X-A6Kr-c" />
    <!-- Open Graph / WhatsApp / Facebook Meta Tags -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://issaconnection.com/">
    <meta property="og:title" content="ISSA CONNECTION | Jasa Sewa Tenda & Dekorasi Makassar">
    <meta property="og:description" content="ISSA CONNECTION adalah penyedia jasa sewa tenda pernikahan, tenda kerucut, tenda hall, dekorasi pengantin, serta perlengkapan meja kursi terbaik & terpercaya di Makassar.">
    <meta property="og:image" content="https://issaconnection.com/images/logobg.png">
    <meta property="og:image:secure_url" content="https://issaconnection.com/images/logobg.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="600">
    <meta property="og:image:height" content="600">
    <meta property="og:locale" content="id_ID">
    <meta property="og:site_name" content="ISSA CONNECTION">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="https://issaconnection.com/">
    <meta name="twitter:title" content="ISSA CONNECTION | Jasa Sewa Tenda & Dekorasi Makassar">
    <meta name="twitter:description" content="ISSA CONNECTION adalah penyedia jasa sewa tenda pernikahan, tenda kerucut, tenda hall, dekorasi pengantin, serta perlengkapan meja kursi terbaik & terpercaya di Makassar.">
    <meta name="twitter:image" content="https://issaconnection.com/images/logobg.png">

    <!-- Preload LCP Image & Font to eliminate loading delay -->
    <link rel="preload" href="{{ asset('images/logobg.webp') }}" as="image" type="image/webp" fetchpriority="high">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Alex+Brush&text=Untuk%20Momen%20Terindah%20Anda&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alex+Brush&text=Untuk%20Momen%20Terindah%20Anda&display=swap"></noscript>
    <style>
        #fixed-bg {
            background-image: url('{{ asset('images/bgmobile.webp') }}');
        }

        @media (min-width: 768px) {
            #fixed-bg {
                background-image: url('{{ asset('images/bgtablet.webp') }}');
            }
        }

        @media (min-width: 1024px) {
            #fixed-bg {
                background-image: url('{{ asset('images/bgwebsite.webp') }}');
            }
        }
    </style>

    <!-- Local Business Schema for Local SEO -->
    <script type="application/ld+json">
    {
      "@@context": "https://schema.org",
      "@@type": "LocalBusiness",
      "name": "Issa Connection",
      "image": "https://issaconnection.com/images/logobg.webp",
      "@@id": "https://issaconnection.com/#localbusiness",
      "url": "https://issaconnection.com",
      "telephone": "+628114130666",
      "priceRange": "$$",
      "address": {
        "@@type": "PostalAddress",
        "streetAddress": "Pesona Nirwana Borong Raya",
        "addressLocality": "Makassar",
        "addressRegion": "Sulawesi Selatan",
        "postalCode": "90233",
        "addressCountry": "ID"
      },
      "geo": {
        "@@type": "GeoCoordinates",
        "latitude": -5.163954,
        "longitude": 119.465387
      },
      "openingHoursSpecification": {
        "@@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.instagram.com/alsara"
      ]
    }
    </script>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body
    class="font-sans text-slate-800 antialiased selection:bg-[#c5a059] selection:text-white flex flex-col min-h-screen overflow-x-hidden w-full bg-transparent">

    <!-- Fixed Background Div (Resolves mobile background attachments scroll bug) -->
    <div class="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat pointer-events-none" id="fixed-bg"></div>

    @include('partials.navbar')
    <main class="flex-grow">
        @include('sections.beranda')
        @include('sections.tentang_kami')
        @include('sections.price')
        @include('sections.kontak')
    </main>

</body>

</html>
