let card1 = document.getElementsByClassName("img1")[0];
let card11 = document.getElementsByClassName("card-b")[0];
let description1 = document.getElementsByClassName("des")[0];
function showDes() {
    card1.style.display = "none";
    card11.style.display = "none";
    description1.style.display = "block";
}
function hideDes() {
    card1.style.display = "block";
    card11.style.display = "block";
    description1.style.display = "none";
}
card1.onmouseover = showDes;
card1.onmouseout = hideDes;
let card2 = document.getElementsByClassName("img2")[0];
let card22 = document.getElementsByClassName("card-b1")[0];
let description2 = document.getElementsByClassName("des1")[0];
function showDes1() {
    card2.style.display = "none";
    card22.style.display = "none";
    description2.style.display = "block";
}
function hideDes1() {
    card2.style.display = "block";
    card22.style.display = "block";
    description2.style.display = "none";
}
card2.onmouseover = showDes1;
card2.onmouseout = hideDes1;