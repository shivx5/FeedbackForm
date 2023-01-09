const totalform=document.forms.feedbackform;


const handlesubmit=(event)=>
{
    event.preventDefault();
    console.log([...new FormData(totalform)]);
    // console.log("form is fired");
}

const handleformData=(event)=>
{
    handlesubmit
}
totalform.addEventListener("submit",handlesubmit);
totalform.addEventListener("formdata",()=>
{

})


// const handlesubmit=(event)=>
// {
//     event.preventDefault();
//     console.log([...new FormData(totalform)]);
// };

// const handleformData=(event)=>
// {
//     console.log("formdata fired");
//     console.log(e.FormData);
// }

// totalform.addEventListener("submit",handlesubmit);
// totalform.addEventListener("formdata",handleformData);