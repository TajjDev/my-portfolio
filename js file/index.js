
const textContents = [
  `<p id="myText">SOFTWARE <span class="y">E|</span><span id="remove">NGINEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">EN|</span><span id="remove">GINEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENG|</span><span id="remove">INEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGI|</span><span id="remove">NEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGIN|</span><span id="remove">EER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGINE|</span><span id="remove">ER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGINEE|</span><span id="remove">R</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGINEER|</span></p>`,
];
let myseven = `
<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr5">
    <hr id="prohrr5">
</div>
<div class="theProject">
    <div class="pros">
        <h2 class="animate2a" id="stop">Online stopWatch</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward9()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img animate2a click">
            <p id="ppro"></p>
            <a  href="https://stopwatch-five-mu.vercel.app/">
                <img id="mm"  src="images/stopWatch.png">
            </a>
        </div>
        <div onclick="forward9()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let myseven2 = ` <p class="thp">project</p>
<div class="hrp">
    <hr id="prohr5">
    <hr id="prohrr5">
</div>
<div class="theProject">
    <div class="pros">
        <h2 class="animate1a" id="stop">Online stopWatch</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward9()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img animate1a click">
            <p id="ppro"></p>
            <a  href="https://stopwatch-five-mu.vercel.app/">
                <img id="mm"  src="images/stopWatch.png">
            </a>
        </div>
        <div onclick="forward9()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let mysix = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr4">
    <hr id="prohrr4">
</div>
<div class="theProject">
    <div class="pros">
        <h2 class="animate2a" id="todoR">Todo with react</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward8()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img animate2a click">
            <p id="ppro"></p>
            <a  href="https://to-do-with-react-omega.vercel.app/">
                <img id="mm"  src="images/todoReact.png">
            </a>
        </div>
        <div onclick="forward8()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let mysix2 = ` 
<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr4">
    <hr id="prohrr4">
</div>
<div class="theProject">
    <div class="pros">
        <h2 class="animate1a" id="todoR">Todo with react</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward8()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img animate1a click">
            <p id="ppro"></p>
            <a  href="https://to-do-with-react-omega.vercel.app/">
                <img id="mm"  src="images/todoReact.png">
            </a>
        </div>
        <div onclick="forward8()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
// variables to be decleared later on
let myFive = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr2">
</div>
<div  class="theProject">
    <div class="pros">
        <h2 class="animate2a" id="simple">discount-sale-page</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward6()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img1 animate2a click">
            <p id="ppro2"></p>
            <a href="https://result-summary-umber.vercel.app/">
                <img id="mm2"  src="./images/summary-of-result.png">
            </a>
        </div>
        <div onclick="forward6()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`

let myFive2 = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr2">
</div>
<div  class="theProject">
    <div class="pros">
        <h2 class="animate1" id="simple">discount-sale-page</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward6()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img1 animate1 click">
            <p id="ppro2"></p>
            <a href="https://result-summary-umber.vercel.app/">
                <img id="mm2"  src="./images/summary-of-result.png">
            </a>
        </div>
        <div onclick="forward6()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let myFour = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr3">
    <hr id="prohrr3">
</div>
<div class="theProject">
    <div class="pros">
        <h2 class="animate2a" id="todo">Todo with TS</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward7()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img animate2a click">
            <p id="ppro"></p>
            <a  href="https://to-do-list-zeta-gold.vercel.app/">
                <img id="mm"  src="images/todoTSBg.png">
            </a>
        </div>
        <div onclick="forward7()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let four2 = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr3">
    <hr id="prohrr3">
</div>
<div class="theProject">
    <div class="pros">
        <h2 class="animate1a" id="todo">Todo with TS</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward7()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img animate1a click">
            <p id="ppro"></p>
            <a  href="https://to-do-list-zeta-gold.vercel.app/">
                <img id="mm"  src="images/todoTSBg.png">
            </a>
        </div>
        <div onclick="forward7()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let myFour2 = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr3">
    <hr id="prohrr3">
</div>
<div class="theProject">
    <div class="pros">
        <h2 class="animate1" id="todo">Todo with TS</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward7()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div class="img animate1 click">
            <p id="ppro"></p>
            <a  href="https://to-do-list-zeta-gold.vercel.app/">
                <img id="mm"  src="images/todoTSBg.png">
            </a>
        </div>
        <div onclick="forward7()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let myFirst = `<p class="thp">project</p>
<div class="hrp">
  <hr id="prohr1">
  <hr id="prohrr1">
</div>
<div  class="theProject">
  <div class="pros">
      <h2 class="animate2a" id="card">four card Featurs</h2>
  </div>
  <div class="imagePro">
      <div onclick="backward5()" class="btn" >
          <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
      <div onmouseout="out1()" onmouseover="over1()" class="img1 animate2a click">
          <p id="ppro1"></p>
          <a  href="https://four-card-feature-bzou.vercel.app/">
              <img id="mm1"  src="./images/four-card-features.png">
          </a>
      </div>
      <div onclick="forward5()" class="btn" >
          <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
  </div>
</div>` 
let mySecond = `<p class="thp">project</p>
<div id="hr">
  <hr id="prohr">
  <hr id="prohrr">
</div>
<div class="theProject">
  <div class="pros">
      <h2 class="animate1a" id="hud">Huddle Landing Page</h2>
  </div>
  <div class="imagePro">
      <div onclick="backward4()" class="btn" >
          <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
      <div onmouseout="out()" onmouseover="over()" class="img animate1a click">
          <p id="ppro"></p>
          <a  href="https://huddle-landing-page-two-omega.vercel.app/">
              <img id="mm"  src="images/huddleLandingPage.png">
          </a>
      </div>
      <div onclick="forward4()" class="btn" >
          <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
  </div>
</div>`
let mySecond2 = `<p class="thp">project</p>
<div id="hr">
  <hr id="prohr">
  <hr id="prohrr">
</div>
<div class="theProject">
  <div class="pros">
      <h2 class="animate2a" id="hud">Huddle Landing Page</h2>
  </div>
  <div class="imagePro">
      <div onclick="backward4()" class="btn" >
          <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
      <div onmouseout="out()" onmouseover="over()" class="img animate2a click">
          <p id="ppro"></p>
          <a  href="https://huddle-landing-page-two-omega.vercel.app/">
              <img id="mm"  src="images/huddleLandingPage.png">
          </a>
      </div>
      <div onclick="forward4()" class="btn" >
          <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
  </div>
</div>`
let myThird = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr1">
    <hr id="prohrr1">
</div>
<div  class="theProject">
    <div class="pros">
        <h2 class="animate1a" id="card">four card Featurs</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward5()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div onmouseout="out1()" onmouseover="over1()" class="img1 animate1a click">
            <p id="ppro1"></p>
            <a  href="https://four-card-feature-bzou.vercel.app/">
                <img id="mm1"  src="./images/four-card-features.png">
            </a>
        </div>
        <div onclick="forward5()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let MyimgFour1 = `<div id="imgFou">
<div class="rem"  id="imgrem1">
</div>
<div class="rem" id="imgrem3">
<img src="./images//certificate1.jpg" alt="" class="fourc animate" id="b">
</div>
<div class="rem" onclick="removeb()" id="imgrem2">
<img src="./images/certificate2.png" alt="" class="fourc" id="a">
</div>
</div>`
let MyimgFour2 = `<div id="imgFou">
<div class="rem" onclick="removea()" id="imgrem1">
  <img src="./images//certificate1.jpg" alt="" class="fourc " id="a">
</div>
<div class="rem" onclick="removeb()" id="imgrem3">
  <img src="./images/certificate2.png" alt="" class="fourc animate" id="b">
</div>
<div class="rem" onclick="removec()" id="imgrem2">
  <img src="./images/certificate3.png" alt="" class="fourc " id="a">
</div>
</div>`
let MyimgFour3 = `<div id="imgFou">
<div class="rem" onclick="removeb()" id="imgrem1">
<img src="./images/certificate2.png" alt="" class="fourc" id="a">
</div>
<div class="rem" id="imgrem3">
<img src="./images/certificate3.png" alt="" class="fourc animate" id="b">
</div>
<div class="rem" onclick="removec()" id="imgrem2">
</div>
</div>`

// for the text with the color red that transition out the alphabet

function changeText(texts) {
  let currentIndex = 0;
  const textElement = document.getElementById('myText');
  setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.innerHTML = texts[currentIndex];
  }, 700);
}
changeText(textContents);

// for the forward and backward button in the skill section
let onehtml = document.getElementById('onehtml')
let onecss = document.getElementById('onecss')
let onejs = document.getElementById('onejs')
let onets = document.getElementById('onets')
let oners = document.getElementById('oners')
onehtml.style.display = ""
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
oners.style.display = "none"
function forward() {
onehtml.style.display = "none"
onecss.style.display = ""
onejs.style.display = "none"
oners.style.display = "none"
onets.style.display = "none"
};
function  backward() {
onehtml.style.display = "none"
onecss.style.display = "none"
onejs.style.display = "none"
oners.style.display = ""
onets.style.display = "none"
};
function forward1() {
onehtml.style.display = "none"
onecss.style.display = "none"
oners.style.display = "none"
onejs.style.display = ""
onets.style.display = "none"
};
function  backward1() {
onehtml.style.display = ""
onecss.style.display = "none"
oners.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
};
function forward2() {
onehtml.style.display = "none"
oners.style.display = "none"
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = ""
};
function  backward2() {
onehtml.style.display = "none"
oners.style.display = "none"
onecss.style.display = ""
onejs.style.display = "none"
onets.style.display = "none"
};
function forward2a() {
onehtml.style.display = ""
oners.style.display = "none"
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
};
function  backward2a() {
onehtml.style.display = "none"
oners.style.display = "none"
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = ""
};
function forward3() {
onehtml.style.display = "none"
onecss.style.display = "none"
oners.style.display = ""
onejs.style.display = "none"
onets.style.display = "none"
};
function  backward3() {
onehtml.style.display = "none"
onecss.style.display = "none"
oners.style.display = "none"
onejs.style.display = ""
onets.style.display = "none"
};

// for the certificate function
let hr4 = document.getElementById("hr4")
let hr5 = document.getElementById("hr5")
let hr6 = document.getElementById("hr6")
hr4.style.display="none"
hr5.style.display=""
hr6.style.display="none"
let imgFour = document.getElementById("imgFour");
imgFour.style.display = ""
function removea(){
imgFour.innerHTML = `${MyimgFour1}`
hr4.style.display=""
hr5.style.display="none"
hr6.style.display="none"
};
function removeb(){
imgFour.innerHTML = `${MyimgFour2}`
hr4.style.display="none"
hr5.style.display=""
hr6.style.display="none"
}
function removec(){
imgFour.innerHTML = `${MyimgFour3}`
hr4.style.display="none"
hr5.style.display="none"
hr6.style.display=""
}

//  for the transition and other function of the showMenu and cancleMenu
let texts = document.getElementById("texts")
let about = document.getElementById("about")
let certificate = document.getElementById("certificate")
let three = document.getElementById("three")
let project = document.getElementById("project")
let menu = document.getElementById("menu")
let menuImg = document.getElementById("menuImg")
let con = document.getElementById("con")
let main = document.getElementById("main")
let contact = document.getElementById("contact")

menu.style.display = "flex"
con.style.display = "none"
function showmenu(){
menuImg.style.display = "none"
con.style.display = "flex"
con.style.zIndex = 5
texts.style.filter = "blur(5px)"
about.style.filter = "blur(5px)"
three.style.filter = "blur(5px)"
certificate.style.filter = "blur(5px)"
project.style.filter = "blur(5px)"
contact.style.filter = "blur(5px)"
main.style.position = "fixed"
}

function cancelShow(){
menuImg.style.display = "flex"
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
contact.style.filter = "blur(0)"
main.style.position = "flex"
}

// for the forward and backward buttons in the project section

let pro = document.getElementById("pro")
let pro1 = document.getElementById("pro1")
let pro2 = document.getElementById("pro2")
let pro3 = document.getElementById("pro3")
let pro4 = document.getElementById("pro4")
let pro5 = document.getElementById("pro5")
// window.onload = function() {
pro5.style.display = "flex"
pro.style.display = "none"
pro1.style.display = "none"
pro2.style.display = "none"
pro4.style.display = "none"
pro3.style.display = "none"



 function forward9() {
  pro.style.display = "none"
  pro4.style.display = "none"
  pro5.style.display = "none"
  pro3.innerHTML = `${myFour2}`
  pro1.style.display = "none"
  pro3.style.display = "flex"
  pro2.style.display = "none"
  };
  function backward9() {
  pro5.style.display = "none"  
  pro2.style.display = "flex"
  pro2.innerHTML = `${myFive}`
  }
  function forward7() {
    pro.style.display = "none"
    pro4.style.display = "flex"
    pro4.innerHTML = `${mysix2}`
    pro1.style.display = "none"
    pro3.style.display = "none"
    pro2.style.display = "none"
    };
    function backward7() {
    pro3.style.display = "none"  
    pro5.style.display = "flex"
    pro5.innerHTML = `${myseven}`
    }
  function forward8() {
    pro.style.display = "flex"
    pro.innerHTML= `${mySecond}`
    pro1.style.display = "none"
    pro3.style.display = "none"
    pro2.style.display = "none"
    pro4.style.display = "none"
    };
    function backward8() {
    pro4.style.display = "none"  
    pro3.style.display = "flex"
    pro3.innerHTML = `${myFour}`
    }
function forward4() {
pro.style.display = "none"
pro1.style.display = "flex"
pro1.innerHTML = `${myThird}`
};
function  backward4() {
  pro4.style.display = "flex"
  pro4.innerHTML = `${mysix}`
  pro.style.display = "none"
};
function forward5() {
pro.style.display = "none"
pro3.style.display = "none"
pro1.style.display = "none"
pro2.style.display = "flex"
pro2.innerHTML = `${myFive2}`
};
function  backward5() {
pro.style.display = "flex"
pro.innerHTML = `${mySecond2}`
pro1.style.display = "none"
};
function forward6() {
pro.style.display = "none"
pro2.style.display = "none"
pro1.style.display = "none"
pro5.innerHTML=`${myseven2}`
pro5.style.display = "flex"
};
function  backward6() {
pro.style.display = "none"
pro1.style.display = "flex"
pro1.innerHTML = `${myFirst}`
pro2.style.display = "none"
};



// for the onclick in the showMenu  nav
function removeD(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
contact.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
function removeE(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
contact.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
function removeF(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
contact.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
function removeG(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
contact.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
function removeH(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
contact.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
// for the airplane img to make it scroll back up after scrolling down a bit
let toTopAction = document.getElementById('ToUpImg')
toTopAction.style.display = "none"
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  toTopAction.style.display = "block";
} else {
  toTopAction.style.display = "none";
}
}


function  toTop() {
toTopAction.style.display = "none"
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}


let name = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("message")

let person = {
  name:`${email.value}`
}
console.log(person);