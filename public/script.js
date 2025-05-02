let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('nav a');
const items = document.querySelectorAll('li');
const spotLight = document.querySelector('#spotlight');
const logo = document.querySelector('#navLogo');
const icons = document.querySelectorAll("#skills div");

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`nav a[href*=${id}]`).classList.add('active');
            }),
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
};

function toggleDropMenu(){
    let dropMenu = document.querySelector('#dropMenu');
    dropMenu.classList.toggle('hidden');
}

let introCard = document.getElementById('introCard');
window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    introCard.style.marginTop = value*-0.4 + 'px';
})

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        logo.style.opacity = '0';
    } else {
        // Scrolling up
        logo.style.opacity = '1';
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Ensure it doesn't go negative
});

// const iconVariants = (duration) => ({
//     initial: {y: -10},
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         }
//     },
// });

const customCursor = document.querySelector("#cursor");
const cursorOutline = document.querySelector("#cursor-outline");

window.addEventListener("mousemove", function(e) {

    const posX = e.clientX;
    const posY = e.clientY;

    customCursor.style.left = `${posX}px`;
    customCursor.style.top =  `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
        },{ duration: 500, fill: "forwards"});
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});