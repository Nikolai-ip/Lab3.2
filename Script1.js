let k = 0;

k++;
document.cookie = `${k}; expires=/; path=/`;
console.log(k);
Input = document.getElementById("visits");
Input.value = k;
document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
function alertCookie() {
    alert(document.cookie);
}