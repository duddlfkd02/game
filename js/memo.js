$(document).ready(function(){
    if($.localStorage.isSet('memo')){
        $('.txt').val($.localStorage.get('memo'));//val 괄호에 내용을 적으면 그 값이 새로고침 시 나오고 없으면 값을 받아옴
    }
    $('.btn_box').click(function(){
        $.localStorage.set('memo',$('.txt').val())//텍스트의 값을 저장 val = value
        alert('저장되었습니다.');
    });
});