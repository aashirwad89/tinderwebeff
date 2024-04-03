//user data 
let user =  [
  {profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" ,  
  displayPic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdpcmxzJTIwcG9ydHJhaXQlMjBpbiUyMGRhcmt8ZW58MHx8MHx8fDA%3D", 
   pendingMessage: 4 ,
    location: "delhi, India", 
    Name: "Harshita",
     age:24,
      intrests:[{
    icon: `<i class="fa-solid fa-music"></i>`,
    intrest: "Music"
  }, {
    icon:  `<i class="fa-solid fa-feather-pointed"></i>`,
    intrest: "Painting"
  }], Bio:"Meet Harshita, a modern-day explorer of words and worlds. With a pen in one hand and a laptop in the other, she navigates the vast expanse of the digital landscape, weaving tales that captivate and inspire. Her curiosity knows no bounds, and her love for storytelling shines through in every piece she crafts. Whether she's delving into the depths of history or exploring the possibilities of the future, Emily's words are a beacon of creativity in a sea of information. Join her on a journey of discovery as she brings stories to life one keystroke at a time.",  
  isfriend: null,  },
  { profilePic: "https://plus.unsplash.com/premium_photo-1674069720020-41e6dea32366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww" , 
   displayPic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    pendingMessage: 6 ,
     location: "Bhopal, India",
      Name: "Sneha",
      age:18,  
      intrests:[{
    icon: `<i class="fa-solid fa-music"></i>`,
    intrest: "Music"
  }, {
    icon:  `<i class="fa-solid fa-feather-pointed"></i>`,
    intrest: "Painting"
  }], Bio:"Meet Sneha, a modern-day explorer of words and worlds. With a pen in one hand and a laptop in the other, she navigates the vast expanse of the digital landscape, weaving tales that captivate and inspire. Her curiosity knows no bounds, and her love for storytelling shines through in every piece she crafts. Whether she's delving into the depths of history or exploring the possibilities of the future, Emily's words are a beacon of creativity in a sea of information. Join her on a journey of discovery as she brings stories to life one keystroke at a time.",  isfriend: null,  },
  {profilePic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww" ,  
  displayPic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",  pendingMessage: 3 , location: "Indore, India", Name: "Shivangi", age:20, intrests:[{
    icon: `<i class="fa-solid fa-music"></i>`,
    intrest: "Music"
  }, {
    icon:  `<i class="fa-solid fa-feather-pointed"></i>`,
    intrest: "Painting"
  }], Bio:"Meet Shivangi, a modern-day explorer of words and worlds. With a pen in one hand and a laptop in the other, she navigates the vast expanse of the digital landscape, weaving tales that captivate and inspire. Her curiosity knows no bounds, and her love for storytelling shines through in every piece she crafts. Whether she's delving into the depths of history or exploring the possibilities of the future, Emily's words are a beacon of creativity in a sea of information. Join her on a journey of discovery as she brings stories to life one keystroke at a time.", 
   isfriend: null,  },
  {profilePic: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww" ,       displayPic: "https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww",   
   pendingMessage: 7 , 
   location: "Hyedrabad, India", 
   Name: "Aashi",
    age:22, 
    intrests:[{
    icon: `<i class="fa-solid fa-music"></i>`,
    intrest: "Music"
  }, {
    icon:  `<i class="fa-solid fa-feather-pointed"></i>`,
    intrest: "Painting"
  }], Bio:"Meet Aashi, a modern-day explorer of words and worlds. With a pen in one hand and a laptop in the other, she navigates the vast expanse of the digital landscape, weaving tales that captivate and inspire. Her curiosity knows no bounds, and her love for storytelling shines through in every piece she crafts. Whether she's delving into the depths of history or exploring the possibilities of the future, Emily's words are a beacon of creativity in a sea of information. Join her on a journey of discovery as she brings stories to life one keystroke at a time.",  
  isfriend: null,  }

];

function select(elem){
  return document.querySelector(elem);
}




let curl = 0;
let isAnimating = false;

function setdata(index){
  select(".imageprof img").src = user[index].profilePic;
select(".badge h5").textContent = user[index].pendingMessage;
select(".location h3").textContent = user[index].location;
select(".name h1:nth-child(1)").textContent = user[index].Name;
select(".name h1:nth-child(2)").textContent = user[index].age;



let clutter = "";
user[index].intrests.forEach(function(intrest){
clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1  gap-3 rounded-full ">
${intrest.icon}
<h3 class="text-sm   tracking-tight capitalize">${intrest.intrest}</h3>
</div>`
})
select(".tags").innerHTML = clutter;
select(".bio p ").textContent = user[index].Bio;



}

function setinitials(){
select(".maincard img").src = user[curl].displayPic;
select(".incomingcard img").src = user[curl+1]?.displayPic;

setdata(curl);
curl = 2; 
};

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function() {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1
        });
        if (curl === user.length) curl = 0; 
        select(".maincard img ").src = user[curl].displayPic;
        curl++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      }
    });

    tl.to(".maincard", {
      scale: 1.1,
      opacity: 0,
      duration: 0.9,
      ease: "circ.out"
    }, "a");
    tl.from(".incomingcard", {
      scale: 0.9,
      opacity: 1,
      duration: 1.1,
      ease: "circ.out" 
    }, "a");
  }
}







let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click", function() {

imageChange();
setdata(curl-1);
gsap.from(".details .elements ", {
  y: "100%",
  duration: 1.2, 
  stagger: .07,
  ease: Power4.easeInOut
})
});
accept.addEventListener("click", function() {

  imageChange();
  setdata(curl-1);
  gsap.from(".details .elements ", {
    y: "100%",
    duration: 1.2, 
    stagger: .07,
    ease: Power4.easeInOut
  })
  });


function containerCreater(){
  document.querySelectorAll(".elements").forEach(function(elements){
   let div =  document.createElement("div");
   div.classList.add(`${elements.classList[1]}container` ,  'overflow-hidden');
div.appendChild(elements);
select(".details").appendChild(div);
  })
}



containerCreater();
setinitials();
