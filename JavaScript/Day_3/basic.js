const listner=document.querySelector("form");
const listnerspan=document.querySelector("form div");
const listnerpara=document.querySelector("form p");
const listnerheading=document.querySelector("form h");
// console.log(listnerpara.innerText);

listner.addEventListener("click",(event)=>
{
    alert("Im from main header");
    // console.log(event.target.tagName);
},false);

listnerspan.addEventListener("click",(event)=>
{
    alert("Im from span");
    // console.log(event.target.tagName);
},false);

listnerpara.addEventListener("click",(event)=>
{
    alert("Im from para");
    // console.log(event.target.tagName);
    event.stopPropagation();
},false);
listnerheading.addEventListener("click",(event)=>
{
    alert("Im from heading");
    // console.log(event.target.tagName);
},false);

let listnerall=document.querySelectorAll("form,*form");