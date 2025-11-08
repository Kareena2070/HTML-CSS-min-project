const scroll = new LocomotiveScroll({
    //  el: document.querySelector('#main'),
    el: document.querySelector('#main'),
    smooth: true
});


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


