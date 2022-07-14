let clicked = false;
const inWidth = screen.width;
document.addEventListener('mousemove',(event) => {newBubble(event); clicked = false;});
document.addEventListener('mousedown', (event) => {isclick(event); clicked = true;});
document.addEventListener('mouseup', (event) => clicked = false);
function isclick(e) {
    const bubble = setInterval(() => {
        if(!clicked) clearInterval(bubble);
        newBubble(e);
    }, 50);
}

function newBubble(e) {
    let d = Math.random()*10;
    let x = e.clientX;
    let y = e.clientY;
    let size = 2;
    const div = document.createElement('div');
    div.classList.add('bubble');
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    document.body.appendChild(div);
        const box = setInterval( () => {
            size += Math.random();
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            if(size > 5) clearInterval(box);
        }, Math.random()*1000);
        const up = setInterval(() => {
            d = Math.random()*10;
            y -= Math.random()*10;
            if(d>=5) {
                x += Math.random()*2;
            } else {
                x -= Math.random()*2;
            }
            div.style.left = `${x}px`;
            div.style.top = `${y}px`;
            if(y < -10 || x < -10 || x > inWidth + 10) {
               clearInterval(up);
            }
        },Math.random()*50);
        setTimeout(() => {document.body.removeChild(div);}, 1000);

}