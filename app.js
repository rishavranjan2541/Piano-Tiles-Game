var element = document.getElementsByClassName("square");
function glow() {
    var arr = [];
    while(arr.length < level){
        var r = Math.floor(Math.random() * 16);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let n = arr.pop()
    l1.push(n)
    element[n].classList.add("blue");
    setTimeout(function(){
        element[n].classList.remove("blue");
    },1000);
    return null;
}

function sglow(i) {
    document.getElementById('main').style.pointerEvents = 'none'; 
    let a = setInterval(() => {
        glow();
    }, 1000);
    setTimeout(function(){
        clearInterval(a)
        document.getElementById('main').style.pointerEvents = 'auto'; 
    },i*1000);
    return null;
}
let squares = Array.from(document.getElementsByClassName('square'));
squares.map( square => {
    square.addEventListener('click', (e) => {
        l2.push(Number(square.id))
    });
});
let level=1;
const scoretag = document.getElementById("scoreSpan");
let score=0;
let l1=[];
let l2=[];
function levelup(level){
    l1=[];
    l2=[];
    sglow(level);
    m=setInterval(() => {
        if(l2.length>=1){
            if(l2.length==l1.length){
                l2.sort()
                l1.sort()
                if(JSON.stringify(l1)==JSON.stringify(l2)){
                    score+=l1.length;
                    level+=1;
                    scoretag.innerHTML = "Score:"+score;
                    clearInterval(m)
                    levelup(level);
                }
                else{
                    alert("Game Over");
                        clearInterval(m)
                }
            }
        }
    }, 1000);
}
levelup(1)