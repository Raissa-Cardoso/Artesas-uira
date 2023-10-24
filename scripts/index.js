function dropMenu() {
  const navMenu = document.querySelector("nav");
  navMenu.classList.toggle('appearMenu')
  if(navMenu.classList.contains('appearMenu')){
    document.querySelector("header button img").src="./assets/close-menu.svg"
  }else{
    document.querySelector("header button img").src="./assets/menu.svg"
  }
}

function menuSelected(e) {
  if(!e=='home'){
    document.querySelectorAll("nav a").forEach((option) => {
      if (option.classList == "selected") {
        option.classList.remove("selected");
      }
      event.target.classList.add("selected");
    });
  }else{
    document.querySelectorAll("nav a")[0].classList.add('selected')
  }
}

const elements = document.querySelectorAll('.hidden')
const testimonials = document.querySelectorAll('.desappear')
const header = document.querySelector('.pageTop')
const pageUP = document.querySelector('.pageUp-wrapper')
observer(elements, "show")
observer(testimonials,"appear")
observerHeader(header)

function observer(elements,classCSS){
  const observer = new IntersectionObserver((element)=> {
    element.forEach((el)=>{
      if(el.isIntersecting){
        el.target.classList.add(`${classCSS}`)
      } else {
        el.target.classList.remove(`${classCSS}`)
      }
    })
  })
  elements.forEach((element)=>{
    observer.observe(element)
  })
}

function observerHeader(element){
  const observerHeader = new IntersectionObserver((element)=> {
    element.forEach((el)=>{
      if(!el.isIntersecting){
        pageUP.classList.add('show')
      }else{
        pageUP.classList.remove('show')
      }
    })
    })
  observerHeader.observe(element)
}
