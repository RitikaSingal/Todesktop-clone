const navbar = document.querySelector('#nav-bar');
const ansToggle = document.getElementById('ansToggle');

function handleMenu(){
    navbar.classList.toggle('hidden');
}


function setUpIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) =>{
         const isIntersecting = entries[0].isIntersecting;
         if(isIntersecting){
            document.addEventListener('scroll', scrollHandler)
         }
         else{
            document.removeEventListener('scroll',scrollHandler)
         }
    }
   const intersectionObserver = new IntersectionObserver(intersectionCallback);
   intersectionObserver.observe(element);

   function scrollHandler(){
    const translateX = (window.innerHeight - element.getBoundingClientRect().top)*speed;
    if(isLTR){
        element.style.transform = `translateX(${translateX}px)`;
    }
    else{
        element.style.transform = `translateX(${-translateX}px)`;

    }
   }
}


function intersetionObserver2(element, speed){
    const intersectionCallback = (entries) =>{
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler)
        }
        else{
            document.removeEventListener('scroll',scrollHandler)
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
    
    function scrollHandler(){
        const translateY = (window.innerHeight - element.getBoundingClientRect().top - 500)*speed;
        element.style.transform = `translateY(${-translateY}px)`;
    }
}

const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

setUpIntersectionObserver(line1, true, 0.16)
setUpIntersectionObserver(line2, false, 0.18)
setUpIntersectionObserver(line3, true, 0.16)

const img1 = document.getElementById('img1');

intersetionObserver2(img1, 0.15)
const ftrMoving = document.getElementById('ftrMoving');
setUpIntersectionObserver(ftrMoving,false, 0.7);


const dtElements = document.querySelectorAll('dt')
dtElements.forEach(element=>{
    element.addEventListener('click', ()=>{
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const getIcon = element.querySelector('i');
        ddElement.classList.toggle('hidden');
        getIcon.classList.toggle('rotate-180');
    })
})

