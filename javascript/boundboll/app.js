(() => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const keys = {};
    const moveGap = canvas.height / 50;
    let LeftLocation = 0;
    let rightLocation = 0;

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = '#DDD';
        ctx.fillRect(0, 0, canvas.width / 192, canvas.height);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#DDD';
        ctx.fillRect(canvas.width, 0, -(canvas.width / 192), canvas.height);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#FA4932';
        ctx.fillRect(canvas.width / 48, LeftLocation, canvas.width / 96, canvas.height / 5);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#FA4932';
        ctx.fillRect(canvas.width - (canvas.width / 48) - (canvas.width / 96), rightLocation, canvas.width / 96, canvas.height / 5);
        ctx.fill();
    };

    document.addEventListener('keydown', (e) => {
        if(e.key.toLowerCase() === 'w') {
            LeftLocation = LeftLocation <= 0 ? 0 : LeftLocation - moveGap;
            draw();
        }
        if(e.key.toLowerCase() === 's') {
            LeftLocation = LeftLocation + canvas.height / 5 >= canvas.height ? canvas.height - canvas.height / 5 : LeftLocation + moveGap
            draw();
        }
        if(e.key === 'ArrowUp') {
            rightLocation = rightLocation <= 0 ? 0 : rightLocation - moveGap;
            draw();
        }
        if(e.key === 'ArrowDown') {
            rightLocation = rightLocation + canvas.height / 5 >= canvas.height ? canvas.height - canvas.height / 5 : rightLocation + moveGap
            draw();
        }
    });

    draw();
})()