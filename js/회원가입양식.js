// 유효성 검사 객체
const checkobj = {
    "inputId" : false,
    "inputPw" : false,
    "inputPwConfirm" : false,
    "inputName" : false,
    "gender" : false,
    "inputTel" : false
}




document.getElementById("inputId").addEventListener("change", function() {
    
    const regExp = /^[a-z][\w_-]{5,13}/;
    const input = document.getElementById("inputId");

    if(regExp.test(this.value)) {
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";
        checkobj.inputId = true;
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        checkobj.inputId = false;
    }
});

document.getElementById("inputPwConfirm").addEventListener("keyup", function() {

    const password = document.getElementById("inputPw");
    const pwConfirm = document.getElementById("inputPwConfirm");
    if(password.value == "" && pwConfirm.value != "") {
            pwConfirm.value = "";
            alert("비밀번호를 입력하세요.");
            password.focus();
            checkobj.inputPw = false;
    }
});

document.getElementById("inputName").addEventListener("keyup", function() {

    const span = document.getElementById("nameMessage");
    const regExp = /^[가-힣]{2,5}$/;
    if(this.value.length == 0) {
        span.innerText = "";
        return;
    }

    if(regExp.test(this.value)) {
        span.innerText = "정상입력";
        span.style.color = "green";
    } else {
        span.innerText = "한글만 입력하세요"
        span.style.color = "red";
    }
});


document.getElementById("inputTel").addEventListener("keyup", function() {
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(regExp.test(this.value) == false) {
        alert("전화번호의 형식이 올바르지 않습니다.")
    }
});

