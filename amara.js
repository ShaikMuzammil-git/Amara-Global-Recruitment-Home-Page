let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 6; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec





/* to show hide more info of team members */

function member1MoreInfo() {
  var x = document.getElementById("member1-info");
  if (x.style.display == "block") {
    document.getElementById("member1-info").style.display = "none";
    // document.getElementById("member1-info").style.animationName =
    //   "memberInfo-disappear";
    // setTimeout(() => {
    //   document.getElementById("member1-info").style.display = "none";
    // }, 400);
    document.getElementById("more-info1").innerHTML = "More Info";
  } else {
    document.getElementById("member1-info").style.display = "block";
    document.getElementById("member1-info").style.animationName =
      "memberInfo-appear";
    document.getElementById("more-info1").innerHTML = "Hide Info";
  }
}

function member2MoreInfo() {
  var x = document.getElementById("member2-info");
  if (x.style.display == "block") {
    document.getElementById("member2-info").style.display = "none";
    document.getElementById("more-info2").innerHTML = "More Info";
  } else {
    document.getElementById("member2-info").style.display = "block";
    document.getElementById("member2-info").style.animationName =
      "memberInfo-appear";
    document.getElementById("more-info2").innerHTML = "Hide Info";
  }
}
function member3MoreInfo() {
  var y = document.getElementById("member3-info");
  if (y.style.display == "block") {
    document.getElementById("member3-info").style.display = "none";
    document.getElementById("more-info3").innerHTML = "More Info";
  } else {
    document.getElementById("member3-info").style.display = "block";
    document.getElementById("member3-info").style.animationName =
      "memberInfo-appear";
    document.getElementById("more-info3").innerHTML = "Hide Info";
  }
}

/*to show hide event pics */

function member1MoreInfofd() {
  var z = document.getElementById("event10");
  if (z.style.display == "block") {
    document.getElementById("showHidePics").innerHTML = "SHOW MORE";

    var a= "event"; 
    for ( let i=4; i<=6 ; i++){
      var ab = a + i;
      document.getElementById(ab).style.height = "8vmin";
    }

    var x= "event"; 
    for ( let m=7; m<=15 ; m++){
      var xy = x + m;
      document.getElementById(xy).style.display = "none";
     }
  
  } else {
    document.getElementById("showHidePics").innerHTML = "SHOW LESS";

    var a= "event"; 
    for ( let i=4; i<=6 ; i++){
      var ab = a + i;
      document.getElementById(ab).style.height = "30vmin";
    }
    var x= "event"; 
    for ( let m=7; m<=15 ; m++){
      var xy = x + m;
      document.getElementById(xy).style.display = "block";
     }
    // document.getElementById("member3-info").style.animationName="memberInfo-appear";
  }
}

//  hamburger menu bar function
function myFunction() {
  var x = document.getElementById("myLinks");
   var y = document.querySelector(".menuButton");

 if (x.style.display === "block") {
      x.style.display = "none";
       y.style.height="5.5rem";
       y.style.width="10vw";
     } else {
       x.style.display = "block";
      y.style.height="auto";
      y.style.width="50vw";
      document.getElementById("activeMenuWidth").style.width = "50vw";
    }
} 



/* nav - our services btn */

function hoverIn4() {
  document.getElementById("navBox4i").style.display = "block";
  document.getElementById("navBox4i").style.animationName = "appear";
}
function hoverOut4() {
  document.getElementById("navBox4i").style.display = "none";
}

function hoverIn4i1() {
  hoverIn4();
  document.getElementById("navBox4i").style.animationName = "hoverInNav";

  document.getElementById("navBox4i1").style.backgroundColor = "yellow";
  document.getElementById("navBox4i1").style.color = "black";
}
function hoverOut4i1() {
  hoverOut4();
  document.getElementById("navBox4i").style.animationName = "hoverOutNav";

  document.getElementById("navBox4i1").style.backgroundColor = "initial";
  document.getElementById("navBox4i1").style.color = "white";
}
function hoverIn4i2() {
  document.getElementById("navBox4i2").style.backgroundColor = "yellow";
  document.getElementById("navBox4i2").style.color = "black";
}
function hoverOut4i2() {
  hoverIn4();
  document.getElementById("navBox4i2").style.backgroundColor = "initial";
  document.getElementById("navBox4i2").style.color = "white";
}
function hoverIn4i3() {
  document.getElementById("navBox4i3").style.backgroundColor = "yellow";
  document.getElementById("navBox4i3").style.color = "black";
}
function hoverOut4i3() {
  hoverIn4();
  document.getElementById("navBox4i3").style.backgroundColor = "initial";
  document.getElementById("navBox4i3").style.color = "white";
}
function hoverIn4i4() {
  document.getElementById("navBox4i4").style.backgroundColor = "yellow";
  document.getElementById("navBox4i4").style.color = "black";
}
function hoverOut4i4() {
  hoverIn4();
  document.getElementById("navBox4i4").style.backgroundColor = "initial";
  document.getElementById("navBox4i4").style.color = "white";
}
function hoverIn4i5() {
  document.getElementById("navBox4i5").style.backgroundColor = "yellow";
  document.getElementById("navBox4i5").style.color = "black";
}
function hoverOut4i5() {
  hoverIn4();
  document.getElementById("navBox4i5").style.backgroundColor = "initial";
  document.getElementById("navBox4i5").style.color = "white";
}
function hoverIn4i6() {
  document.getElementById("navBox4i6").style.backgroundColor = "yellow";
  document.getElementById("navBox4i6").style.color = "black";
}
function hoverOut4i6() {
  hoverIn4();
  document.getElementById("navBox4i6").style.backgroundColor = "initial";
  document.getElementById("navBox4i6").style.color = "white";
}
function hoverIn4i7() {
  document.getElementById("navBox4i7").style.backgroundColor = "yellow";
  document.getElementById("navBox4i7").style.color = "black";
}
function hoverOut4i7() {
  hoverIn4();
  document.getElementById("navBox4i7").style.backgroundColor = "initial";
  document.getElementById("navBox4i7").style.color = "white";
}
function hoverIn4i8() {
  document.getElementById("navBox4i8").style.backgroundColor = "yellow";
  document.getElementById("navBox4i8").style.color = "black";
}
function hoverOut4i8() {
  hoverIn4();
  document.getElementById("navBox4i8").style.backgroundColor = "initial";
  document.getElementById("navBox4i8").style.color = "white";
}
function hoverIn4i9() {
  document.getElementById("navBox4i9").style.backgroundColor = "yellow";
  document.getElementById("navBox4i9").style.color = "black";
}
function hoverOut4i9() {
  hoverIn4();
  document.getElementById("navBox4i9").style.backgroundColor = "initial";
  document.getElementById("navBox4i9").style.color = "white";
}
function hoverIn4i10() {
  document.getElementById("navBox4i10").style.backgroundColor = "yellow";
  document.getElementById("navBox4i10").style.color = "black";
}
function hoverOut4i10() {
  hoverIn4();
  document.getElementById("navBox4i10").style.backgroundColor = "initial";
  document.getElementById("navBox4i10").style.color = "white";
}

/* nav -training & development */


function hoverIn5() {
  document.getElementById("navBox5i").style.display = "block";
  document.getElementById("navBox5i").style.animationName = "appear";
}
function hoverOut5() {
  document.getElementById("navBox5i").style.display = "none";
}

function hoverIn5i1() {
  hoverIn5();
  document.getElementById("navBox5i1").style.backgroundColor = "yellow";
  document.getElementById("navBox5i1").style.color = "black";
}
function hoverOut5i1() {
  hoverOut5()
  document.getElementById("navBox5i1").style.backgroundColor = "initial";
  document.getElementById("navBox5i1").style.color = "white";
}

/* see hide certificate */

function seeCertificate(){
  var x = document.getElementById("certificatePic");
  if (x.style.display == "block") {
    document.getElementById("certificatePic").style.display = "none";
    document.getElementById("certificate").innerHTML = "See Certificate";
    document.getElementById("certificate").style.opacity = "1";

  } else {
    document.getElementById("certificatePic").style.display = "block";
    document.getElementById("certificatePic").style.animationName = "certificatePic";
    document.getElementById("certificate").style.opacity = "0";
  }
}
