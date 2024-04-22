// --- 제이쿼리 사용

// $(document).ready(function(){
//     if($.localStorage.isSet('memo')){
//         $('.txt').val($.localStorage.get('memo'));//val 괄호에 내용을 적으면 그 값이 새로고침 시 나오고 없으면 값을 받아옴
//     }
//     $('.btn_box').click(function(){
//         $.localStorage.set('memo',$('.txt').val())//텍스트의 값을 저장 val = value
//         alert('저장되었습니다.');
//     });
// });


//정해진 시간마다 반복해서 글 저장
//javascript


// (function(){
//     let autoSave = new Object();
//     (function(obj){
//         obj.configuration = {
//             interval: 60 // 60초마다 저장
//         };
//         obj.bindTimer = function(){
//             let textEle = document.querySelector('.txt');
//             let textVal = textEle.value;
//             let ref1, ref2, ref3; //Newer > Older

//             //Save to localStorage
//             let encodedTextVal = btoa(textVal); //인코딩 base64 방식으로 수행
//             ref1 = window.localStorage.getItem('textVal-01');
//             ref2 = window.localStorage.getItem('textVal-02');

//             if((window.localStorage) && (encodedTextVal !== ref1)){
//                 window.localStorage.setItem('textval-01', encodedTextVal);
//                 window.localStorage.setItem('textval-02', ref1);
//                 window.localStorage.setItem('textval-03', ref2);
//             }else if(!window.localStorage){
//                 console.log('Error' + ': Your browser not support')
//                 return false;
//             }
//         };

//         obj.start = function(){
//             obj.bindTimer();
//             setTimeout(function(){
//                 obj.start();
//             },obj.configuration.interval * 1000);
//         };
//         obj.start();
//     })(autoSave);
// })();

window.onload = function(){
    let btn = document.querySelector('.btn_box');
    let text = document.querySelector('.txt');
    
    btn.addEventListener('click', click);
    
    function click(){
        text.value = localStorage.getItem('area');
        text.oninput = function(){
            localStorage.setItem('area',text.value)
        }
        window.alert('저장되었습니다.')
    }
}


