const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
};

function getRandomColor() { 
    return (Math.floor(Math.random() * (255 - 10)) + 10);
}

(function changeColor(){
    setInterval( () => {
        let color = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        document.body.style.background = color
    }, 3000);
})()

