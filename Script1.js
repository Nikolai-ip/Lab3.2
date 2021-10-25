let k = 0;
document.cookie = k;
k++;
document.getElementById("visits").nodeValue = k;
document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
function alertCookie() {
    alert(document.cookie);
}