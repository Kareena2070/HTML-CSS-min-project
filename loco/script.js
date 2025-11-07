// const scroll = new LocomotiveScroll({
//     //  el: document.querySelector('#main'),
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });


var tl = gsap.timeline()
tl.to('#yellow1', {
    top: '-100%',
    duration: 2,
    delay: 1,
    ease: "expo.out"
})

tl.from("#yellow2", {
    top: "100%",
    duration: 2,
    delay: 1,
    ease: "expo.out"
}, "anim")

tl.to("#loader h1", {
   delay: 0.6,
    duration: 2,
   color: "black",
}, "anim")

tl.to("#loader", {
    opacity: 0,
})

