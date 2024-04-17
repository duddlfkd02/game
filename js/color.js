const colors = ["green" , "red" , "rgba(133,122,200)" , "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // 0,1,2,3 색상을 랜덤으로 받아오기
    const randomNumber = getRandomNumber();
    console.log(randomNumber); //0.3232183 이런 숫자 뜨는 것 보여줌 > 밑에 올림처리로 0,1,2,3 만듦

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};