const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const aniDuration = 3;

gsap.to("h2.title", { duration: aniDuration, opactiy: 0.3 });
gsap.to(".box", { duration: aniDuration, delay: 3, x: 300, y: 100, ease: "elastic.out(1, 0.3)", opactiy: 1 });
gsap.to(".green", { duration: aniDuration, rotation: 360, scale: 0.5, repeat: -1, yoyo: true });

addEventListener('load', function () {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;
    let curX = 0;
    let curY = 0;
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        gsap.to(".horizontal",.5,{y:mouseY});
        gsap.to(".vertical",.5,{x:mouseX});
        gsap.to(".target",.5,{x:mouseX, y:mouseY});
        gsap.to(".tag",.5,{x:mouseX, y:mouseY});
        tag.innerHTML = `${Math.ceil(mouseX)}px ${Math.ceil(mouseY)}px`
    });
});

// addEventListener('load', function() {
//     const targetRect = target.getBoundingClientRect();
//     const targetHalfWidth = targetRect.width / 2;
//     const targetHalfHeight = targetRect.height / 2;
//     let curX = 0;
//     let curY = 0;
//     let mouseX = 0;
//     let mouseY = 0;
//     document.addEventListener('mousemove', (event) => {
//         mouseX = event.clientX;
//         mouseY = event.clientY;
//         console.log(mouseX + "px"+ mouseY +"px");
//         console.log(`${mouseX}px ${mouseY}px`);
//     });
//     function animate() {
//         requestAnimationFrame(animate);
//         curX += (mouseX - curX) * 0.1;
//         curY += (mouseY - curY) * 0.1;
//         horizontal.style.transform = `translateY(${curY}px)`;
//         vertical.style.transform = `translateX(${curX}px)`;
//         target.style.transform = `translate(${curX - targetHalfWidth}px, ${curY - targetHalfHeight}px)`;
//         tag.style.transform = `translate(${curX}px, ${curY}px)`;
//         tag.innerHTML = `${Math.ceil(curX)}px ${Math.ceil(curY)}px`
//     }
//     animate();
// });

// addEventListener('load', function() {
//     const targetRect = target.getBoundingClientRect();
//     const targetHalfWidth = targetRect.width / 2;
//     const targetHalfHeight = targetRect.height / 2;
//     document.addEventListener('mousemove', (event) => {
//         const x = event.clientX;
//         const y = event.clientY;
//         console.log(x + "px"+ y +"px");
//         console.log(`${x}px ${y}px`);
//         horizontal.style.transform = `translateY(${y}px)`;
//         vertical.style.transform = `translateX(${x}px)`;
//         target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
//         tag.style.transform = `translate(${x}px, ${y}px)`;
//         tag.innerHTML = `${x}px ${y}px`
//     });
// });