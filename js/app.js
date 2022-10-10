//The following code is a dynamic way to recruit the number of navbar cards required to navigate the page
const nodeList = document.querySelectorAll(".landing__container");

for(let i = 1; i <= nodeList.length; i++) {
    document.getElementById("navbar__list").innerHTML += "<li>Section " + i + "</li>";
    console.log("Section " + i);
}