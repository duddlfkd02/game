
// const cardDeck = [{
//     card : "monkey"
//     isOpen : true;
//     isOpen: flase
// }]

const BOARD_SIZE = 16;

//카드 덱 만들기
function makeCardDeck(){
    let randomNumArr = [];

    //준비한 이미지 = 16개, 필요한 이미지는 8개이므로 2로 나누기
    for(let i = 0; i < BOARD_SIZE / 2; i++){
        let randomNum = getRandom(16,0);

        //중복검사
        if(randomNumArr.indexOf(randomNum) === -1){
            randomNumArr.push(randomNum);
        } else {
            i--;
        }
    }
    //카드는 두장씩 필요하므로 하나 더 추가
    randomNumArr.push(...randomNumArr);
}

//무작위로 카드 섞기
function shuffle(array){
    array.sort(() => Math.random() -0.5);
    console.log(array)
}

//Open
function openCard(id){
    cardBack[id].style.transform = "rotateY(180deg)";
    cardFront[id].style.transform = "rotateY(0deg)";
}

//Close
function closeCard(indexArr){
    cardBack[indexArr].style.transform = "rotateY(0deg)";
    cardFront[indexArr].style.transform = "rotateY(-180deg)";
}