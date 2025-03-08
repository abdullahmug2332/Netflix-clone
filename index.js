const leftArrow = document.querySelector(".rightarrow");
const rightArrow = document.querySelector(".leftarrow");
const movieSlider = document.querySelector(".movieslider");

leftArrow.style.display="none";
rightArrow.style.display="none";

let currentTranslateX = 0; 

if(currentTranslateX <= 0 && currentTranslateX > -1200 ){
    leftArrow.style.display="block";
}

leftArrow.addEventListener("click", () => {
    currentTranslateX -= 200; 
    movieSlider.style.transform = `translateX(${currentTranslateX}px)`;

    if(currentTranslateX <= -1200 ){
        leftArrow.style.display="none";
    }
    if(currentTranslateX < 0 && currentTranslateX >= -1200 ){
        rightArrow.style.display="block";
    }
    
});



if(currentTranslateX < 0 && currentTranslateX >= -1200 ){
    rightArrow.style.display="block";
}

rightArrow.addEventListener("click", () => {
    currentTranslateX += 200; 
    movieSlider.style.transform = `translateX(${currentTranslateX}px)`;
   
    if(currentTranslateX < 0 && currentTranslateX >= -1200 ){
        rightArrow.style.display="block";
    }

    if(currentTranslateX > -1200 ){
        leftArrow.style.display="block";
    }
    if(currentTranslateX >=0 ){
        rightArrow.style.display="none";
    }
});

const bars = document.querySelectorAll(".allbars");
const subbars = document.querySelectorAll(".allsubbars");

bars.forEach((bar, index) => {
    bar.addEventListener("click", () => {
        const subbar = subbars[index];
        const isOpen = subbar.style.display === "block";

        // Close all subbars and reset icons
        subbars.forEach(sb => sb.style.display = "none");
        document.querySelectorAll(".fa-plus").forEach(p => p.style.display = "inline");
        document.querySelectorAll(".fa-xmark").forEach(c => c.style.display = "none");

        // Toggle only the clicked one
        if (!isOpen) {
            subbar.style.display = "block";
            bar.querySelector(".fa-plus").style.display = "none";
            bar.querySelector(".fa-xmark").style.display = "inline";
        }
    });
});
