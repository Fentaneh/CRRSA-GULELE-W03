// ======================================
// CRRSA Appointment System
// Part 1
// ======================================

// Load Page
document.addEventListener("DOMContentLoaded", function () {

    setApplicationDate();

    showAppointments();

});

// --------------------------------------
// Application Date (Ethiopian Calendar)
// --------------------------------------
function setApplicationDate() {

    let input = document.getElementById("applicationDate");

    if (!input) return;

    let today = new Date();

    let ec = gregorianToEthiopian(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
    );

    input.value =
        ec.day + "/" +
        ec.month + "/" +
        ec.year + " E.C.";

}
// ======================================
// Ethiopian Calendar Popup
// ======================================

function openEthiopianCalendar() {

    let box = document.getElementById("calendarBox");

    box.innerHTML = `

    <select id="ecDay"></select>

    <select id="ecMonth">
        <option value="1">መስከረም</option>
        <option value="2">ጥቅምት</option>
        <option value="3">ኅዳር</option>
        <option value="4">ታኅሣሥ</option>
        <option value="5">ጥር</option>
        <option value="6">የካቲት</option>
        <option value="7">መጋቢት</option>
        <option value="8">ሚያዝያ</option>
        <option value="9">ግንቦት</option>
        <option value="10">ሰኔ</option>
        <option value="11">ሐምሌ</option>
        <option value="12">ነሐሴ</option>
        <option value="13">ጳጉሜ</option>
    </select>

    <select id="ecYear"></select>

    <button type="button" onclick="selectECDate()">
        OK
    </button>

    `;

    let day = document.getElementById("ecDay");

    for (let i = 1; i <= 30; i++) {

        day.innerHTML += `<option value="${i}">${i}</option>`;

    }

    let year = document.getElementById("ecYear");

    for (let y = 2018; y <= 2035; y++) {

        year.innerHTML += `<option value="${y}">${y}</option>`;

    }

}

function selectECDate() {

    let day = document.getElementById("ecDay").value;
    let month = document.getElementById("ecMonth").value;
    let year = document.getElementById("ecYear").value;

    document.getElementById("appointmentDate").value =
        day + "/" + month + "/" + year + " E.C.";

    document.getElementById("calendarBox").innerHTML = "";

}

// ======================================
// Create Appointment
// ======================================

function createAppointment(event){

    event.preventDefault();

    let name =
    document.getElementById("fullName").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let service =
    document.getElementById("service").value;

    if(service=="Other"){

        service =
        document.getElementById("otherService").value.trim();

    }

   let applicationDate =
document.getElementById("applicationDate").value;

let appointmentDate =
document.getElementById("appointmentDate").value;

if(appointmentDate==""){

    alert("Please select Appointment Date.");

    return;

    }

    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let appointmentNumber =
generateAppointmentNumber();

    appointments.push({

        number: appointmentNumber,

        name: name,

        phone: phone,

        service: service,

        applicationDate: applicationDate,

        date: appointmentDate,

        status: "Pending"

    });

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

    document.getElementById("appointmentResult").innerHTML = `

<h3>Appointment Confirmation</h3>

<p><b>Appointment No:</b> ${appointmentNumber}</p>

<p><b>Name:</b> ${name}</p>

<p><b>Phone:</b> ${phone}</p>

<p><b>Service:</b> ${service}</p>

<p><b>Application Date:</b> ${applicationDate}</p>

<p><b>Appointment Date:</b> ${appointmentDate}</p>

<p><b>Status:</b> Pending</p>

`;

generateQRCode(appointmentNumber);

document.getElementById("printButton").style.display="inline-block";

    alert("Appointment Created Successfully");

    document.getElementById("appointmentForm").reset();

    setApplicationDate();

    showAppointments();

}
// ======================================
// Show Appointments
// ======================================

function showAppointments(){

    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let table =
    document.getElementById("appointmentTable");

    table.innerHTML = "";

    appointments.forEach(function(a,index){

        table.innerHTML += `

        <tr>

        <td>${index+1}</td>

        <td>${a.number}</td>

        <td>${a.name}</td>

        <td>${a.phone}</td>

        <td>${a.service}</td>

        <td>${a.applicationDate}</td>

        <td>${a.date}</td>

        <td>${a.status}</td>

        </tr>

        `;

    });

}



// ======================================
// QR Code
// ======================================

function generateQRCode(number){

    let qr =
    document.getElementById("qrcode");

    qr.innerHTML = "";

    new QRCode(qr,{
        text:number,
        width:150,
        height:150
    });

}

// ======================================
// Appointment Number
// ======================================

function generateAppointmentNumber(){

    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let number =
    String(appointments.length + 1).padStart(2,"0");

    return number;

}
function printAppointment(){

    window.print();

}












