// ======================================
// CRRSA Gulele Woreda 03
// Appointment System
// ======================================


// ===============================
// Page Load
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    // Application Date
    setApplicationDate();

    // Appointment Date
    setAppointmentDate();

    // Load Appointments
    showAppointments();

});


// ===============================
// Application Date (G.C + E.C)
// ===============================
function setApplicationDate() {

    let input = document.getElementById("applicationDate");

    if (!input) return;

    let today = new Date();

    let gcDay = String(today.getDate()).padStart(2, "0");
    let gcMonth = String(today.getMonth() + 1).padStart(2, "0");
    let gcYear = today.getFullYear();

    let ec = gregorianToEthiopian(
        gcYear,
        today.getMonth() + 1,
        today.getDate()
    );

    input.value =
        gcDay + "/" + gcMonth + "/" + gcYear +
        " G.C | " +
        ec.day + "/" + ec.month + "/" + ec.year +
        " E.C";
}


// ===============================
// Appointment Date
// ===============================
function setAppointmentDate() {

    let input =
    document.getElementById("appointmentDate");

    if (!input) return;

    let today = new Date();

    let minDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    input.min = minDate;

}

// ===============================
// Create Appointment
// ===============================
function createAppointment(event){

    event.preventDefault();

    let name =
    document.getElementById("fullName").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let service =
    document.getElementById("service").value;

    if(service==="Other"){

        service =
        document.getElementById("otherService").value.trim();

    }

    let applicationDate =
    document.getElementById("applicationDate").value;

    let appointmentDate =
    document.getElementById("appointmentDate").value;

    if(appointmentDate===""){

        alert("Please select Appointment Date.");

        return;

    }

    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];


    // Duplicate Check
    let duplicate =
    appointments.find(function(a){

        return a.phone===phone &&
               a.service===service;

    });

    if(duplicate){

        alert("You already applied for this service.");

        return;

    }


    let today =
    new Date().toISOString().split("T")[0];

    let number =
    "CRRSA-" +
    Date.now();


    let appointment={

        number:number,

        name:name,

        phone:phone,

        service:service,

        applicationDate:applicationDate,

        appointmentDate:appointmentDate,

        createdDate:today,

        status:"Pending"

    };


    appointments.push(appointment);

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );


    showAppointments();

    showSlip(appointment);

}

