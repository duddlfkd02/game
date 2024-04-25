const $form = document.querySelector('#form');
const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

function drawBall(number, $parent){
    const $ball = document.createElement('div');
        $ball.className = 'ball';
        $ball.textContent = number;
        colorize(number, $ball);
        $parent.appendChild($ball);
}
//공 색깔 함수
function colorize(number, $tag){
    if(number < 10){
        $tag.style.backgroundColor = 'tomato';
        $tag.style.color = 'white';
    } else if (number < 20){
        $tag.style.backgroundColor = 'orange';
        $tag.style.color = 'white';
    } else if (number < 30){
        $tag.style.backgroundColor = 'yellow';
    } else if (number < 40){
        $tag.style.backgroundColor = 'blue';
        $tag.style.color = 'white';
    } else {
        $tag.style.backgroundColor = 'pink';
    }
}


//* -- async, await 사용 시 Promise 변수 설정. --*
// const setTimeoutPromise = (ms) => new Promise((resolve, reject) =>{
//     setTimeout(resolve,ms);
// });
let clicked = true; //flag 함수 선언
$form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!clicked){ // 이미 클릭하면 함수 종료
        return;
    }
    clicked = false;
    $result.innerHTML = '당첨숫자: ';
    $bonus.innerHTML = '보너스 숫자: ';
    //검사
    const string = e.target.input.value; // 1,2,3,4,5,6 -> [1,2,3,4,5,6]
    if(!string.trim()){//trim은 공백을 줄여줌
        return alert('숫자를 입력하세요.');
    }
    const myNum = string.split(',').map((v) => parseInt(v.trim()));
    if(myNum.length !== 6){
        return alert('숫자 6개 입력하세요.');
    }
    if(new Set(myNum).size !== 6){//중복된 숫자가 있다면
        return alert('중복된 숫자를 입력했습니다.');
    }
    if(myNum.find((v) => v > 45 || v < 1)){
        return alert('1부터 45까지만 입력 가능합니다.')
    }
    //45개의 숫자를 랜덤으로 뽑아서 보여줌
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];

    while (candidate.length > 0){ //> 0 없어도 상관없다.
        const random = Math.floor(Math.random() * candidate.length)
        const spliceArray = candidate.splice(random, 1);
        const value = spliceArray[0]; //splice는 [] 배열로 뽑아주기 때문에 숫자만! 뽑으려면 끝에 [0]을 써줘야한다.
        shuffle.push(value);
    }
    console.log(shuffle);

    const winBalls = shuffle.slice(0,6).sort((a,b) => a - b);
    const bonus = shuffle[6];
    console.log(winBalls, bonus);

    //공 순서대로 표시하기
    for(let i = 0; i < winBalls.length; i++){
        setTimeout (function(){
            drawBall(winBalls[i],$result);
        },(i + 1)*1000);
    }
    setTimeout (function(){
        drawBall(bonus,$bonus);
    },7000);

    //등수 체크하기
    let count = 0;
    myNum.forEach((function(my){
        if(winBalls.includes(my)){
            count++;  
        }
    }));
    // myNum.forEach((my) => {
    //     if(winBalls.includes(my)){
    //         count++;
    //     }
    // });
    if(count === 6){
        alert('1등! 당첨입니다!')
    } else if(count === 5){
        if(myNum.includes(bonus)){
            alert('2등!')
        } else {
            alert('3등!')
        }
    }else if (count === 4){
        alert('4등!')
    } else if (count === 3){
        alert('5등!')
    } else { 
        alert('다음 기회에')
    };

    clicked = true; // 클릭 가능
    
});

    //* -- async 와 await으로 수정하기 (수정 시 위에 function(e)를 async(event)로 수정)
    // for(let i = 0; i < winBalls.length; i++){
    //     await setTimeoutPromise(1000);
    //     drawBall(winBalls[i], $result);
    // }
    // await setTimeoutPromise(1000);
    // drawBall(bonus, $bonus);


    //* -- drawBall 함수 빼기 전 원래 코드 --*/
    // for(let i = 0; i < 6; i++){
    //     setTimeout (function(){
    //         const $ball = document.createElement('div');
    //         $ball.className = 'ball';
    //         $ball.textContent = winBalls[i];
    //         $result.appendChild($ball);
    //     },(i + 1)*1000);
    // }
    // setTimeout (function(){
    //     const $ball = document.createElement('div');
    //         $ball.className = 'ball';
    //         $ball.textContent = bonus;
    //         $bonus.appendChild($ball);
    // },7000);
    


//while? for?
//while은 몇 번 반복해야할 지 모를 때 사용하고 for은 정확히 반복횟수를 알 때 사용