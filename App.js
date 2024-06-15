let main = document.querySelector(".main");
let modeBtn = document.querySelector("#modeBtn");
let navItems = document.querySelector(".navbar");
let about = document.querySelector(".about-section");
let img_content = document.querySelector(".img-content");
let education_container = document.querySelector(".education-container");
let project_links = document.querySelector(".project-links");

let currentMode = "light";
modeBtn.addEventListener("click" , () => {
    if(currentMode === "light"){
        currentMode = "dark";
        navItems.style.backgroundColor = "black";
        main.style.backgroundColor = "black"
        main.style.color = "white";
        about.style.backgroundColor = "black";
        education_container.style.backgroundColor = "black";
        project_links.style.backgroundColor = "black";

    }else{
        currentMode = "light";
        navItems.style.backgroundColor = "#7C72A0";
        main.style.color = "white";
        main.style.backgroundColor = "#A76571";
        about.style.backgroundColor = "#34435E";
        education_container.style.backgroundColor = "#88B7B5"
        project_links.style.backgroundColor = "#90323D"
    }
})