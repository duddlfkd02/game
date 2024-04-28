const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


// ** 아래는 수동으로 변경하는 단점이 있다
// let futureDate = new Date(2024, 3, 28, 11, 30, 0); 
// ** 직접 날짜와 시간을 계산해서 기입해야함 ex. 10일 카운트 다운 -> 4월 28일에 10일을 더한 날짜를 써줘야함
//month 숫자 지정할 때 원하는 값 -1 해서 적기(6월이면 숫자 5)

//현재 일자를 넣어 놓은 변수
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); //현재 시간을 담아둔 변수에 카운트 할 시간만 넣으면 됨
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]; //숫자 활용해서 배열에서 월 찾아옴
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours} : ${minutes}`;

//future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t); // 설정한 시간에 맞춰서 계속 시간이 흐르기 때문에 새고할때마다 값이 변함, ms 값 나옴
    

    //values in ms
    const oneDay = 24*60*60*1000; // 항상 같은 값
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour); // 남은 시간 구하기 /  나머지 숫자가 console에 나오기 때문에 t를 나눠줌
    let minutes = Math.floor((t % oneHour) / oneMin);
    let seconds = Math.floor((t % oneMin) / 1000);

    // set values Array
    const values = [days, hours, minutes, seconds];

    //10 이하 되면 십의 자리를 0으로 써라
    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired</h4>`

    }
}
// countdown

let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();