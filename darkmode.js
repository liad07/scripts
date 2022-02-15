let prevBgColor = getBodyColor(),
    darkClassList = ['theme-dark', 'theme--dark', 'theme-black', 'theme--black'];

document.body.classList.add(...darkClassList);

if (prevBgColor === getBodyColor()) {
    let style = document.createElement('style');

    style.type = "text/css";
    document.head.appendChild(style);

    style.sheet.insertRule("* { color: #FFFFFF !important; background-color: #000000 !important; border-color: currentColor !important; }");
}

function getBodyColor() {
    return window.getComputedStyle(document.body).backgroundColor;
}

console.log(true);