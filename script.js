/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 600);
});

/* ==========================
   TYPING ANIMATION
========================== */

const words = [
    "Java Full Stack Developer",
    "Frontend Developer",
    "Java Developer",
    "SQL Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* ==========================
   DARK MODE
========================== */

const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        toggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        toggle.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
/* ==========================
   SKILL BAR ANIMATION
========================== */

const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {

    progressBars.forEach((bar) => {

        const width = bar.className.includes("html") ? "95%" :
                      bar.className.includes("css") ? "90%" :
                      bar.className.includes("javascript") ? "85%" :
                      bar.className.includes("java") ? "90%" :
                      bar.className.includes("sql") ? "88%" : "80%";

        bar.style.width = "0";

        setTimeout(() => {
            bar.style.width = width;
        }, 300);

    });

}

window.addEventListener("load", animateSkills);

/* ==========================
   CONTACT FORM
========================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        form.reset();

    });

}

/* ==========================
   SCROLL REVEAL
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((section) => {

    observer.observe(section);

});

/* ==========================
   PROFILE IMAGE EFFECT
========================== */

const profile = document.querySelector(".profile-card");

if (profile) {

    profile.addEventListener("mousemove", () => {

        profile.style.transform = "scale(1.05) rotate(3deg)";

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform = "scale(1) rotate(0deg)";

    });

}
/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn = document.createElement("button");
topBtn.innerText = "⬆";
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ==========================
   AI GLOWING CURSOR
========================== */

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


/* ==========================
   FLOATING PARTICLES
========================== */

function createParticle() {
    const p = document.createElement("span");
    p.classList.add("particle");

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = window.innerHeight + "px";

    document.body.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 5000);
}

setInterval(createParticle, 250);


/* ==========================
   PAGE LOAD ANIMATION
========================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


