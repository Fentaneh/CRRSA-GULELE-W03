// ===============================
// Queue Display
// ===============================

function loadQueue(){

    let current =
    JSON.parse(localStorage.getItem("currentCall"));

    if(current){

        document.getElementById("number").textContent =
        current.number;

        document.getElementById("name").textContent =
        current.name;

        document.getElementById("counter").textContent =
        current.counter;

    }

}

loadQueue();

setInterval(loadQueue,1000);
