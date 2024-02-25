// function changeImage(images) {
//     let currentIndex = 0;
//     const imageElement = document.getElementById('myImage'); // Replace 'myImage' with the actual ID of your image element
//     setInterval(() => {
//       currentIndex = (currentIndex + 1) % images.length;
//       imageElement.src = images[currentIndex];
//     }, 1000);
//   }
//   // Example usage:
//   const imageUrls = [
//     './images/hafsoh.png',
//     './images/hafsop.png',
//     './images/portfolio.png',
//     './images/portfolioHome.png',
//   ];
//   changeImage(imageUrls);
const textContents = [
    `<p id="myText">SOFTWARE <span class="t">E|</span><span id="remove">NGINEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="t">EN|</span><span id="remove">GINEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="t">ENG|</span><span id="remove">INEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="t">ENGI|</span><span id="remove">NEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="t">ENGIN|</span><span id="remove">EER</span></p>`,
    `<p id="myText">SOFTWARE <span class="t">ENGINE|</span><span id="remove">ER</span></p>`,
    `<p id="myText">SOFTWARE <span class="t">ENGINEE|</span><span id="remove">R</span></p>`,
    `<p id="myText">SOFTWARE <span class="t">ENGINEER|</span></p>`,
  ];
  function changeText(texts) {
    let currentIndex = 0;
    const textElement = document.getElementById('myText');
    if (!textElement) {
      console.error("Element with ID 'myText' not found.");
      return;
    }
    setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      textElement.innerHTML = texts[currentIndex];
    }, 700);
  }
  changeText(textContents);

let onehtml = document.getElementById('onehtml')
let onecss = document.getElementById('onecss')
let onejs = document.getElementById('onejs')
let onets = document.getElementById('onets')
onehtml.style.display = ""
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
function forward() {
onehtml.style.display = "none"
onecss.style.display = ""
onejs.style.display = "none"
onets.style.display = "none"
}
function  backward() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = ""
}
function forward1() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = ""
  onets.style.display = "none"
}
function  backward1() {
  onehtml.style.display = ""
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = "none"
}
function forward2() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = ""
}
function  backward2() {
  onehtml.style.display = "none"
  onecss.style.display = ""
  onejs.style.display = "none"
  onets.style.display = "none"
}
function forward3() {
  onehtml.style.display = ""
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = "none"
}
function  backward3() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = ""
  onets.style.display = "none"
}