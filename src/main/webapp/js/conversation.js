const text = [
    "<ruby><rb>今日<rb><rp>(</rp><rt>きょう<rt><rp>)</rp></ruby>は休日か、何をしよう？",
    "よし、今日はこのゲームやるぞ！",
    "ちくしょ～、あと少しで勝てるのに！"
];

let number = 0;

window.onload = function() {
    document.getElementById('text').innerHTML = text[number];
}

document.getElementById('forward').onclick = function() {
    if (number < text.length - 1) {
        number++;
        document.getElementById('text').innerHTML = text[number];
    }   
}

document.getElementById('backward').onclick = function() {
    if (number > 0) {
        number--;
        document.getElementById('text').innerHTML = text[number];
    }
}