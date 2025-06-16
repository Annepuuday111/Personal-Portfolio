function showMore() {
    const hiddenProjects = document.querySelectorAll('.project-card[style="display:none;"]');
    hiddenProjects.forEach(project => {
        project.style.display = 'block';
    });

    document.getElementById('showMoreBtn').style.display = 'none';
}

// document.addEventListener("DOMContentLoaded", function () {
//     const textElement = document.querySelector(".typing-effect");
//     const text = "Hi, I'm Uday";
//     let index = 0;
//     let isDeleting = false;

//     function typeEffect() {
//         if (!isDeleting) {
//             index++;
//         } else {
//             index--;
//         }

//         textElement.textContent = text.substring(0, index);

//         if (!isDeleting && index === text.length) {
//             setTimeout(() => isDeleting = true, 1000);
//         } else if (isDeleting && index === Math.floor(text.length / 2)) {
//             setTimeout(() => isDeleting = false, 500);
//         }

//         setTimeout(typeEffect, isDeleting ? 100 : 150);
//     }

//     setTimeout(typeEffect, 1000);
// });

document.addEventListener("DOMContentLoaded", function () {
    const educationCards = document.querySelectorAll(".education-card");
    const internshipCards = document.querySelectorAll(".internship-card");
    const skillCards = document.querySelectorAll(".skill-card");
    const certificationCards = document.querySelectorAll(".certification-card");

    function revealCards(cards, effectClasses) {
        let windowHeight = window.innerHeight;

        cards.forEach((card, index) => {
            let cardTop = card.getBoundingClientRect().top;
            let cardBottom = card.getBoundingClientRect().bottom;

            if (cardTop < windowHeight / 1.3 && cardBottom > 0) {
                card.classList.add(effectClasses[index % effectClasses.length]);
            } else {
                card.classList.remove(...effectClasses);
            }
        });
    }

    function revealOnScroll() {
        revealCards(educationCards, ["slide-left", "slide-right", "slide-left", "slide-right"]);
        revealCards(internshipCards, ["slide-left", "slide-right", "slide-left"]);
        revealCards(skillCards, ["slide-left", "slide-right", "slide-left", "slide-right"]);
        revealCards(certificationCards, ["slide-left", "slide-right", "slide-right", "slide-left"]);
    }

    window.addEventListener("scroll", revealOnScroll);
});

