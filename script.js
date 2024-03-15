// script.js for deeper-waters

const text1=document.getElementById("text1");
const text2=document.getElementById("text2");
const text3=document.getElementById("text3");
const text4=document.getElementById("text4");
const text5=document.getElementById("text5");

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
    updateButton1();
});

// "worship services button"
const button2=document.getElementById("button2");
button2.addEventListener("click", ()=> { 
    console.log("clicked button2");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(white, steelblue, white)";
    updateButton2();
});

// "contact our team button"
const button3=document.getElementById("button3");
button3.addEventListener("click", ()=> { 
    console.log("You clicked button3");
    scrollToTop();
    document.body.style.backgroundImage="linear-gradient(black, steelblue, black)";
    //document.body.style.backgroundImage="url(/deeper-waters/sunsetChurch.jpg)";
    updateButton3();
});

// "Jesus button"
const button4=document.getElementById("button4");
button4.addEventListener("click", ()=> { 
    console.log("clicked Jesus button4");
    scrollToTop();
});

// update dom - church button
const updateChurch = () => {
    hideAll();
    text1.hidden="";
    text1.innerText=`Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Modi, libero! Aperiam officia tempore veniam aliquid expedita accusantium.\
     Magni iste saepe maxime ex enim nostrum sequi ad totam explicabo \
     consequuntur quia modi quidem maiores, rem esse minima, debitis libero \
     ipsum cum asperiores? Quia culpa asperiores id, vel itaque vero assumenda\
      incidunt modi veritatis aut dicta nemo obcaecati maiores, quod sint \
      libero reiciendis voluptates ex? Cum tempora cumque doloribus \
      accusantium error debitis aperiam maiores dolor repellendus deleniti.`;

    text2.hidden="";
    text2.innerText=`Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Modi, libero! Aperiam officia tempore veniam aliquid expedita accusantium.\
     Magni iste saepe maxime ex enim nostrum sequi ad totam explicabo \
     consequuntur quia modi quidem maiores, rem esse minima, debitis libero \
     ipsum cum asperiores? Quia culpa asperiores id, vel itaque vero assumenda\
      incidunt modi veritatis aut dicta nemo obcaecati maiores, quod sint \
      libero reiciendis voluptates ex? Cum tempora cumque doloribus \
      accusantium error debitis aperiam maiores dolor repellendus deleniti.`;
    
    text3.hidden="";
    text3.innerText=`Lorem ipsum dolor sit amet consectetur adipisicing elit. \
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
      accusantium error debitis aperiam maiores dolor repellendus deleniti.`;

    text4.hidden="";
    text4.innerText=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
    Totam tenetur dolorem esse tempore velit, neque assumenda officiis! \
    Repudiandae, ab expedita. Fugit eligendi quis, quisquam officiis optio\
     temporibus. Ipsum, eius facilis!`;

    button4.hidden="";
    text5.hidden="";
    text5.innerText=`Click for the Good News!`;
};

const updateButton1 = () => {
    hideAll();
    text1.hidden="";
    text1.innerText=`Our mission here at Deeper Waters Christian Teaching Ministries \
    is to teach people stuff about various things`;
}

const updateButton2 = () => {
    hideAll();
    text1.hidden="";
    text1.innerText=`Worship services rock with our live band!\nCheck out Faith +1 \
    during morning worship.`
}

const updateButton3 = () => {
    hideAll();
    text1.hidden="";
    text1.innerText=`Contact us by Carrier Pigeon, Messenger Owl, or Pony Express!`;
}


// hide all dom sections
const hideAll = () => {
    text1.hidden="hidden";
    text2.hidden="hidden";
    text3.hidden="hidden";
    text4.hidden="hidden";
    text5.hidden="hidden";
    button4.hidden="hidden";
}

// Smooth scroll to top of the screen function
const scrollToTop = () => {
    const scroller = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroller > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scroller - scroller / 30); //30 is the speed
    }
  };

updateChurch();
scrollToTop();

