const barBtn = document.getElementById('menu_bar_btn');
const aboutBtn = document.getElementsByClassName('about-btn');
const aboutContent = document.getElementsByClassName('about_info');
const customer = document.getElementById('customer_count');
const project = document.getElementById('project_count');
const coffee = document.getElementById('coffee_count');

const menuBarSlideFunction = () => {
    barBtn.addEventListener('click', function(e){
    const menu = document.getElementById('main_nav_menu');
    menu.classList.toggle('nav_active');
})
}

// about section class toggle function
const aboutBtnFunctionality = () => {
    for (let i = 0; i < aboutBtn.length; i++){
        aboutBtn[i].addEventListener('click', function(){
            for (let j =0; j < aboutBtn.length; j++){
                aboutBtn[j].className = 'about-btn';
                aboutContent[j].classList.remove('about_info_active');
            }
            this.classList.add('about_btn_active');
            if (i < aboutContent.length){
                aboutContent[i].classList.add('about_info_active');
            }
        })
    }
}

// counter increment founction
const incrementCounter = (num, node,time,val) => {
    node.innerHTML = 0
    let i = 0; 
    const startCounter = () => {
        if (i < num + val){
            node.innerHTML = i;
            i = i + val;
            setTimeout(startCounter, time)
        }
    }
    return startCounter
}

// slider function
const mySliderFunction = () => {
let slideIndex = 0;
const sliders = document.getElementsByClassName('slide_wrapper');
const sliderArray = Array.from(sliders);

return () => {
    if (slideIndex >= sliderArray.length){
        slideIndex = 0;
    }
    sliderArray.map(ele => {
        if (ele.className.endsWith('previous_slide')){
             ele.className = "slide_wrapper next_slide";
        }else if (ele.className.endsWith('active_slide')){
            ele.className = "slide_wrapper previous_slide";            
        }else {
            ele.className = "slide_wrapper next_slide"            
        }
        return ele;
    })
    
    sliderArray[slideIndex].className = "slide_wrapper active_slide"

    slideIndex++;
    
}
}

const slider = mySliderFunction();

setInterval(slider, 4000)
const containers = Array.from(document.getElementsByClassName('slideUpAnim'));
const portfolio = Array.from(document.querySelectorAll('.portfolio_area'))

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            if (entry.target.id === 'counter_section'){
                customerCount();
                projectCount();
                coffeeCount();
            }
            entry.target.classList.add('section_animation')
        }
    })
})

let observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('portfokio_anim');
        }
    })
})

// map section
function initMap() {
    const myLocation = { lat: 24.921617, lng: 89.961643 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLocation,
    });
    const marker = new google.maps.Marker({
      position: myLocation,
      map: map,
    });
  }


// end of map section

window.addEventListener('load', (e) => {
    containers.forEach(con => observer.observe(con))
    portfolio.forEach(port => observer2.observe(port))
})


window.addEventListener('scroll', function(){
    if (window.innerWidth > 991){
        if (window.scrollY > 5 || document.documentElement.scrollTop > 5 ){
            document.getElementsByClassName('header-container')[0].style.paddingTop = "0px"
            document.getElementsByClassName('header-container')[0].style.paddingBottom = "0px"
            document.getElementsByClassName('header-container')[0].style.backgroundColor = "#0d86f8"
    
        }else {
            document.getElementsByClassName('header-container')[0].style.paddingTop = "1rem"
            document.getElementsByClassName('header-container')[0].style.paddingBottom = "1rem"        
            document.getElementsByClassName('header-container')[0].style.backgroundColor = "transparent"
        }
    }
    
})


const customerCount = incrementCounter(3000, customer, 1,1);
const projectCount = incrementCounter(320, project,50,1);
const coffeeCount = incrementCounter(1000, coffee,10,1);

aboutBtnFunctionality()
menuBarSlideFunction()













// const slider = () => {
//     const slider = document.getElementsByClassName('slide_wrapper');
//     let isActive = false;
//     for (let i = 0; i < slider.length; i++){
//         if (slider[i].className.endsWith('active_slide')){
//             slider[i].className = 'slide_wrapper previous_slide';
//             continue;
//         }
//         if (slider[i].className.endsWith('next_slide')){
//             if (!isActive){
//                 slider[i].className = 'slide_wrapper active_slide';
//                 isActive =true;
//                 continue;
//             }
//         }
//         if (slider[i].className.endsWith('previous_slide')){
//             slider[i].className = 'slide_wrapper next_slide';
//             continue;
//         }
        
//         if (slider[i].className.endsWith('slide_wrapper')){
//             slider[i].className = 'slide_wrapper next_slide';
            
//         }
//     }
// }