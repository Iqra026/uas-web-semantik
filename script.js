document.addEventListener("DOMContentLoaded", () => {
    // 1. THEME TOGGLER
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set initial theme (default to dark)
    let currentTheme = savedTheme || (systemPrefersDark ? "dark" : "dark");
    htmlElement.setAttribute("data-theme", currentTheme);
    
    // Theme toggle click handler
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            currentTheme = htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
            htmlElement.setAttribute("data-theme", currentTheme);
            localStorage.setItem("theme", currentTheme);
        });
    }

    // 2. MOBILE MENU (HAMBURGER)
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            
            // Toggle hamburger icon between bars and times
            const icon = hamburger.querySelector("i");
            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
        
        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = hamburger.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }

    // 3. HEADER SCROLL EFFECT
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 4. ACTIVE LINK HIGHLIGHT ON SCROLL & ANIMATE SKILL BARS
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");
    const skillBars = document.querySelectorAll(".skill-bar-fill");
    
    // Intersection Observer for Skills Animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const percentage = fill.getAttribute("data-percentage");
                fill.style.width = percentage + "%";
                skillObserver.unobserve(fill); // Only animate once
            }
        });
    }, { threshold: 0.1 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Window scroll for active navigation highlighting
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset for fixed header
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${currentSectionId}`) {
                item.classList.add("active");
            }
        });
    });
});
