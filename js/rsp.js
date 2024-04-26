const buttons = document.querySelectorAll('button');
const comChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');
const result =['가위', '바위', '보'];
const show = function(user, computer, result){
    comChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = result;
};

const play = function(e){
    const user = e.target.innerText; // 사용자가 클릭한 값
    const randomIdx = Math.floor(Math.random() * 3); //0,1,2 난수 생성
    const computer = result[randomIdx];
    game(user, computer);
}
buttons.forEach((button) => {
    button.addEventListener('click', play);
});

const game = function(user, computer){
    let message;
    if(user === computer){
        message = "무승부!"
    } else {
        switch(user + computer){ //텍스트를 더해서 이어서 보여줌 가위 + 보 = 가위보
            case '가위보':
            case '바위가위':
            case '보바위':
                message = "사용자 승리!"
                break;
            case '가위바위':
            case '바위보':
            case '보가위':
                message = "컴퓨터 승리!"
                break;
        }
    }

    show(user, computer, message);
};




