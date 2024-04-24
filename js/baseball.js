const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let i = 0; i < 9; i += 1){
    numbers.push(i + 1);
}

const answer =[]; //4개
for(let i = 0; i < 4; i += 1){
    const index = Math.floor(Math.random() * (numbers.length));
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}

console.log(answer);

const tries = [];
function checkInput(input) {
    if(input.length !== 4){ //길이는 4가 아닌가
        return alert('4자리 숫자를 입력해주세요.')
    }
    if(new Set(input).size !== 4){ // 중복된 숫자가 있는가 **new Set은 배열에서 중복을 제거함, length 가 아니라 size를 씀
        return alert('중복되지 않게 입력하세요.')
    }
    if(tries.includes(input)){// 이미 시도한 값은 아닌가
        return alert('이미 시도한 값입니다.')
    }
    return true;
    
} // 검사하는 코드

// function defeated(){
//     const message = document.createTextNode('패배! 정답은' + answer);
//     $logs.appendChild(message);
// } // 실패 함수

$form.addEventListener('submit',function(e){
    e.preventDefault(); //기본 동작 막기
    const value = $input.value; // = event.target(0).value
    $input.value= '';
    if(!checkInput(value)){
        return;
    }//if문 중첩되는 걸 막기 위함, checkInput 아닌건 return 시켜라.

    //입력값 문제없음
    if(answer.join('') === value){ // join : 배열을 문자열로 바꾸는 함수 [3,1,4,6] -> '3146'
        $logs.textContent = '홈런!';
        return;
    }
    if(tries.length >= 9){ //기회 10번 이상 시 실패
        const message = document.createTextNode('패배! 정답은' + answer);
        $logs.appendChild(message);
        return;
    }
    //몇 스트라이크 몇 볼인지 검사
    let strike = 0;
    let ball = 0;
    for(i = 0; i < answer.length; i++){ // 입력한 숫자 1개씩을 정답과 비교
        const index = value.indexOf(answer[i]);
        if(index > -1){ //(0,1,2,3 이니까 -1), 일치하는 숫자 발견
            if(index === i){ //자리도 같음
                strike += 1;
            } else { //자리는 다르고 숫자만 같다
                ball += 1;
            }
        }
    }
    //아웃!
    if(strike === 0 && ball === 0){
        out++;
        $logs.append(value + '아웃', document.createElement('br'));
        // $logs.style.color = 'red';
    } else {
        $logs.append(value + ':' + strike + '스트라이크' + ball + '볼', document.createElement('br'));
    }
    if(out === 3){
        $logs.append(message);
    }
    tries.push(value);

    // console.log('submit');
});