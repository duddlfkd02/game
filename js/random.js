//9개 중 4개 랜덤으로 뽑기
const numbers = [];
for (let i = 0; i < 9; i += 1){
    numbers.push(i + 1);
}

const answer =[]; //4개
for(let i = 0; i < 4; i += 1){
    const index = Math.floor(Math.random() * (numbers.length));
    answer.push(numbers[index]); //index만 적는거랑 무슨 차이..?
    numbers.splice(index, 1);
}

console.log(answer);