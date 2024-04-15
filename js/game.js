const introTitle = document.getElementsByClassName("intro_title")[0];
const title = "Hello, \nGame \nWorld!"; //출력할 문장 함수 저장
        
let cnt = 0;
let timer = 0;


function typingTitle(){
    let character = title[cnt++];

    //한 글자씩 읽다가 \n 만나면 br로 대체
    if (character === "\n"){
        introTitle.innerHTML = introTitle.innerHTML + "<br/>";
    } else {
        introTitle.innerHTML = introTitle.innerHTML + character;
    }

    if (cnt === title.length){
        clearInterval(timer);

        return;
    }
}

window.onload =function(){
    timer = setInterval(typingTitle, 200);
}

const introbtn = document.getElementsByClassName("btn")[0];
const game = document.getElementsById("game");

introbtn.addEventListener("click", function(){
    game.scrollIntroView({behavior:"smooth"})
});
