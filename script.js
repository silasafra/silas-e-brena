let frame1 = document.querySelector('.frame-01');
let frame2 = document.querySelector('.frame-02');
let frame3 = document.querySelector('.frame-03');
let convite = document.querySelector('.convite');
console.log(frame1, frame2, frame3, convite);

gsap.timeline()
    .to(frame1, { duration: 6, display: 'none' })
    .to(frame2, { duration: 12, display: 'none' }, '-=6')
    .to(frame3, { duration: 15, display: 'none' }, '-=6')
    .to(convite, { duration: 0, display: 'block' });
