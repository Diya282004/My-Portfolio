document.addEventListener('DOMContentLoaded', () => {
    // 1. Lightbox functionality for zoomable images
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    window.openLightbox = function(src) {
        if (src) {
            lightbox.style.display = "flex";
            lightboxImg.src = src;
            document.body.style.overflow = "hidden";
        }
    };

    window.closeLightbox = function() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    };

    // Attach click events to images
    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(img.src);
        });
    });

    // Close on background click or Escape key
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    // 2. Smooth scrolling for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});