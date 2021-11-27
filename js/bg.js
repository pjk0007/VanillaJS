const imgList = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const body = document.querySelector("body");
const chosenImg = imgList[Math.floor(Math.random() * imgList.length)];

const bg = document.querySelector(".bg");
const bgImg = document.createElement("img");
bgImg.src = `src/img/${chosenImg}`;
bg.appendChild(bgImg);
