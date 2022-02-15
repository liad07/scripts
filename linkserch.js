var result = [];
// קבל את כל הקישורים מהעמוד
var elements = document.querySelectorAll("a");
for (let element of elements) {
    result.push({
        "url": element.href,
        "text": element.innerText
    });
}

// בצע קריאת השלמה לסיום
console.log(result);