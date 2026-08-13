<!-- Sticky Navigation Header -->
<header id="main-header"
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-4 bg-transparent border-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">

            <!-- Brand Logo & Name (Using logo transparan.png) -->
            <a href="#beranda" class="flex items-center gap-3 group">
                <img src="{{ asset('images/logo transparan.png') }}" alt="Issa Connection Logo"
                    class="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200">
                <div class="flex flex-col">
                    <span
                        class="text-sm sm:text-base md:text-xl font-black text-slate-900 tracking-tight uppercase group-hover:text-[#c5a059] transition-colors leading-none">ISSA
                        CONNECTION</span>
                    <span
                        class="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-slate-400 font-semibold uppercase mt-0.5">Event
                        &
                        Decoration</span>
                </div>
            </a>

            <!-- Desktop Navigation Links -->
            <nav class="hidden lg:flex items-center gap-6">
                <a href="#beranda" id="nav-beranda"
                    class="nav-link text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-200">Beranda</a>
                <a href="#tentang-kami" id="nav-tentang-kami"
                    class="nav-link text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-200">Tentang
                    Kami</a>
                <a href="#price-list" id="nav-price-list"
                    class="nav-link text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-200">Price
                    List</a>
                <a href="#kontak" id="nav-kontak"
                    class="nav-link text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-200">Kontak</a>
            </nav>

            <div class="hidden lg:flex items-center">
                <a href="https://wa.me/6281147001554?text=Halo%20Issa%20Connection%2C%20saya%20ingin%20pesan%20tenda%20dan%20dekorasi."
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2.5 bg-neutral-950 hover:bg-[#c5a059] text-white hover:text-neutral-950 font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg border border-[#c5a059]/30 transition-all duration-200 group">
                    <svg class="w-5 h-5 shrink-0 text-[#c5a059] group-hover:text-neutral-950 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Pesan Sekarang</span>
                </a>
            </div>

            <div class="lg:hidden flex items-center">
                <button id="mobile-menu-btn" type="button" aria-label="Open menu"
                    class="p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div id="mobile-menu-backdrop"
        class="fixed inset-0 bg-black/40 z-[140] transition-opacity duration-300 opacity-0 pointer-events-none lg:hidden">
    </div>

    <div id="mobile-menu-drawer"
        class="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[150] shadow-2xl transition-transform duration-300 translate-x-full lg:hidden flex flex-col p-6 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <a href="#beranda" class="flex items-center gap-2">
                <img src="{{ asset('images/logo transparan.png') }}" alt="Logo" class="h-10 w-auto object-contain">
                <span class="text-sm font-black text-slate-900 tracking-tight uppercase">ISSA CONNECTION</span>
            </a>
            <button id="mobile-menu-close" type="button" aria-label="Close menu"
                class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
        </div>

        <nav class="flex flex-col space-y-4">
            <a href="#beranda"
                class="mobile-nav-link text-base font-bold text-slate-800 hover:text-[#c5a059] py-2 transition-colors">Beranda</a>
            <a href="#tentang-kami"
                class="mobile-nav-link text-base font-bold text-slate-800 hover:text-[#c5a059] py-2 transition-colors">Tentang
                Kami</a>
            <a href="#price-list"
                class="mobile-nav-link text-base font-bold text-slate-800 hover:text-[#c5a059] py-2 transition-colors">Price
                List</a>
            <a href="#kontak"
                class="mobile-nav-link text-base font-bold text-slate-800 hover:text-[#c5a059] py-2 transition-colors">Kontak</a>
        </nav>

        <div class="pt-4 border-t border-slate-100">
            <a href="https://wa.me/6281147001554?text=Halo%20Issa%20Connection%2C%20saya%20ingin%20pesan%20tenda%20dan%20dekorasi."
                target="_blank"
                class="flex items-center justify-center gap-2.5 w-full bg-neutral-950 text-[#c5a059] border border-[#c5a059]/40 font-bold py-3 rounded-full shadow-md">
                <span>Pesan Sekarang</span>
            </a>
        </div>
    </div>
</header>
