if (navigator.cookieEnabled === false) {
    alert("Cookies ���������!");
}
document.cookie = "name=user";
console.log(document.cookie);