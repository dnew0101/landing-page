//The following code is a dynamic way to recruit the number of navbar cards required to navigate the page
const nodeList = document.querySelectorAll(".landing__container");
const navbarList = document.querySelector("#navbar__list");
for (let i = 1; i <= nodeList.length; i++) {
    navbarList.innerHTML += '<li><a href = "#" onclick = "event.preventDefault()">Section '+ i + '</a></li>';
    //I used event.preventDefault() to avoid the screen jumping back to the top when a li is clicked
} //I could've also used .appendChild() in this loop, but felt that less code is better, simpler code


//The next lines of code use "Event Delegation" to sense a click event and then
// auto scroll to the desired section of the DOM
let navbarMenu = navbarList.children;
function scrollOnClick(event) {
    let temp;
    if (event.target.nodeName = 'li') {
        for (let i = 0; i < navbarMenu.length; i++) { //This for loop filters out which index of the navbar was clicked
            if (event.target.innerText == navbarMenu[i].innerText) {
                temp = i;
                console.log(temp);
                break;
            }
        }
        //The temp variable is used to find the navbar's corresponding node
        nodeList[temp].scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    }
}
navbarList.addEventListener('click', scrollOnClick);