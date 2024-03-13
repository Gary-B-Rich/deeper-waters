// script.js for deeper-waters

window.scrollTo(0,0);
const home=document.getElementById("photo");
home.addEventListener("click", ()=> { 
    console.log("You clicked the home button");
    // clicking the home button reloads the index.html page
    // the link is built into the html button tag
});

const button1=document.getElementById("button1");
button1.addEventListener("click", ()=> { 
    console.log("You clicked button 1");
});

const button2=document.getElementById("button2");
button2.addEventListener("click", ()=> { 
    console.log("You clicked button 2");
});

const button3=document.getElementById("button3");
button3.addEventListener("click", ()=> { 
    console.log("You clicked button 3");
});

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
// use scrollToTop() to execute