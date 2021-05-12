
const barBtn = document.getElementById('menu_bar_btn');
const aboutBtn = document.getElementsByClassName('about-btn');
const aboutContent = document.getElementsByClassName('about_info');
const customer = document.getElementById('customer_count');
const project = document.getElementById('project_count');
const coffee = document.getElementById('coffee_count');
const type = document.getElementById('typed_text');

const containers = Array.from(document.getElementsByClassName('slideUpAnim'));
const portfolio = Array.from(document.querySelectorAll('.portfolio_area'))


// menu toggle function for responsive layout
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

const customerCount = incrementCounter(3000, customer, 1,1);
const projectCount = incrementCounter(320, project,50,1);
const coffeeCount = incrementCounter(1000, coffee,10,1);

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
// animation on scroll functionalities

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

// typing effectin hero container area functionalies
let i = 0;
const typeText = ["A web devloper", "A web designer", "A wordpress developer"]
const speed = 100;
let backwards = false;
let line = 0;
const typeWritter = () => {

    if (i < typeText[line].length && !backwards){
        document.getElementById('typed_text').innerHTML += typeText[line][i];
        i++;
        setTimeout(typeWritter, speed)
    }else if((i >= typeText[line].length || backwards) && i > 0){
        console.log(i, backwards)
        if (i == typeText[line].length){
            --i;
            backwards = true;
            setTimeout(typeWritter, 2000)
        }else {
            --i;
        backwards = true;
        document.getElementById('typed_text').innerHTML = typeText[line].substring(0,i);
        // i--;
        if (i == 0){
            backwards = false;
            line = line < typeText.length - 1 ? line + 1 : 0;
        }
        setTimeout(typeWritter, speed)
        }
        
    }
}

// some functionality after page load

window.addEventListener('load', (e) => {
    containers.forEach(con => observer.observe(con))
    portfolio.forEach(port => observer2.observe(port))
    setTimeout(typeWritter, 1000)
    // typeWritter()
})


aboutBtnFunctionality()
menuBarSlideFunction()


// calling the slider function
const slider = mySliderFunction();
setInterval(slider, 4000)