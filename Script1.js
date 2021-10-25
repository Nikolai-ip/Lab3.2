if (navigator.cookieEnabled === false) {
    alert("Cookies отключены!");
}
document.cookie = "name=user";
console.log(document.cookie);