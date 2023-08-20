const endDate = "10 august 2023 12:52 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () =>{

// }

// another way to declare function is



function clock(){
    const end = new Date(endDate);
    const now = new Date()
    // console.log(end);
    // console.log(now);

    const diff = (end - now) / 1000;
    if (diff < 0) return;    //for negative value
    
    //convert ms into seconds   
    // console.log(diff);   

    // convert into days 
   inputs[0].value = Math.floor(diff / 3600 / 24);

//    convert into hours 
   inputs[1].value = Math.floor(diff /3600) % 24;

//    convert into minutes 
    inputs[2].value = Math.floor(diff / 60) % 60;

    // convert into seconds 
    inputs[3].value = Math.floor(diff) % 60;


}

// initial call 
clock()



// 1 day = 24 hours
// a hr = 60 minutes
// 60 min = 3600 seconds

setInterval(
    ()=>{
        clock()
    },1000
)