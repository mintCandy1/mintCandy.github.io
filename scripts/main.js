let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/v.jpg") {
        myImage.setAttribute("src", "images/v2.png");
    } else {
        myImage.setAttribute("src", "images/v.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎你，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "欢迎你，" + myName;
    }
}
