

 
document.addEventListener('mousemove', function(e){
    let r = Math.round(e.pageX * 255/window.innerWidth);
    let b = Math.round(e.pageY * 255/window.innerHeight);
    const g = (b-r)+25;
    const color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
    console.log(color);
  });
  
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
    }

    const letters = document.querySelectorAll('.letter');
       

       setInterval(function (){
        for(let letter of letters) {
            letter.style.color = randomRGB();
           }
       }, 1000);
       

