
function login() {

    var pw = document.querySelector('#pw');

    if(pw.value == "Koelsa") { location.href = '안전보건관리 가이드.html';

    }
    
}

function enterkey() {
	if (window.event.keyCode == 13) {
    	// 엔터키가 눌렸을 때
        login();
    }
}