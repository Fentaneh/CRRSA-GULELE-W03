// ===============================
// Queue Display
// ===============================

function loadQueue(){

    let current =
    JSON.parse(localStorage.getItem("currentCall"));

    if(current){

        document.getElementById("number").innerHTML =
        current.number;

        document.getElementById("name").innerHTML =
        current.name;

        document.getElementById("counter").innerHTML =
        "Counter 1";

    }

}

// Refresh every second

loadQueue();

setInterval(loadQueue,1000);
