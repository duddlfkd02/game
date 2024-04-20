let height = 6; //줄 개수
let width = 5; //단어 개수

let row = 0; //현재 줄
let col = 0; //현재 알파벳 인덱스

let gameEnd = false;
let word = 'abcde';


//페이지 로드 시 initialize 함수 불러오기
//initialize는 함수 보드판을 채워주는 함수
window.onload = function(){
    initialize();
};

function initialize(){

    //보드 만들기
    for(let r = 0; r < height , r++;){
        for(let c = 0; c < width; c++){
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add('tile');
            tile.innerText = "";
            document.getElementById('board').appendChild(tile);
        };
    };
    //키 입력
    //게임 끝났을 때 입력해도 이벤트 리스너 작동하지 않게 만듦
    document.addEventListener('keyup', function(){
        if(gameEnd) return;
    })
    
    if("KeyA" <= e.code && e.code <= "KeyZ"){
        if(col < width){
            let currTile = document.getElementById()
        }
    };
}