let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('nav a');
window.onscroll = () => {
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('nav a[href*='+id+']').classList.add('active')
            })
        }
    })
};
function openLinks() {
    const links_elm = document.querySelector("#links");
    links_elm.classList.toggle('open');
}
const toggleBtn = document.querySelector('.toggle_btn'); 
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropMenu = document.querySelector('.dropmenu');

toggleBtn.onclick = function () {
  dropMenu.classList.toggle('open')
  const isOpen = dropMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'bx bx-x'
  : 'bx bx-menu'
};
