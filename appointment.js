// ======================================
// CRRSA Gulele Woreda 03
// Appointment System
// ====================================

let selectedLanguage = "en";

function changeLanguage(lang){

    selectedLanguage = lang;

}


document
.getElementById("appointmentDate")
.addEventListener("change",function(){

    let d = new Date(this.value);


    let day =
    String(d.getDate()).padStart(2,"0");


    let month =
    String(d.getMonth()+1).padStart(2,"0");


    let year =
    d.getFullYear();



    if(selectedLanguage=="am"){

        this.setAttribute(
        "data-date",
        day+"/"+month+"/"+year+" ዓ.ም"
        );


    }else{


        this.setAttribute(
        "data-date",
        month+"/"+day+"/"+year+" G.C"
        );

    }


});
// ===============================
// Page Load
// ===============================
document.addEventListener("DOMContentLoaded", function(){

    setApplicationDate();

    setAppointmentDate();

    showAppointments();

});
// ===============================
// Application Date G.C + E.C
// ===============================
function setAppointmentDate(){

    let input =
    document.getElementById("appointmentDate");

    if(!input) return;

    let today = new Date();

    let gc =
    String(today.getDate()).padStart(2,"0") + "/" +
    String(today.getMonth()+1).padStart(2,"0") + "/" +
    today.getFullYear() + " G.C.";

    let ec =
    gregorianToEthiopian(
        today.getFullYear(),
        today.getMonth()+1,
        today.getDate()
    );

    let ecText =
    String(ec.day).padStart(2,"0") + "/" +
    String(ec.month).padStart(2,"0") + "/" +
    ec.year + " E.C.";

    input.value = gc + " | " + ecText;

}
function setAppointmentDate() {

    let input =
    document.getElementById("appointmentDate");

    let ecText =
    document.getElementById("appointmentEC");

    if (!input) return;


    function updateEC(){

        let value = input.value.trim();

        if(value === ""){
            ecText.innerHTML = "";
            return;
        }


        let parts = value.split("/");


        if(parts.length !== 3){
            ecText.innerHTML = "Use DD/MM/YYYY";
            return;
        }


        let day = Number(parts[0]);
        let month = Number(parts[1]);
        let year = Number(parts[2]);


        let ec =
        gregorianToEthiopian(
            year,
            month,
            day
        );


        ecText.innerHTML =
        "<b>E.C:</b> " +
        String(ec.day).padStart(2,"0") +
        "/" +
        String(ec.month).padStart(2,"0") +
        "/" +
        ec.year;

    }


    let today = new Date();


    input.value =
    String(today.getDate()).padStart(2,"0") +
    "/" +
    String(today.getMonth()+1).padStart(2,"0") +
    "/" +
    today.getFullYear();


    updateEC();


    input.addEventListener(
        "input",
        updateEC
    );

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

    if(service === "Other"){

        service =
        document.getElementById("otherService").value.trim();

    }

    let applicationDate =
    document.getElementById("applicationDate").value;

    let appointmentDate =
    document.getElementById("appointmentDate").value;

    if(appointmentDate === ""){

        alert("Please select Appointment Date.");

        return;

    }

    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];


    // ===============================
    // Duplicate Check
    // ===============================
    let duplicate =
    appointments.find(function(a){

        return a.phone === phone &&
               a.service === service;

    });

    if(duplicate){

        alert("You already applied for this service.");

        return;

    }


    // ===============================
    // Appointment Number
    // ===============================
    let today =
    new Date().toISOString().split("T")[0];

    let todayCount =
    appointments.filter(function(a){

        return a.createdDate === today;

    }).length + 1;

    let number =
    "CRRSA-" +
    today.replaceAll("-","") +
    "-" +
    String(todayCount).padStart(2,"0");


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


    // ===============================
    // Save
    // ===============================
    appointments.push(appointment);

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );


    // ===============================
    // Show Result
    // ===============================
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

        <h3>Appointment Confirmation</h3>

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

    let btn =
    document.getElementById("printButton");

    if(btn){

        btn.style.display="block";

    }

}


// ===============================
// QR Code
// ===============================
function createQR(data){

    let qr =
    document.getElementById("qrcode");

    if(!qr) return;

    qr.innerHTML="";

    new QRCode(qr,{

        text:
        "Appointment No: " + data.number +
        "\nName: " + data.name +
        "\nPhone: " + data.phone +
        "\nService: " + data.service +
        "\nAppointment Date: " + data.appointmentDate,

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

    if(service==="Other"){

        otherBox.style.display="block";

    }else{

        otherBox.style.display="none";

        document.getElementById("otherService").value="";

    }

}


// ===============================
// Search Appointment
// ===============================
function searchAppointment(){

    let keyword =
    document.getElementById("searchInput").value.toLowerCase();

    let list =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let table =
    document.getElementById("appointmentTable");

    table.innerHTML="";

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
// Reset Form
// ===============================
function resetAppointmentForm(){

    document.getElementById("appointmentForm").reset();

    setApplicationDate();

    setAppointmentDate();

    document.getElementById("otherServiceBox").style.display="none";

}


// ===============================
// Refresh
// ===============================
function refreshAppointments(){

    showAppointments();

}


// ===============================
// Clear All
// ===============================
function clearAppointments(){

    if(confirm("Delete all appointments?")){

        localStorage.removeItem("appointments");

        showAppointments();

        alert("All appointments deleted.");

    }

}

function updateAppointmentDate(){

    let input =
    document.getElementById("appointmentDate");


    let ecText =
    document.getElementById("appointmentEC");


    if(!input.value){
        return;
    }


    let d =
    new Date(input.value);


    let day =
    d.getDate();


    let month =
    d.getMonth()+1;


    let year =
    d.getFullYear();



    if(selectedLanguage=="am"){


        let ec =
        gregorianToEthiopian(
            year,
            month,
            day
        );


        ecText.innerHTML =
        "የቀጠሮ ቀን: " +
        ec.day + "/" +
        ec.month + "/" +
        ec.year +
        " E.C";


    }else{


        ecText.innerHTML =
        "Appointment Date: " +
        month + "/" +
        day + "/" +
        year +
        " G.C";


    }

}


































