// script.js for deeper-waters

window.scrollTo(0,0);
const text1=document.getElementById("text1");
const text2=document.getElementById("text2");
const text3=document.getElementById("text3");
const text4=document.getElementById("text4");


// church button
const home=document.getElementById("photo");
home.addEventListener("click", ()=> { 
    console.log("clicked photo button");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(white, aliceblue, steelblue, black, black)";
    updateChurch();
});

// "our mission" button
const button1=document.getElementById("button1");
button1.addEventListener("click", ()=> { 
    console.log("clicked button1");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(steelblue, aliceblue, steelblue)";
    
});

// "worship services button"
const button2=document.getElementById("button2");
button2.addEventListener("click", ()=> { 
    console.log("clicked button2");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(white, steelblue, white)";

});

// "contact our team button"
const button3=document.getElementById("button3");
button3.addEventListener("click", ()=> { 
    console.log("You clicked button3");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(black, red, black)";
    //document.body.style.backgroundImage="url(/deeper-waters/sunsetChurch.jpg)";

});

// "Jesus button"
const button4=document.getElementById("button4");
button4.addEventListener("click", ()=> { 
    console.log("clicked Jesus button4");
    scrollToTop();
});

// update dom - church button
const updateChurch = () => {
    text1.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Modi, libero! Aperiam officia tempore veniam aliquid expedita accusantium.\
     Magni iste saepe maxime ex enim nostrum sequi ad totam explicabo \
     consequuntur quia modi quidem maiores, rem esse minima, debitis libero \
     ipsum cum asperiores? Quia culpa asperiores id, vel itaque vero assumenda\
      incidunt modi veritatis aut dicta nemo obcaecati maiores, quod sint \
      libero reiciendis voluptates ex? Cum tempora cumque doloribus \
      accusantium error debitis aperiam maiores dolor repellendus deleniti.";

    text2.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Modi, libero! Aperiam officia tempore veniam aliquid expedita accusantium.\
     Magni iste saepe maxime ex enim nostrum sequi ad totam explicabo \
     consequuntur quia modi quidem maiores, rem esse minima, debitis libero \
     ipsum cum asperiores? Quia culpa asperiores id, vel itaque vero assumenda\
      incidunt modi veritatis aut dicta nemo obcaecati maiores, quod sint \
      libero reiciendis voluptates ex? Cum tempora cumque doloribus \
      accusantium error debitis aperiam maiores dolor repellendus deleniti.";
    
    text3.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Modi, libero! Aperiam officia tempore veniam aliquid expedita accusantium.\
     Magni iste saepe maxime ex enim nostrum sequi ad totam explicabo \
     consequuntur quia modi quidem maiores, rem esse minima, debitis libero \
     ipsum cum asperiores? Quia culpa asperiores id, vel itaque vero assumenda\
      incidunt modi veritatis aut dicta nemo obcaecati maiores, quod sint \
      libero reiciendis voluptates ex? Cum tempora cumque doloribus \
      accusantium error debitis aperiam maiores dolor repellendus deleniti.\
      Quia culpa asperiores id, vel itaque vero assumenda\
      incidunt modi veritatis aut dicta nemo obcaecati maiores, quod sint \
      libero reiciendis voluptates ex? Cum tempora cumque doloribus \
      accusantium error debitis aperiam maiores dolor repellendus deleniti.";
};

// Smooth scroll to top of the screen function
const scrollToTop = () => {
    const scroller = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroller > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scroller - scroller / 30); //30 is the speed
    }
  };
