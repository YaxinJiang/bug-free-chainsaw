/* Formula for selecting a random element from an array:
let XXX = AAA[Math.floor(Math.random()*AAA.length)];
*/

let arrayone = [
    "wood",
    "brick",
    "glass",
    "fabric",
    "dust",
    "love",
    "yesterday",
    "rock"
    
];

let arraytwo = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned land",
    "at a train station",
    "by the window",
    "from nowhere",
    "everywhere"

];


function renderPoem(){
//0.grab the poem div (.poem a class, # the id)
let poem=document.querySelector(".poem");
//1.grab random element from array one
let element_from_array_one = arrayone[Math.floor(Math.random()*arrayone.length)];
//2.grab random element from array two
let element_from_array_two = arraytwo[Math.floor(Math.random()*arraytwo.length)];
//3.creat a new paragraph
let paragraph = document.createElement("p");
paragraph.textContent=`I found ${element_from_array_one} ${element_from_array_two}`;
//4.append the paragraph to the div
poem.appendChild(paragraph)
}


let button = document.querySelector("button");
button.addEventListener("click",renderPoem)