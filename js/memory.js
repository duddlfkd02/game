const cards = document.querySelectorAll(".cards li");

let cardOne, cardTwo; //카드 선택
let disableDeck = false;


function flipCard(e){
  
    let clickedCard = e.target;

    if(clickedCard !== cardOne && !disableDeck){ //!는 논리 부정 연산자 (논리값을 반전시킴 ex.false > true)
        clickedCard.classList.add("flip");

        if(!cardOne){
            return cardOne = clickedCard
        }
        cardTwo = clickedCard;
        disableDeck = true;

        let cardOneImg = cardOne.querySelector(".back img").src;
        let cardTwoImg = cardOne.querySelector(".back img").src;

        matchCards(cardOneImg,cardTwoImg);

    }
}

//카드 두개 비교
function matchCards(img1, img2){
    if(img1 == img2){ // 두 카드가 맞으면
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo ="";
        return disableDeck = false;
    } else { //틀렸을 경우
        setTimeout(function(){
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        },400);

        setTimeout(function(){
            cardOne.classList.add("shake","flip");
            cardTwo.classList.add("shake","flip");
            cardOne = cardTwo ="";
        return disableDeck = false;
        },1200);
    }
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});