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

let appointmentEC =
document.getElementById("appointmentEC");


if(appointmentInput){

    let today = new Date();


    // Minimum Date = Today (G.C)
    let year =
    today.getFullYear();

    let month =
    String(today.getMonth()+1).padStart(2,"0");

    let day =
    String(today.getDate()).padStart(2,"0");


    appointmentInput.min =
    year + "-" + month + "-" + day;



    // When user select appointment date
    appointmentInput.addEventListener("change", function(){


        let selectedDate =
        new Date(this.value);



        let ecDate =
gregorianToEthiopian(
    selected.getFullYear(),
    selected.getMonth()+1,
    selected.getDate()
);



        if(appointmentEC){

            appointmentEC.innerHTML =
            "E.C: " +
            ecDate.day + "/" +
            ecDate.month + "/" +
            ecDate.year;

        }


    });


}
// ===============================
// Application Date (E.C.)
// ===============================

function setApplicationDate(){

    let input = document.getElementById("applicationDate");

    if(!input) return;

    let today = new Date();

    // Gregorian
    let gy = today.getFullYear();
    let gm = String(today.getMonth()+1).padStart(2,"0");
    let gd = String(today.getDate()).padStart(2,"0");

    // Simple Ethiopian Date
    let ec = gregorianToEthiopian(
        gy,
        today.getMonth()+1,
        today.getDate()
    );

    input.value =
        gd + "/" + gm + "/" + gy +
        " (G.C.)   |   " +
        ec.day + "/" + ec.month + "/" + ec.year +
        " (E.C.)";

}


// Gregorian to Ethiopian Calendar

function gregorianToEthiopian(gYear, gMonth, gDay){

    let date = new Date(gYear, gMonth - 1, gDay);

    let ecYear = gYear - 8;

    let ecMonth = gMonth - 1;

    let ecDay = gDay - 10;


    if(ecDay <= 0){

        ecMonth--;

        ecDay += 30;

    }


    if(ecMonth <= 0){

        ecMonth = 13;

        ecYear--;

    }


    return {

        year: ecYear,
        month: ecMonth,
        day: ecDay

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

    console.log("Appointment List:", list);
    
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
