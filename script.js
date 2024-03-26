let frame1 = document.querySelector('.frame-01');
let frame2 = document.querySelector('.frame-02');
let frame3 = document.querySelector('.frame-03');
let convite = document.querySelector('.convite');
console.log(frame1, frame2, frame3, convite);

gsap.timeline()
    .fromTo(frame1, { display: 'block', opacity: 1 }, { duration: 6, display: 'none', opacity: 0, ease: 'circ.in' })
    .fromTo(frame2, { display: 'block', opacity: 1 }, { duration: 6, display: 'none', opacity: 0, ease: 'circ.in' })
    .fromTo(frame3, { display: 'block', opacity: 1 }, { duration: 6, display: 'none', opacity: 0, ease: 'circ.in' })
    .to(convite, { duration: 0, display: 'block' });
