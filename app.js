// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector(".login-input");
// console.log(loginForm);
// console.log(loginInput, loginButton);

// function onLoginSubmit(event) {
//     tomato.preventDefault();
//     const userName = loginInput.value;
//     console.log(event);
//     console.log(userName);
// }
// loginForm.addEventListener("submit", onLoginSubmit);

/// 🎈새로고침을 막는 방법
    // 브라우저는 submit을 감지하면 새로고침하도록 약속 되어있다.
    // tomato.preventDefault(); 이것을 입력해주면 새로고침을 막을 수 있다.

    // 모든 이벤트에 의해 실행되는 함수들의 첫번째 argument는 항상 정보를 준다.
/// a 태그를 막는 방법
    // const B = document.querySelector("a");

    // function A(event) {
    //     event.preventDefault();
    //     console.log(event);
    //     alert('click');
    // }
    // B.addEventListener("click", A);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로한다.
const HIDDEN_CLASSNAME = "hidden";






function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    greeting.innerText = `Hello${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);



