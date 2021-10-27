function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        // ��� ������������� �������� ������ �������� �� ���������
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


let count = getCookie('count'); //���������� ���������
if (count === undefined) {
    count = 0;
}
setCookie('count', ++count);
document.getElementById("countText").innerHTML = "number of visits this page: " + getCookie('count');
function reset() {
    setCookie('count', 0,{ secure: true, 'max-age': 3600 });
}


if (getCookie('date') == undefined) {
    setCookie('date', date.getTime(), { secure: true, 'max-age': 3600 });
    document.getElementById("time").value = "";
}
else {
    let currentDate = new Date();
    let previousDate = new Date(Number(getCookie('date')));
    let delay = currentDate - previousDate;
    let months = Math.floor(delay / (30 * 24 * 60 * 60 * 1000));
    let days = Math.floor(delay / (24 * 60 * 60 * 1000)) % 30;
    let hours = Math.floor(delay / (60 * 60 * 1000)) % 24;
    let minutes = Math.floor(delay / (60 * 1000)) % 60;
    let secunds = Math.floor(delay / 1000) % 60;
    document.getElementById("time").value = months + " " + days + " " + hours + " " + minutes + " " + secunds + " ";
    setCookie('date', new Date().getTime());
}


let name = document.getElementById("name"); //��� ������������
function signOn() {
    setCookie('name', name.value, { secure: true, 'max-age': 3600 });
}
if (getCookie('name') != undefined) {
    document.getElementById("Hello").value = getCookie('name');
    document.getElementById("button_sign").style.display = "none";
}