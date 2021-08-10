"use strict";
function showWindowSize() {
    let menuHeight = document.getElementById("menu").clientHeight;
    document.getElementById("dumy").style.height = menuHeight-1 + "px";
}
function widthReSize1() {
    let cntWidth = document.getElementById("cm").clientWidth;
    console.log(cntWidth);
    let ds = document.getElementById("content1").style.width = cntWidth + "px";
    console.log(ds);
}
function widthReSize2() {
    let cntWidth = document.getElementById("cm").clientWidth;
    console.log(cntWidth);
    let ds = document.getElementById("content2").style.width = cntWidth + "px";
    console.log(ds);
}
$(window).ready(showWindowSize);
$(window).resize(showWindowSize);
$(window).resize(widthReSize1);
$(window).resize(widthReSize2);