```javascript
/* =========================================================
   MOHAMMED ARIF AKTHAR
   PERSONAL PORTFOLIO
   STEP 4 — JAVASCRIPT ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       1. CURRENT YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       2. MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            if (mobileMenu.classList.contains("active")) {
                menuBtn.textContent = "✕";
            } else {
                menuBtn.textContent = "☰";
            }

        });


        /* Close menu after clicking a link */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                menuBtn.textContent = "☰";

            });

        });

    }


    /* =====================================================
       3. 3D GLASS CARD — MOUSE MOVEMENT
    ===================================================== */

    const glassCard =
        document.querySelector(".glass-card");

    const heroVisual =
        document.querySelector(".hero-visual");

    if (glassCard && heroVisual) {

        heroVisual.addEventListener("mousemove", (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                (x - centerX) / 25;

            const rotateX =
                (centerY - y) / 25;

            glassCard.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });


        heroVisual.addEventListener("mouseleave", () => {

            glassCard.style.transform =
                "rotateX(4deg) rotateY(-8deg) translateY(0)";

        });

    }


    /* =====================================================
       4. BACKGROUND ORB PARALLAX
    ===================================================== */

    const orb1 =
        document.querySelector(".orb-1");

    const orb2 =
        document.querySelector(".orb-2");

    const orb3 =
        document.querySelector(".orb-3");

    window.addEventListener("mousemove", (event) => {

        const mouseX =
            (event.clientX / window.innerWidth - 0.5);

        const mouseY =
            (event.clientY / window.innerHeight - 0.5);


        if (orb1) {

            orb1.style.marginLeft =
                `${mouseX * 35}px`;

            orb1.style.marginTop =
                `${mouseY * 25}px`;

        }


        if (orb2) {

            orb2.style.marginLeft =
                `${mouseX * -25}px`;

            orb2.style.marginTop =
                `${mouseY * -20}px`;

        }


        if (orb3) {

            orb3.style.marginLeft =
                `${mouseX * 20}px`;

            orb3.style.marginTop =
                `${mouseY * -30}px`;

        }

    });


    /* =====================================================
       5. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-label, " +
            ".about-grid, " +
            ".skill-card, " +
            ".project-card, " +
            ".education-card, " +
            ".contact-section h2, " +
            ".contact-section > p, " +
            ".contact-email"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================================
       6. SMOOTH NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       7. NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5, 5, 7, 0.88)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0,0,0,0.25)";

        } else {

            navbar.style.background =
                "rgba(5, 5, 7, 0.55)";

            navbar.style.boxShadow =
                "none";

        }

    });


    /* =====================================================
       8. PROJECT CARD TILT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (centerY - y) / 35;

            const rotateY =
                (x - centerX) / 35;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* =====================================================
       9. SKILL CARD HOVER
    ===================================================== */

    const skillCards =
        document.querySelectorAll(".skill-card");


    skillCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                (x - rect.width / 2) / 30;

            const rotateX =
                (rect.height / 2 - y) / 30;

            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(700px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* =====================================================
       10. HERO PARALLAX ON SCROLL
    ===================================================== */

    const heroContent =
        document.querySelector(".hero-content");

    const heroVisualElement =
        document.querySelector(".hero-visual");


    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;

        if (scroll < window.innerHeight) {

            if (heroContent) {

                heroContent.style.transform =
                    `translateY(${scroll * 0.12}px)`;

                heroContent.style.opacity =
                    `${1 - scroll / 700}`;

            }


            if (heroVisualElement) {

                heroVisualElement.style.transform =
                    `translateY(${scroll * 0.08}px)`;

            }

        }

    });


    /* =====================================================
       11. ESCAPE KEY — CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (mobileMenu) {

                mobileMenu.classList.remove("active");

            }

            if (menuBtn) {

                menuBtn.textContent = "☰";

            }

        }

    });


    console.log(
        "Portfolio loaded successfully 🚀"
    );

});
```
