const locomotiveScroll = new LocomotiveScroll();
let menu=document.querySelector(".menu");
let main=document.querySelector(".main");
let hero=document.querySelector(".hero");
let video=document.querySelector(".video-container");
let boxes=document.querySelectorAll(".box");
let overlay=document.querySelector(".overlay");
let mini=document.querySelector(".overlay-mini");
let dot=document.querySelector(".dot");
let play=document.querySelector(".h");
let mat=document.querySelector(".one");
let chan=document.querySelector(".two");
let sil=document.querySelector(".three");
let intr=document.querySelector(".four");
let see=document.querySelector(".lo");
let say=document.querySelector(".say");
let hello=document.querySelector(".hello");

let flag=1;

menu.addEventListener("click",()=>{
    if(flag){
        overlay.style.top="0%"
        overlay.style.rotate="5deg"
        menu.textContent="Close"
        mini.style.rotate="-5deg"
        flag=0
    }else{
        overlay.style.top="-110%"
        overlay.style.rotate="0deg"
        menu.textContent="Menu"
        mini.style.rotate="0deg"
        flag=1
    }  
})
hero.addEventListener("mouseenter",()=>{
    dot.style.opacity="0"
})
hero.addEventListener("mouseleave",()=>{
    dot.style.opacity="1"
})
document.addEventListener("mousemove",(e)=>{
    video.style.top=e.clientY+"px"
    video.style.left=e.clientX+"px"
    video.style.transition="linear 0.3s"
    video.style.transform="translate(5%,8%)"

})
document.addEventListener("mousemove",(e)=>{
    dot.style.top=e.clientY+"px"
    dot.style.left=e.clientX+"px"
    dot.style.transition="linear 0.3s"
    dot.style.transform="translate(15%,8%)"
})
boxes.forEach((box)=>{
    let vid=box.querySelector(".vid")
    let image=box.querySelector(".img")
    box.addEventListener("mouseenter",()=>{
        vid.style.visibility="visible"
        image.style.filter="blur(6px)"
        box.style.height="97%"
        box.style.width="97%"
    })
    box.addEventListener("mouseleave",()=>{
        vid.style.visibility="hidden" 
        image.style.filter="blur(0px)"
        box.style.height="100%"
        box.style.width="100%"
    })
})
let detail_images=document.querySelectorAll(".detail-img");
let playground_images=document.querySelectorAll(".playgound-img");

let udetail=document.querySelector("#detail");
let uplayground=document.querySelector("#playg");

let detail_interval;
let playground_interval;
let currentIndex = 0; 

udetail.addEventListener('mouseenter', () => {
    playImageSequence(detail_images); 

    detail_interval = setInterval(() => {
        playImageSequence(detail_images);
    }, 300); 
});

udetail.addEventListener('mouseleave', () => {
    clearInterval(detail_interval);
    detail_images.forEach((img) => {
        img.style.transition = 'none'; 
        img.style.visibility = 'hidden'; 
        img.style.zIndex = '1'; 
        img.style.transform = 'translateY(10%) rotate(0deg)'; 
    });
    currentIndex = 0; 
});
uplayground.addEventListener('mouseenter', () => {
    playImageSequence(playground_images); 

    playground_interval = setInterval(() => {
        playImageSequence(playground_images);
    }, 300); 
});

uplayground.addEventListener('mouseleave', () => {
    clearInterval(playground_interval);
    playground_images.forEach((img) => {
        img.style.transition = 'none'; 
        img.style.visibility = 'hidden'; 
        img.style.zIndex = '1'; 
        img.style.transform = 'translateY(10%) rotate(0deg)'; 
    });
    currentIndex = 0; 
});

function playImageSequence(images) {
    // console.log(images);
    let currentImg = images[currentIndex];
    images.forEach((img) => {
        if (img !== currentImg) {
            img.style.zIndex = '9'; 
        }
    });
    currentImg.style.transition = 'all 0.3s ease'; 
    currentImg.style.visibility = 'visible';
    currentImg.style.transform = 'translateY(-10%) rotate(-3deg)';
    currentImg.style.zIndex = '10'; 
    let pastIndex = (currentIndex + images.length+1) % images.length;
    let pastImage = images[pastIndex];
    pastImage.style.transition = 'all 0s';
    pastImage.style.visibility = 'hidden';
    pastImage.style.transform = 'translateY(10%) rotate(0deg)';

    currentIndex = (currentIndex + 1) % images.length;
}

play.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="150px"
    dot.style.borderRadius="10px"
    dot.textContent="Portfolio"
    dot.style.rotate="-10deg"
})
play.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})

mat.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="110px"
    dot.style.borderRadius="10px"
    dot.textContent="matera"
    dot.style.rotate="-10deg"
})
mat.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})

chan.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="110px"
    dot.style.borderRadius="10px"
    dot.textContent="chance"
    dot.style.rotate="-10deg"
})
chan.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})

sil.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="110px"
    dot.style.borderRadius="10px"
    dot.textContent="silvr"
    dot.style.rotate="-10deg"
})
sil.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})

intr.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="160px"
    dot.style.borderRadius="10px"
    dot.textContent="intramuros"
    dot.style.rotate="-10deg"
})
intr.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})

see.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="140px"
    dot.style.borderRadius="10px"
    dot.textContent="services"
    dot.style.rotate="-10deg"
})
see.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})
say.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="170px"
    dot.style.borderRadius="10px"
    dot.textContent="let's talk"
    dot.style.rotate="-10deg"
})
say.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})
hello.addEventListener("mouseenter",(e)=>{
    dot.style.height="50px"
    dot.style.width="150px"
    dot.style.borderRadius="10px"
    dot.textContent="send love"
    dot.style.rotate="-10deg"
})
hello.addEventListener("mouseleave",(e)=>{
    dot.style.height="15px"
    dot.style.width="15px"
    dot.style.borderRadius="50%"
    dot.textContent=""
    dot.style.rotate="0deg"
})


