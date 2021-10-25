if (navigator.cookieEnabled === false) {
    alert("Cookies отключены!");
}
let k;
k++;
document.cookie = k;
document.cookie = "name=user";
console.log(document.cookie);