function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}


let count = getCookie('count'); //количество посещений
if (count === undefined) {
    count = 0
}
setCookie('count', ++count);
document.getElementById("countText").innerHTML = "number of visits this page: " + getCookie('count');
function reset() {
    count = 0
}

let date = new Date();
setCookie('date', date);

let name = document.getElementById("name"); //имя пользователя
function signOn() {
    setCookie('name', name.value, { secure: true, 'max-age': 3600 });
}
if (getCookie('name') != undefined) {
    document.getElementById("Hello").value = getCookie('name');
    document.getElementById("button_sign").style.display = "none";
}