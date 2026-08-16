document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
            (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's'))
        ) {
            e.preventDefault();
            return false;
        }
    });

    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Mobile navigation fullscreen dark menu logic with staggered animation
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const drawer = document.getElementById('mobile-menu-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const navItems = document.querySelectorAll('.mobile-nav-item');
    let isMenuOpen = false;

    function preventTouch(e) {
        if (isMenuOpen) {
            e.preventDefault();
        }
    }

    function openDrawer() {
        if (!drawer) return;
        isMenuOpen = true;

        if (menuIconOpen && menuIconClose) {
            menuIconOpen.classList.remove('opacity-100', 'scale-100', 'rotate-0');
            menuIconOpen.classList.add('opacity-0', 'scale-50', '-rotate-90');

            menuIconClose.classList.remove('opacity-0', 'scale-50', 'rotate-90');
            menuIconClose.classList.add('opacity-100', 'scale-100', 'rotate-0');
        }

        drawer.classList.remove('pointer-events-none', 'opacity-0');
        drawer.classList.add('opacity-100', 'pointer-events-auto');
        document.body.classList.add('overflow-hidden', 'touch-none');
        document.documentElement.classList.add('overflow-hidden', 'touch-none');
        window.addEventListener('touchmove', preventTouch, { passive: false });

        // Staggered entrance animation for text items ("muncul 1 per 1")
        navItems.forEach((item, index) => {
            setTimeout(() => {
                if (isMenuOpen) {
                    item.classList.remove('translate-y-8', 'opacity-0');
                    item.classList.add('translate-y-0', 'opacity-100');
                }
            }, 100 + index * 90);
        });
    }

    function closeDrawer() {
        if (!drawer) return;
        isMenuOpen = false;

        if (menuIconOpen && menuIconClose) {
            menuIconOpen.classList.remove('opacity-0', 'scale-50', '-rotate-90');
            menuIconOpen.classList.add('opacity-100', 'scale-100', 'rotate-0');

            menuIconClose.classList.remove('opacity-100', 'scale-100', 'rotate-0');
            menuIconClose.classList.add('opacity-0', 'scale-50', 'rotate-90');
        }

        navItems.forEach(item => {
            item.classList.remove('translate-y-0', 'opacity-100');
            item.classList.add('translate-y-8', 'opacity-0');
        });

        drawer.classList.remove('opacity-100', 'pointer-events-auto');
        drawer.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('overflow-hidden', 'touch-none');
        document.documentElement.classList.remove('overflow-hidden', 'touch-none');
        window.removeEventListener('touchmove', preventTouch);
    }

    const menuCloseBtn = document.getElementById('mobile-menu-close');

    function toggleDrawer() {
        if (isMenuOpen) {
            closeDrawer();
        } else {
            openDrawer();
        }
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleDrawer);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeDrawer);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    let sectionOffsets = [];
    function calculateSectionOffsets() {
        sectionOffsets = Array.from(sections).map(section => ({
            id: section.getAttribute('id'),
            top: section.offsetTop - 180,
            height: section.offsetHeight
        }));
    }
    if ('requestIdleCallback' in window) {
        requestIdleCallback(calculateSectionOffsets);
    } else {
        setTimeout(calculateSectionOffsets, 150);
    }
    window.addEventListener('resize', calculateSectionOffsets, { passive: true });

    let lastScrollY = 0;
    let isTicking = false;
    function handleScroll() {
        if (!header) return;
        const scrollY = window.scrollY;

        // Auto-hide navbar when scrolling down, show when scrolling up or at top
        if (scrollY > lastScrollY && scrollY > 80) {
            header.classList.add('-translate-y-full');
            header.classList.remove('translate-y-0');
        } else {
            header.classList.remove('-translate-y-full');
            header.classList.add('translate-y-0');
        }
        lastScrollY = scrollY;

        // Add warm background when scrolled past Beranda / top
        if (scrollY > 50) {
            header.classList.add('bg-[#faf6ee]/95', 'backdrop-blur-md', 'border-b', 'border-[#c5a059]/25', 'shadow-sm', 'py-3');
            header.classList.remove('bg-transparent', 'border-none', 'py-4');
        } else {
            header.classList.remove('bg-[#faf6ee]/95', 'backdrop-blur-md', 'border-b', 'border-[#c5a059]/25', 'shadow-sm', 'py-3');
            header.classList.add('bg-transparent', 'border-none', 'py-4');
        }

        let currentSectionId = 'beranda';
        const isAtBottom = (window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 80);

        if (isAtBottom) {
            currentSectionId = 'kontak';
        } else {
            for (let i = 0; i < sectionOffsets.length; i++) {
                const s = sectionOffsets[i];
                if (scrollY >= s.top && scrollY < s.top + s.height) {
                    currentSectionId = s.id;
                    break;
                }
            }
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === currentSectionId) {
                link.className = "nav-link text-sm font-bold px-5 py-1.5 rounded-full transition-all duration-200 bg-neutral-950 text-[#c5a059] shadow-md";
            } else {
                link.className = "nav-link text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-200 text-slate-700 hover:text-[#c5a059] hover:bg-slate-100/50";
            }
        });

        mobileLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === currentSectionId) {
                link.className = "mobile-nav-link mobile-nav-item text-lg sm:text-xl font-black text-[#7a5917] bg-[#fdfbf7] border border-[#c5a059]/40 shadow-sm px-8 py-3 rounded-2xl transition-all duration-300 w-full";
            } else {
                link.className = "mobile-nav-link mobile-nav-item text-lg sm:text-xl font-bold text-slate-800 hover:text-[#7a5917] px-8 py-3 rounded-2xl transition-all duration-300 w-full";
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });
    handleScroll();

    const container = document.getElementById('card-deck-container');
    if (container) {
        const cards = Array.from(container.querySelectorAll('.deck-card'));
        cards.sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));

        let swipedCount = 0;
        let isResetting = false;

        function updateStackStyles() {
            if (isResetting) return;

            cards.forEach((card, idx) => {
                if (card.classList.contains('swiped')) return;

                const relativeIdx = idx - swipedCount;

                if (relativeIdx === 0) {
                    card.style.zIndex = '50';
                    card.style.transform = 'scale(1) rotate(1deg)';
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                } else if (relativeIdx === 1) {
                    card.style.zIndex = '40';
                    card.style.transform = 'scale(0.98) translate(-18px, 16px) rotate(-4deg)';
                    card.style.opacity = '0.95';
                    card.style.pointerEvents = 'none';
                } else if (relativeIdx === 2) {
                    card.style.zIndex = '30';
                    card.style.transform = 'scale(0.96) translate(22px, -14px) rotate(5deg)';
                    card.style.opacity = '0.88';
                    card.style.pointerEvents = 'none';
                } else if (relativeIdx === 3) {
                    card.style.zIndex = '20';
                    card.style.transform = 'scale(0.94) translate(-32px, -10px) rotate(-7deg)';
                    card.style.opacity = '0.8';
                    card.style.pointerEvents = 'none';
                } else if (relativeIdx === 4) {
                    card.style.zIndex = '10';
                    card.style.transform = 'scale(0.92) translate(36px, 12px) rotate(8deg)';
                    card.style.opacity = '0.7';
                    card.style.pointerEvents = 'none';
                } else {
                    card.style.zIndex = '0';
                    card.style.transform = 'scale(0.85) translate(0, 0) rotate(0deg)';
                    card.style.opacity = '0';
                    card.style.pointerEvents = 'none';
                }
            });
        }

        updateStackStyles();

        function swipeTopCard() {
            if (isResetting || swipedCount >= cards.length) return;

            const topCardIndex = swipedCount;
            const topCard = cards[topCardIndex];

            if (topCard) {
                topCard.classList.add('swiped');
                const xOffset = topCardIndex % 2 === 0 ? '140%' : '-140%';
                const rotOffset = topCardIndex % 2 === 0 ? '25deg' : '-25deg';
                topCard.style.transform = `translate(${xOffset}, -20%) rotate(${rotOffset})`;
                topCard.style.opacity = '0';
                topCard.style.zIndex = '60';
                topCard.style.pointerEvents = 'none';

                swipedCount++;

                if (swipedCount < cards.length) {
                    updateStackStyles();
                } else {
                    isResetting = true;
                    setTimeout(() => {
                        swipedCount = 0;
                        cards.forEach((card, idx) => {
                            setTimeout(() => {
                                card.classList.remove('swiped');
                                card.style.transform = '';
                                card.style.opacity = '';
                                card.style.zIndex = '';
                                card.style.pointerEvents = '';

                                if (idx === 0) {
                                    isResetting = false;
                                    updateStackStyles();
                                }
                            }, (cards.length - 1 - idx) * 120);
                        });
                    }, 600);
                }
            }
        }

        container.addEventListener('click', () => {
            swipeTopCard();
            resetAutoSwipe();
        });

        let autoSwipeInterval = setInterval(swipeTopCard, 4000);

        function resetAutoSwipe() {
            clearInterval(autoSwipeInterval);
            autoSwipeInterval = setInterval(swipeTopCard, 4000);
        }
    }

    const lightbox = document.getElementById('package-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxClose = document.getElementById('lightbox-close');
    const triggers = document.querySelectorAll('.package-lightbox-trigger');

    if (lightbox && lightboxImg && lightboxTitle) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const src = trigger.getAttribute('data-src');
                const title = trigger.getAttribute('data-title');

                lightboxImg.src = src;
                lightboxTitle.textContent = title;

                lightbox.classList.remove('opacity-0', 'pointer-events-none');
                lightbox.classList.add('opacity-100', 'pointer-events-auto');
                setTimeout(() => {
                    lightboxImg.classList.remove('scale-95');
                    lightboxImg.classList.add('scale-100');
                }, 50);
            });
        });

        const closeLightbox = () => {
            lightboxImg.classList.remove('scale-100');
            lightboxImg.classList.add('scale-95');
            lightbox.classList.remove('opacity-100', 'pointer-events-auto');
            lightbox.classList.add('opacity-0', 'pointer-events-none');
        };

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.id === 'lightbox-img-container') {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }
});
