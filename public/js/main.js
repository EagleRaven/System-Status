// Reload page every miniute
setTimeout(function(){
    location.reload();
}, 60000); // 1000 = 1 sec, 60000 = 1 min, 240000 = 4 min


const bkColor = document.getElementById("main-div");

// Colors
const green = "#069C56";
const amber = "#FF980E";
const red = "#D3212C";
const blue = "#50859d";


document.addEventListener('DOMContentLoaded', (event) => {
    const statusElements = document.querySelectorAll(".status");
    
    // Iterate over each element in the NodeList
    statusElements.forEach((element) => {
        // Get the value of the data-status attribute for each element
        const status = element.getAttribute('data-status');
    
        // Log the status to the console
       // console.log(status);

        if (status === "Normal" || status === "Normal Service Resumed"){
            bkColor.style.backgroundColor = green;
        }
        else if (status === "Possible Traffic Delays" || status === "Weather Affecting Flights" || status === "Flights Delayed" || status === "Unforeseen service impact"){
            bkColor.style.backgroundColor = amber;
        }
        else if (status === "Service Halted Critical Weather" || status === "Service Halted Major Issue"){
            bkColor.style.backgroundColor = red;
        }
        else {
            bkColor.style.backgroundColor = blue;
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
