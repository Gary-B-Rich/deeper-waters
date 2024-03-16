// script.js for deeper-waters

const text1=document.getElementById("text1");
const text2=document.getElementById("text2");
const text3=document.getElementById("text3");
const text4=document.getElementById("text4");
const text5=document.getElementById("text5");
const text6=document.getElementById("text6");
const title1=document.getElementById("title1");
const title2=document.getElementById("title2");
const title3=document.getElementById("title3");
const title4=document.getElementById("title4");

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
    document.body.style.backgroundImage="linear-gradient(steelblue, aliceblue, steelblue)";
    updateButton1();
    scrollToTop();
});

// "worship services button"
const button2=document.getElementById("button2");
button2.addEventListener("click", ()=> { 
    console.log("clicked button2");
    document.body.style.backgroundImage="linear-gradient(white, steelblue, white)";
    updateButton2();
    scrollToTop();
});

// "contact our team button"
const button3=document.getElementById("button3");
button3.addEventListener("click", ()=> { 
    console.log("You clicked button3");
    document.body.style.backgroundImage="linear-gradient(black, steelblue, black)";
    //document.body.style.backgroundImage="url(/deeper-waters/sunsetChurch.jpg)";
    updateButton3();
    scrollToTop();
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
    text1.innerText=`Genesis 3:1\nNow the serpent was more subtil than any \
    beast of the field which the LORD God had made.  And he said unto the \
    woman, Yea, hath God said, Ye shall not eat of every tree of the garden?
    3:2: And the woman said unto the serpent, We may eat of the fruit of the \
    trees of the garden:\n3:3: But of the fruit of the tree which is in the \
    midst of the garden, God hath said, Ye shall not eat of it, neither shall \
    ye touch it, lest ye die. 
    3:4: And the serpent said unto the woman, Ye shall not surely die:
    3:5: For God doth know that in the day ye eat thereof, then your eyes shall \
    be opened, and ye shall be as gods, knowing good and evil. 
    3:6: And when the woman saw that the tree was good for food, and that it \
    was pleasant to the eyes, and a tree to be desired to make one wise, she \
    took of the fruit thereof, and did eat, and gave also unto her husband \
    with her; and he did eat.`

    text2.hidden="";
    text2.innerText=`Genesis 3:7\nAnd the eyes of them both were opened, and \
    they knew that they were naked; and they sewed fig leaves together, and made \
    themselves aprons.\n3:8: And they heard the voice of the LORD God walking \
    in the garden in the cool of the day: and Adam and his wife hid themselves \
    from the presence of the LORD God amongst the trees of the garden.
    3:9: And the LORD God called unto Adam, and said unto him, Where art thou?
    3:10: And he said, I heard thy voice in the garden, and I was afraid, because \
    I was naked; and I hid myself.\n3:11: And he said, Who told thee that thou \
    wast naked?  Hast thou eaten of the tree, whereof I commanded thee that thou \
    shouldest not eat?\n3:12: And the man said, The woman whom thou gavest to be \
    with me, she gave me of the tree, and I did eat.\n3:13: And the LORD God said \
    unto the woman, What is this that thou hast done?  And the woman said, The \
    serpent beguiled me, and I did eat.`;
    
    text3.hidden="";
    text3.innerText=`Genesis 3:14\nAnd the LORD God said unto the serpent, Because thou \
    hast done this, thou art cursed above all cattle, and above every beast of \
    the field; upon thy belly shalt thou go, and dust shalt thou eat all the days \
    of thy life\n3:15: And I will put enmity between thee and the woman, and between \
    thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.
    3:16: Unto the woman he said, I will greatly multiply thy sorrow and thy conception; \
    in sorrow thou shalt bring forth children; and thy desire shall be to thy husband, \
    and he shall rule over thee.\n3:17: And unto Adam he said, Because thou hast \
    hearkened unto the voice of thy wife, and hast eaten of the tree, of which I \
    commanded thee, saying, Thou shalt not eat of it: cursed is the ground for thy sake; \
    in sorrow shalt thou eat of it all the days of thy life;
    3:18: Thorns also and thistles shall it bring forth to thee; and thou shalt eat the \
    herb of the field;\n3:19: In the sweat of thy face shalt thou eat bread, till thou \
    return unto the ground; for out of it wast thou taken: for dust thou art, and unto \
    dust shalt thou return.`;

    button4.hidden="";

    title3.hidden="";
    title3.innerText=`Click for the Good News!`;
};

const updateButton1 = () => {
    hideAll();
    text1.hidden="";
    text1.innerText=`Deeper Waters Christian Teaching Ministries\n✝`;
    text2.hidden="";
    text2.innerText=`We're here to minister to people, and teach them about Christ Jesus\n✝`;
    text3.hidden="";
    text3.innerText=`We also have a super SWEET quilt business!`
    title3.hidden="";
    title3.innerText=`✝☦✚✝☦✚✝☦✚✝\n✚✝☦✚✝☦✚✝☦✚\n☦✚✝☦✚✝☦✚✝☦\n✝☦✚✝☦✚✝☦✚✝`;
}

const updateButton2 = () => {
    hideAll();
    text1.hidden="";
    text1.innerText=`🎼 Worship services rock with our live band! 🎶`;
    text2.hidden="";
    text2.innerText=`Check out \n'Leaderdogs for the Blind' \nduring morning worship! 🎵`
}

const updateButton3 = () => {
    hideAll();
    text1.hidden="";
    text1.innerText=`There are several ways to contact us:`;
    text2.hidden="";
    text2.innerText=`Carrier Pigeon`; 
    text3.hidden="";
    text3.innerText=`Messenger Owl`;
    text4.hidden="";
    text4.innerText=`Pony Express`;
    title3.hidden=""
    title3.innerText=`Even Telegraph in select areas!`;
}


// hide all dom sections
const hideAll = () => {
    text1.hidden="hidden";
    text2.hidden="hidden";
    text3.hidden="hidden";
    text4.hidden="hidden";
    text5.hidden="hidden";
    text6.hidden="hidden";
    button4.hidden="hidden";
    title1.hidden="hidden";
    title2.hidden="hidden";
    title3.hidden="hidden";
    title4.hidden="hidden";
}

// Smooth scroll to top of the screen function
const scrollToTop = () => {
    const scroller = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroller > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scroller - scroller / 30); //30 is the speed
    }
  };

// populate dom on pageload
updateChurch();
scrollToTop();

