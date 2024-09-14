//animation for removel of cursor
let define = document.getElementById("define");
setTimeout(() => {
  define.style.borderRight = "0px";
}, 2800);
//animation for alternating text
let skillTextArr = ["Design", "Maintain", "Develop"];
let index = 0;
let skillText = document.getElementById("skill-text");
function changeText() {
  skillText.innerHTML = skillTextArr[index];
  index = (index + 1) % skillTextArr.length;
}
setTimeout(() => {
  setInterval(changeText, 1500);
}, 2000);
let project_cards = document.querySelectorAll('.project-item');
project_cards.forEach(card=>{
  card.onmousemove = function(e){
    let x = e.pageX -card.offsetLeft;
    let y = e.pageY - card.offsetTop;
    card.style.setProperty('--x',x +'px')
    card.style.setProperty('--y',y +'px')
  }
})