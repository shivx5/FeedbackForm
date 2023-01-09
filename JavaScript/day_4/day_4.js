let all=document.querySelectorAll("form, form *");
// console.log(all);

// for(let ele of )

for(let ele of document.querySelectorAll("form, form *"))
{
    ele.addEventListener("click",()=>
    {
        console.log(`capturing phase: ${ele.tagName}`);
    },
    {capture: true}

    );

    ele.addEventListener("click",()=>
    {
        console.log(`Bubbling phase: ${ele.tagName}`);
    });
}
const listner=document.querySelector("form");
const listnerspan=document.querySelector("form div");
const listnerpara=document.querySelector("form p");
const listnerheading=document.querySelector("form h7");

listner.addEventListener("click",(event)=>
{
    alert("Im from Form");
    // console.log(event.target.tagName);
},false);

listnerspan.addEventListener("click",(event)=>
{
    alert("Im from Division");
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
    alert("Im from last h7");
    // console.log(event.target.tagName);
},false);
