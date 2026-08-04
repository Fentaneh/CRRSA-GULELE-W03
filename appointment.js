// ======================================
// CRRSA Gulele Woreda 03
// Appointment System
// ======================================


// ===============================
// Page Load
// ===============================

document.addEventListener("DOMContentLoaded", function(){

    showAppointments();

    setApplicationDate();

    let appointmentInput =
    document.getElementById("appointmentDate");

    if(appointmentInput){

        let today = new Date();

        let year = today.getFullYear();
        let month = String(today.getMonth()+1).padStart(2,"0");
        let day = String(today.getDate()).padStart(2,"0");

        appointmentInput.min =
        year + "-" + month + "-" + day;

    }

});
// ===============================
// Application Date (E.C.)
// ===============================

function setApplicationDate() {

    let input = document.getElementById("applicationDate");

    if (!input) return;

    let today = new Date();

    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let day = String(today.getDate()).padStart(2, "0");

    input.value = day + "/" + month + "/" + year;

}


// Gregorian to Ethiopian Calendar

function gregorianToEthiopian(gYear, gMonth, gDay) {


    let date = new Date(
        gYear,
        gMonth - 1,
        gDay
    );


    let newYear =
    new Date(
        gYear,
        8,
        11
    );


    let year;


    if(date < newYear){

        year = gYear - 8;

    }else{

        year = gYear - 7;

    }


    let diff =
    Math.floor(
        (date - newYear) /
        (1000 * 60 * 60 * 24)
    );


    if(diff < 0){

        newYear =
        new Date(
            gYear - 1,
            8,
            11
        );

        diff =
        Math.floor(
            (date - newYear) /
            (1000 * 60 * 60 * 24)
        );

    }


    let month =
    Math.floor(diff / 30) + 1;


    let day =
    (diff % 30) + 1;


    return {

        year: year,

        month: month,

        day: day

    };


}

// ===============================
// Create Appointment
// ===============================

function createAppointment(event) {

    event.preventDefault();


    let name =
    document.getElementById("fullName").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let service =
    document.getElementById("service").value;


    if (service === "Other") {

        service =
        document.getElementById("otherService").value.trim();

    }


    let applicationDate =
    document.getElementById("applicationDate").value;

    let appointmentDate =
    document.getElementById("appointmentDate").value;


    if (appointmentDate === "") {

        alert("Please select Appointment Date.");

        return;

    }


    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];
        // ===============================
    // Duplicate Check
    // Same Phone + Same Service
    // ===============================

    let alreadyApplied = appointments.find(function (a) {

        return (
            a.phone === phone &&
            a.service === service
        );

    });

    if (alreadyApplied) {

        alert("You already applied for this service.");

        return;

    }


    // ===============================
    // Daily Appointment Number
    // ===============================

    let today =
    new Date().toISOString().split("T")[0];

    let todayCount =
    appointments.filter(function (a) {

        return a.createdDate === today;

    }).length + 1;


    let number =
        "CRRSA-" +
        today.replaceAll("-", "") +
        "-" +
        String(todayCount).padStart(2, "0");


    // ===============================
    // Appointment Object
    // ===============================

    let appointment = {

        number: number,

        name: name,

        phone: phone,

        service: service,

        applicationDate: applicationDate,

        appointmentDate: appointmentDate,

        createdDate: today,

        status: "Pending"

    };


    appointments.push(appointment);

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );


    showSlip(appointment);

    showAppointments();

}
// ===============================
// Show Appointment Slip
// ===============================

function showSlip(data){

    let result =
    document.getElementById("appointmentResult");

    if(!result) return;

    result.innerHTML = `

    <div id="printArea">

        <h2>CRRSA Gulele Woreda 03</h2>

        <h3>📅 Appointment Confirmation</h3>

        <hr>

        <p><b>Appointment No:</b> ${data.number}</p>

        <p><b>Name:</b> ${data.name}</p>

        <p><b>Phone:</b> ${data.phone}</p>

        <p><b>Service:</b> ${data.service}</p>

        <p><b>Application Date:</b> ${data.applicationDate}</p>

        <p><b>Appointment Date:</b> ${data.appointmentDate}</p>

        <p><b>Status:</b> ${data.status}</p>

    </div>

    `;

    createQR(data);

    let printButton =
    document.getElementById("printButton");

    if(printButton){

        printButton.style.display = "block";

    }

}



// ===============================
// QR Code
// ===============================

function createQR(data){

    let qr =
    document.getElementById("qrcode");

    if(!qr) return;

    qr.innerHTML = "";

    new QRCode(qr,{

        text:
`CRRSA Gulele Woreda 03

Appointment No:
${data.number}

Name:
${data.name}

Phone:
${data.phone}

Service:
${data.service}

Application Date:
${data.applicationDate}

Appointment Date:
${data.appointmentDate}

Status:
${data.status}`,

        width:150,
        height:150

    });

}
// ===============================
// Show Appointment Table
// ===============================

function showAppointments(){

    let table =
    document.getElementById("appointmentTable");

    if(!table) return;

    let list =
    JSON.parse(localStorage.getItem("appointments")) || [];

    table.innerHTML = "";

    list.forEach(function(a,index){

        table.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${a.number}</td>

            <td>${a.name}</td>

            <td>${a.phone}</td>

            <td>${a.service}</td>

            <td>${a.applicationDate}</td>

            <td>${a.appointmentDate}</td>

            <td>${a.status}</td>

        </tr>

        `;

    });

}



// ===============================
// Print Appointment
// ===============================

function printAppointment(){

    let printArea =
    document.getElementById("printArea");

    if(!printArea){

        alert("No appointment found.");

        return;

    }

    let oldPage =
    document.body.innerHTML;

    document.body.innerHTML =
    printArea.innerHTML;

    window.print();

    document.body.innerHTML =
    oldPage;

    location.reload();

}
// ===============================
// Other Service
// ===============================

function toggleOtherService(){

    let service =
    document.getElementById("service").value;

    let otherBox =
    document.getElementById("otherServiceBox");

    if(!otherBox) return;

    if(service === "Other"){

        otherBox.style.display = "block";

    }else{

        otherBox.style.display = "none";

        let other =
        document.getElementById("otherService");

        if(other){

            other.value = "";

        }

    }

}



// ===============================
// Search Appointment
// ===============================

function searchAppointment(){

    let search =
    document.getElementById("searchInput");

    if(!search){

        showAppointments();

        return;

    }

    let keyword =
    search.value.toLowerCase();

    let list =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let table =
    document.getElementById("appointmentTable");

    table.innerHTML = "";

    list.forEach(function(a,index){

        let text =
        (
            a.number +
            a.name +
            a.phone +
            a.service +
            a.applicationDate +
            a.appointmentDate +
            a.status
        ).toLowerCase();

        if(text.includes(keyword)){

            table.innerHTML += `

            <tr>

                <td>${index+1}</td>
                <td>${a.number}</td>
                <td>${a.name}</td>
                <td>${a.phone}</td>
                <td>${a.service}</td>
                <td>${a.applicationDate}</td>
                <td>${a.appointmentDate}</td>
                <td>${a.status}</td>

            </tr>

            `;

        }

    });

}
// ===============================
// Reset Appointment Form
// ===============================

function resetAppointmentForm(){

    let form =
    document.getElementById("appointmentForm");

    if(form){

        form.reset();

    }

    // Restore Application Date
    setApplicationDate();

    // Hide Other Service
    let otherBox =
    document.getElementById("otherServiceBox");

    if(otherBox){

        otherBox.style.display = "none";

    }

}



// ===============================
// Clear All Appointments (Admin)
// ===============================

function clearAppointments(){

    if(confirm("Are you sure you want to delete all appointments?")){

        localStorage.removeItem("appointments");

        showAppointments();

        alert("All appointments deleted successfully.");

    }

}



// ===============================
// Refresh Appointment Table
// ===============================

function refreshAppointments(){

    showAppointments();

}



// ===============================
// End of appointment.js
// ===============================
