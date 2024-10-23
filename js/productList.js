 // Enable Scroll
  const lenis = new Lenis({
    smoothWheel: true
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

gsap.to('.Product',{
     opacity:1,
    duration:.8,
     stagger:.2,
     ease:'none'
})
