const forme=document.feedbackform;
// console.log(forme.elements);
const buttonel=document.querySelector("form button");
// const  inputname=forme.elements.fullName;
// const  inputtype=forme.elements.type;
// const  inputemail=forme.elements.emailname;
// const  inputarea=forme.elements.areaname;
// const  inputconditions=forme.elements.checkname;








const handlesubmit=(event)=>
{
    event.preventDefault();
    const formData=new FormData(forme);
    const totaldata=[...formData.entries()];
    // totaldata.map ((x)=> `${encodeURIComponent (x[0])}= ${encodeURIComponent (x[1])}`).join("&");
    // const datastring= totaldata.map (([key,value]) => `${encodeURIComponent (key)}=${encodeURIComponent (value)}`).join("&"); 
     // console.log(datastring);  ---                              ....... way 1 old.....
    // const datastring1=new  URLSearchParams(formData);
    // console.log(datastring1.toString()); ---                   ..... way 2 better.............
    const jsonData=JSON.stringify(Object.fromEntries(formData));
    console.log(jsonData);
}
// const handleformdata=(event)=>
// {

//         console.log("fired");                          // want to alter na keep it this ok..!
//         const formData=event.formData;
//         console.log([... formData.values()]);
// }
// forme.addEventListener('formdata',handleformdata);

forme.addEventListener("submit",handlesubmit);
