import React from 'react'
    let x = 0;
    const clicked = () =>{
        console.log("clicked");
        x++;
        console.log(x);
    }

    
    // let data = "boy";
// let array = ["subash","prathap","sathish","tamil","keerthi"];
export const Navbar = () => {

  return (
    <>
    {/* <div>Navbar</div>
    {
    array.map((e)=> {
       return <h1>{e}</h1>
    })
} */}
{/* {
data === "boy"?<h1>boy</h1>:<h1>girl</h1>
} */}
{x}
<button onClick={() =>{clicked()}}>clicked</button>
    </>
  )
}
