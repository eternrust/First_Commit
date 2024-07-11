(() => {
    let InX = 0, InY = 0, OutX = -25, OutY = -25;
    let color = [1, 0.2128];
    let Timer = null;

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let grd = ctx.createLinearGradient(0,0,0, window.innerHeight);
    grd.addColorStop(0,"rgba(254, 152, 77)");
    grd.addColorStop(1, "rgba(254, 152, 77, 0.2128)");

    document.addEventListener('mousemove', (e) => {
        if(color[0] !== 1 && color[1] !== 0.2128) {
            color = [1, 0.2128];
            grd.addColorStop(0,"rgba(254, 152, 77)");
            grd.addColorStop(1, "rgba(254, 152, 77, 0.2128)");
            OutX = e.clientX;
            OutY = e.clientY;
        }

        InX = e.clientX;
        InY = e.clientY;
        draw();

        setTimeout(() => {
            OutX = e.clientX;
            OutY = e.clientY;
            draw();
        }, 100)

        if(Timer != null) {
            clearInterval(Timer);
            Timer = null;
        }

        Timer = setInterval(() => {
            requestAnimationFrame(disappear);
            clearInterval(Timer)
            Timer = null;
        }, 5000)
    })

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        grd = ctx.createLinearGradient(0,0,0, window.innerHeight);
        grd.addColorStop(0,`rgba(254, 152, 77, ${color[0]})`);
        grd.addColorStop(1, `rgba(254, 152, 77, ${color[1]})`);
    })

    const disappear = () => {
        color = [color[0] - 0.05, color[1] - 0.01564];
        grd.addColorStop(0,`rgba(254, 152, 77, ${color[0]})`);
        grd.addColorStop(1, `rgba(254, 152, 77, ${color[1]})`);

        if(color[0] <= 0.2) {
            console.log('ok')
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        draw();

        requestAnimationFrame(disappear);
    }

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(OutX, OutY, 30, 0, 2*Math.PI);
        ctx.strokeStyle = grd;
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(InX, InY, 5, 0, 2*Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();
    }
})()