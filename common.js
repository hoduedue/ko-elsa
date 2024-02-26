
function login() {

    var pw = document.querySelector('#pw');

    if(pw.value == "Koelsa") { location.href = '안전보건관리 가이드.html';

    }
    
}

var input = document.getElementById("pw");
input.addEventListener("keyup", function (event) {
    console.log(event.code);
    const code = event.code;
    if(code == 'Enter') {
        // 엔터키가 눌렸을 때
        login();
    }
});