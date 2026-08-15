document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Mobile navigation drawer logic
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    const drawer = document.getElementById('mobile-menu-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function openDrawer() {
        if (!drawer || !backdrop) return;
        backdrop.classList.remove('pointer-events-none', 'opacity-0');
        backdrop.classList.add('opacity-100');
        drawer.classList.remove('translate-x-full');
        drawer.classList.add('translate-x-0');
    }

    function closeDrawer() {
        if (!drawer || !backdrop) return;
        backdrop.classList.add('pointer-events-none', 'opacity-0');
        backdrop.classList.remove('opacity-100');
        drawer.classList.add('translate-x-full');
        drawer.classList.remove('translate-x-0');
    }

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // Cache section positions to prevent Forced Reflow during scroll
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

    let isTicking = false;
    function handleScroll() {
        if (!header) return;
        const scrollY = window.scrollY;
        const isScrolled = scrollY > 50;

        if (isScrolled) {
            header.className = "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-3 bg-[#faf6ee] border-b border-[#c5a059]/25 shadow-sm";
        } else {
            header.className = "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-4 bg-transparent border-none";
        }

        // Active section highlight logic
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
                link.className = "mobile-nav-link text-base font-bold text-[#c5a059] bg-[#faf6ee] px-4 py-2.5 rounded-xl border border-[#c5a059]/20 transition-all duration-200 shadow-sm";
            } else {
                link.className = "mobile-nav-link text-base font-semibold text-slate-700 hover:text-[#c5a059] px-4 py-2.5 rounded-xl transition-all duration-200";
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

    // Interactive Swiping Card Stack
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

        // Auto-swipe every 4 seconds
        let autoSwipeInterval = setInterval(swipeTopCard, 4000);

        function resetAutoSwipe() {
            clearInterval(autoSwipeInterval);
            autoSwipeInterval = setInterval(swipeTopCard, 4000);
        }
    }

    // Package Lightbox Modal logic (Zoom on click)
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
                
                // Show lightbox with scale-up effect
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
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }
});
