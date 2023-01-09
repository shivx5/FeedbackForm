// const form=document.querySelector("form");
// const forminput=document.querySelector("form input");
// const forminputtype=document.querySelector("form input[type='checkbox']");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
// console.log("Form submit",forminput.value,forminputtype.checked);
// });

// const mainpage=document.querySelector( "li ");
// console.log(mainpage);

// mainpage.forEach((li)=>
// {
//     li.addEventListener("click",()=>
//     {
//         console.log("clicked",li.textContent);
//     });
// });
const nextbutton=document.getElementById("nextbutton");

nextbutton.addEventListener("keyup",(event)=>
{
    if(event.key==="Enter")
    {
        console.log("copied is prohibited");
    }
   
});

// document.addEventListener("keyup",(event)=>
// {
//     console.log("Pressed");
// })

// document.addEventListener("copy",(event)=>
// {
//     alert("copied is prohibited");
// })