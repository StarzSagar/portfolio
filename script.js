const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".8s";

observer.observe(card);

});



const mirrorBtn = document.getElementById("mirrorBtn");
const popup = document.getElementById("mirrorPopup");

mirrorBtn.addEventListener("click", () => {
    popup.classList.toggle("show");
});

document.addEventListener("click",(e)=>{

    if(
        !popup.contains(e.target)
        &&
        e.target!==mirrorBtn
    ){
        popup.classList.remove("show");
    }

});