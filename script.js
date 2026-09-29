/* =========================================
   GREEN CAMPUS WEBSITE
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu when clicking navigation link */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }

    const statsSection = document.querySelector(".stats");

    const sectionPosition =
        statsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight * 0.85;


    if (sectionPosition < screenPosition) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.getAttribute("data-target"));

            let current = 0;

            const increment = target / 100;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target + "+";

                }

            };

            updateCounter();

        });

    }

}


window.addEventListener("scroll", startCounters);

startCounters();


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the fields.");

        return;

    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );


    contactForm.reset();

});


/* =========================================
   SOLAR ENERGY BUTTON
========================================= */

const solarButton =
    document.getElementById("solarButton");


solarButton.addEventListener("click", () => {

    alert(
        "Solar energy is a clean and renewable source of electricity. " +
        "Using solar power can help reduce dependence on conventional energy sources."
    );

});


/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});