const hamburger_btn = document.querySelector('.hamburger-btn')
const mobile_dropdown = document.querySelector('.mobile-dropdown')
const body_tag = document.querySelector('body')
const html_tag = document.querySelector('html')

let isNav = false

hamburger_btn.addEventListener('click', function () {
        hamburger_btn.classList.toggle('active')
        mobile_dropdown.classList.toggle('active')

        isNav = !isNav  //toggle isNav on each onClick

        if (isNav){
            body_tag.style.overflow = "hidden"
            html_tag.style.overflow = "hidden"
            
        }    
        else{
            body_tag.style.overflow = "auto"
            html_tag.style.overflow = "auto"
        }
});