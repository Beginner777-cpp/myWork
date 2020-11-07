
var doc = document.querySelector(".poem");
var text = doc.innerHTML;
let temp = text;
for (let i = 1; i < temp.length; i++) {
    if (temp[i] == '\n') {
        temp = temp.replace(temp[i], '<br>');
    }
}

var num = 0;
for (let i = 1; i < temp.length; i++) {
    let tempCh = '<br>';
    if (temp.slice(i, i + 4) == tempCh) {
        num++;
    }

    if (num == 4) {
        var tempStr = temp.slice(0, i);
        num = 0;
        break;
    }
}
doc.innerHTML = tempStr;


var btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    if (doc.innerHTML == temp) {
        doc.innerHTML = tempStr;
        btn.innerHTML = 'SHOW';
    }
    else {
        doc.innerHTML = temp;
        btn.innerHTML = 'HIDE';
    }
})

var Vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я']
function checkVowel(str) {
    let a = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < Vowels.length; j++) {
            if (str[i] == Vowels[j]) {
                a++;
            }
        }
    }
    return a;
}

var check_vowel = document.querySelector('.check_vowel');
textVowel = checkVowel(text);
var check_consonant = document.querySelector('.check_consonant');
var textLength = 0;
for(let i=0;i<text.length;i++){
    if(text[i]!=' '&&text[i]!=','&&text[i]!='.'&&text[i]!=':'&&text[i]!=';'&&text[i]!='\n'){
        textLength++;
    }
}
textConsonant = textLength - textVowel;
check_vowel.addEventListener('click', function () {
    if (check_vowel.innerHTML == 'Проверить на гласные') {
        check_vowel.innerHTML = textVowel;

    }
    else {
        check_vowel.innerHTML = 'Проверить на гласные';

    }
})
check_consonant.addEventListener('click', function () {
    if (check_consonant.innerHTML == 'Проверить на согласные') {
        check_consonant.innerHTML = textConsonant;

    }
    else {
        check_consonant.innerHTML = 'Проверить на согласные';

    }
})
