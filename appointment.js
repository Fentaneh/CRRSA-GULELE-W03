// ===============================
// Language
// ===============================
let selectedLanguage = "en";

function changeLanguage(lang){

    selectedLanguage = lang;

    setApplicationDate();

    updateAppointmentDate();

}

// ===============================
// Application Date
// ===============================
function setApplicationDate(){

    let input =
    document.getElementById("applicationDate");

    let today =
    new Date();

    let ec =
    gregorianToEthiopian(
        today.getFullYear(),
        today.getMonth()+1,
        today.getDate()
    );

    input.value =
    String(ec.day).padStart(2,"0") + "/" +
    String(ec.month).padStart(2,"0") + "/" +
    ec.year + " E.C.";

}
// Appointment Calendar
// ===============================
function loadECCalendar(){

    // Day
    let day = document.getElementById("ecDay");

    for(let i=1;i<=30;i++){
        day.innerHTML += `<option value="${i}">${i}</option>`;
    }

    // Year
    let year = document.getElementById("ecYear");

    for(let y=2015;y<=2030;y++){
        year.innerHTML += `<option value="${y}">${y}</option>`;
    }

}
// ===============================
// Appointment Date
// ===============================
function updateAppointmentDate(){

    let input =
    document.getElementById("appointmentDate");

    let output =
    document.getElementById("appointmentEC");

    if(input.value==""){

        output.innerHTML="";

        return;

    }

    let d =
    new Date(input.value);

    let ec =
    gregorianToEthiopian(
        d.getFullYear(),
        d.getMonth()+1,
        d.getDate()
    );

    output.innerHTML =
    "<b>የቀጠሮ ቀን :</b> " +
    String(ec.day).padStart(2,"0") + "/" +
    String(ec.month).padStart(2,"0") + "/" +
    ec.year + " E.C.";

}

// ===============================
// Page Load
// ===============================
// ===============================
// Page Load
// ===============================
document.addEventListener("DOMContentLoaded",function(){

    setApplicationDate();

    loadECCalendar();

});
function checkAppointmentDate(){

    let day =
    Number(document.getElementById("ecDay").value);

    let month =
    Number(document.getElementById("ecMonth").value);

    let year =
    Number(document.getElementById("ecYear").value);


    let todayEC =
    gregorianToEthiopian(
        new Date().getFullYear(),
        new Date().getMonth()+1,
        new Date().getDate()
    );


    if(year < todayEC.year){

        alert("Appointment date cannot be before application date");

        return false;
    }


    if(year == todayEC.year && month < todayEC.month){

        alert("Appointment date cannot be before application date");

        return false;
    }


    if(year == todayEC.year &&
       month == todayEC.month &&
       day < todayEC.day){

        alert("Appointment date cannot be before application date");

        return false;
    }


    return true;

}


    // Check before Application Date

    if(!checkAppointmentDate()){

        return;

    }



    let appointmentDate =
    day + "/" +
    month + "/" +
    year +
    " E.C.";



    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];



    let appointmentNumber =
    "CRRSA-" +
    new Date().getTime();



    let newAppointment = {

        number: appointmentNumber,

        name: name,

        phone: phone,

        service: service,

        applicationDate: applicationDate,

        date: appointmentDate,

        status: "Pending"

    };



    appointments.push(newAppointment);



    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );



    alert(
    "Appointment Created Successfully"
    );


    showAppointments();


}

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



    // Ethiopian Appointment Date

    let day =
    Number(document.getElementById("ecDay").value);

    let month =
    Number(document.getElementById("ecMonth").value);

    let year =
    Number(document.getElementById("ecYear").value);



    if(!day || !month || !year){

        alert("Please select Appointment Date.");

        return;

    }


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

    let result =
    document.getElementById("appointmentEC");

    if(input.value==""){

        result.innerHTML="";

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

    if(selectedLanguage=="en"){

        result.innerHTML =
        "Appointment Date : "
        +month+"/"+day+"/"+year+
        " G.C.";

    }

    else{

        let ec =
        gregorianToEthiopian(
            year,
            month,
            day
        );

        result.innerHTML =
        "የቀጠሮ ቀን : "
        +ec.day+"/"+ec.month+"/"+ec.year+
        " E.C.";

    }

}
































