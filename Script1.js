if (navigator.cookieEnabled === false) {
    alert("Cookies ���������!");
}
let k;
k++;
let number;
number=document.cookie = k;
document.cookie = "name=user";
console.log(document.cookie);
console.log(number);