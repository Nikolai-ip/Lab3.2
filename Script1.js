
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

let name = document.getElementById("name"); //��� ������������

let number = 0; //���������� ���������
setCookie('visits', number++, { secure: true, 'max-age': 3600 });
document.getElementById("visits").value = getCookie('visits');
console.log(number);
console.log(getCookie('visits'));
function reset() {

}

function signOn() {
    setCookie('name', name.value, { secure: true, 'max-age': 3600 });
}

if (getCookie('name') != undefined) {
    document.getElementById("Hello").value = getCookie('name');
    document.getElementById("button_sign").style.display = "none";
}
