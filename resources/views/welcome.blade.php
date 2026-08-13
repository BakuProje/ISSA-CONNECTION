<!DOCTYPE html>
<html lang="id" class="scroll-smooth overflow-x-hidden w-full">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>ISSA CONNECTION</title>

    <meta name="description"
        content="Issa Connection - Layanan sewa tenda, dekorasi pernikahan, perlengkapan acara berkualitas, profesional dengan harga kompetitif di Makassar.">
    <meta name="keywords" content="Issa Connection, Sewa Tenda Makassar, Dekorasi Makassar, Price List Makassar">
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet">
    <style>
        body {
            background-image: url('{{ asset('images/bgmobile.png') }}');
        }

        @media (min-width: 768px) {
            body {
                background-image: url('{{ asset('images/bgtablet.png') }}');
            }
        }

        @media (min-width: 1024px) {
            body {
                background-image: url('{{ asset('images/bgwebsite.png') }}');
            }
        }
    </style>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body
    class="font-sans text-slate-800 antialiased selection:bg-[#c5a059] selection:text-white flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden w-full">

    @include('partials.navbar')
    <main class="flex-grow">
        @include('sections.beranda')
        @include('sections.tentang_kami')
        @include('sections.price')
        @include('sections.kontak')
    </main>

</body>

</html>
