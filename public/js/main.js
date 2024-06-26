//Reload page every miniute
// setTimeout(function(){
//     location.reload();
// }, 60000); // 1000 = 1 sec


const bkColor = document.getElementById("main-div");

document.addEventListener('DOMContentLoaded', (event) => {
    const statusElements = document.querySelectorAll(".status");
    
    // Iterate over each element in the NodeList
    statusElements.forEach((element) => {
        // Get the value of the data-status attribute for each element
        const status = element.getAttribute('data-status');
    
        // Log the status to the console
       // console.log(status);

        if (status === "Normal"){
            bkColor.style.backgroundColor = "#069C56";
        }
        else if (status === "Warning" || status === "Traffic Warning" || status === "Weather Warning"){
            bkColor.style.backgroundColor = "#FF980E";
        }
        else if (status === "Systems are down" || status === "Trucks are not operating"){
            bkColor.style.backgroundColor = "#D3212C";
        }
        else {
            bkColor.style.backgroundColor = "#50859d";
        }
    });
});

// Initially set opacity to 1
document.getElementById("status").style.opacity = 1;

// Increasing flag
let increasing = false;

function pulse() {
    const statusID = document.getElementById("status");

    // Get the ocacity as a number
    let opacity = parseFloat(statusID.style.opacity);

    // Set counter of increment and decrement
    const counter = 0.01;

    if(!increasing && statusID.style.opacity > 0.1){
        statusID.style.opacity = opacity - counter;
    }
    else {
        increasing = true; // switching the direction
    }
    
    if(increasing && opacity < 1){
        statusID.style.opacity = opacity + counter;
    }
    else {
        increasing = false; // switching the direction
    }
}

setInterval(pulse, 10);




// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
    
//     // Get all elements with class 'status'
//     const statusElements = document.querySelectorAll('.status');
//     console.log('Status elements found:', statusElements);
    
//     statusElements.forEach(element => {
//         const status = element.getAttribute('data-status');
//         console.log('Status:', status); // Log the status value
//         if (status === 'Normal') {
//             document.body.style.backgroundColor = 'lightgreen';
//             console.log('Background color changed to lightgreen'); // Confirm the background color change
//         }
//     });
// });
