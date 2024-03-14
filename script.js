// script.js for deeper-waters

window.scrollTo(0,0);

// church button
const home=document.getElementById("photo");
home.addEventListener("click", ()=> { 
    console.log("You clicked the home button");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(white, aliceblue, steelblue, black, black)";
});

// "our mission" button
const button1=document.getElementById("button1");
button1.addEventListener("click", ()=> { 
    console.log("You clicked button 1");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(steelblue, aliceblue, steelblue)";
});

// "worship services button"
const button2=document.getElementById("button2");
button2.addEventListener("click", ()=> { 
    console.log("You clicked button 2");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(white, steelblue, white)";
});

// "contact our team button"
const button3=document.getElementById("button3");
button3.addEventListener("click", ()=> { 
    console.log("You clicked button 3");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(black, purple, black)";
});

// "Jesus button"
const button4=document.getElementById("button4");
button4.addEventListener("click", ()=> { 
    console.log("You clicked button 4 (back to top)");
    scrollToTop();
});

// Smooth scroll to top of the screen function
const scrollToTop = () => {
    const scroller = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroller > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scroller - scroller / 30); //30 is the speed
    }
  };
