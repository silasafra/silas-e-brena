let frame1 = document.querySelector('.frame-01');
let frame2 = document.querySelector('.frame-02');
let frame3 = document.querySelector('.frame-03');
let convite = document.querySelector('.convite');
console.log(frame1, frame2, frame3, convite);
let time = 6;

gsap.timeline()
    .fromTo(frame1, { display: 'block', opacity: 1 }, { duration: time, display: 'none', ease: 'sine.in' })
    .fromTo(frame2, { display: 'block', opacity: 1 }, { duration: time, display: 'none', ease: 'sine.in' })
    .fromTo(frame3, { display: 'block', opacity: 1 }, { duration: time, display: 'none', ease: 'sine.in' })
    .to(convite, { duration: 0, display: 'block' });

var pix = document.getElementById('pix');
var closeModal = document.getElementById('closeModal');

function openDialog() {
    pix.showModal();
}

closeModal.onclick = () => {
    pix.close();
    console.log('passou');
};
function closeDialog() {
    console.log('closeModal');
    pix.close();
}

function copyText() {
    var copyText = '73988878903';
    navigator.clipboard.writeText(copyText).then(
        function () {
            document.getElementById('copyButton').innerHTML = 'Copiado';
            setTimeout(function () {
                document.getElementById('copyButton').innerHTML = 'Copiar código do QR code';
            }, 3000);
        },
        function (err) {
            console.error('Failed to copy: ', err);
        }
    );
}
