let allheadings=document.getElementsByTagName("h1")
console.log(allheadings)
console.log(allheadings.length)
for(a=0;a<allheadings.length;a++){
  console.log(allheadings[a]);
}

//calling the class

//
let firstHeading=document.querySelector("h1")
let thirdHeading=document.querySelector(".head")
let secondHeadinh=document.querySelector("#word2")
//using javascript to asiin class and id
headings[2].className="head"
headings[2].classId="word4"
//inner html-changes the content of the element


let list=
{/* <li>mat</li>
<li>bat</li>
<li>toy</li> */}
let ul=document.querySelector("ul")
ul.innerHTML=list

//crud-create,read,delete
let biggestHeading=document.createElement("h1")
biggestHeading.className="title"
biggestHeading.style.fontSize="50px"
biggestHeading.textContent="this is the biggest title made in Javascript"
let container=document.querySelector(".container")
container.appendChild(biggestHeading)
//READ
getElementsByTagName
getelementbyid
querySelector
//create
createElement
append/appendChild
we append in a container
//
removeChild