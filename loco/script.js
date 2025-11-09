

function loading(){
    var tl = gsap.timeline()
    tl.to('#yellow1', {
        top: '-100%',
        duration: 0.9,
        delay: 0.6,
        ease: "expo.out"
    })

    tl.from("#yellow2", {
        top: "100%",
        duration: 0.5,
        delay: 1,
        ease: "expo.out"
    }, "anim")

    tl.to("#loader h1", {
        delay: 0.6,
        duration: 0.9,
    color: "black",
    }, "anim")

    tl.to("#loader", {
        opacity: 0,
    })
    tl.to("#loader", {
        display: "none",
    })
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector("#footer h2").addEventListener("click", function(){
    scroll.scrollTo(0)
})




let elems = document.querySelectorAll('.elem')
let page2 = document.querySelector('#page2')

elems.forEach(function(ele){
    ele.addEventListener('mousemove', function(){
        let bgimg = ele.getAttribute('data-img')
        page2.style.backgroundImage = `url(${bgimg})`
        ele.style.color = "#000"
        
    })
})
elems.forEach(function(ele){
    ele.addEventListener('mouseleave', function(){
        ele.style.color = "#fff"
        
    })
})