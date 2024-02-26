
function login() {

    var pw = document.querySelector('#pw');

    if(pw.value == "Koelsa") { location.href = '안전보건관리 가이드.html';

    }
    
}

function enterkey(e) {
    const code = e.code;
    if(code == 'Enter') {
        // 엔터키가 눌렸을 때
        login();
    }
}