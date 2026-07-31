// ======================================
// CRRSA Gulele Woreda 03
// Appointment System
// ======================================



function createAppointment(event){

event.preventDefault();



let name =
document.getElementById("fullName").value;



let phone =
document.getElementById("phone").value;



let service =
document.getElementById("service").value;

if(service === "Other"){

    service =
    document.getElementById("otherService").value;

}


let appointmentDate =
document.getElementById("appointmentDate").value;


if(appointmentDate==""){

alert("Please select appointment date");

return;

}



// Generate Appointment Number

let today =
new Date().toISOString().split("T")[0];


let appointments =
JSON.parse(localStorage.getItem("appointments")) || [];


let todayAppointments =
appointments.filter(function(a){

    return a.applicationDate === today;

});


let count =
todayAppointments.length + 1;


let number =
"CRRSA-" +
today.replaceAll("-","") +
"-" +
String(count).padStart(2,"0");


let appointment = {
    number: number,
    name: name,
    phone: phone,
    service: service,
    applicationDate: applicationDate,
    appointmentDate: appointmentDate,
    status: "Pending"
};



// Save Data
// Save Data

appointments.push(appointment);

localStorage.setItem(
    "appointments",
    JSON.stringify(appointments)
);



// Show Slip


document.getElementById("appointmentResult").innerHTML = `


<div id="printArea">


<h2>
CRRSA Gulele Woreda 03
</h2>


<h3>
📅 Appointment Confirmation
</h3>


<hr>


<p>
<b>Appointment No:</b>
${number}
</p>


<p>
<b>Name:</b>
${name}
</p>


<p>
<b>Phone:</b>
${phone}
</p>


<p>
<b>Service:</b>
${service}
</p>


<p>
<b>Application Date:</b>
${applicationDate}
</p>

<p>
<b>Appointment Date:</b>
${appointmentDate}
</p>

<p>
<b>Status:</b>
Pending
</p>


<hr>


<p>
Please keep your appointment number.
</p>



</div>

`;





// Create QR Code


let qr =
document.getElementById("qrcode");



qr.innerHTML="";



new QRCode(

qr,

{

text:

`
CRRSA Gulele Woreda 03

Appointment:
${number}

Name:
${name}

Service:
${service}

Application Date:
${applicationDate}

Appointment Date:
${appointmentDate}

Status:
Pending

`,

width:150,

height:150

}

);





document.getElementById("printButton")
.style.display="block";





showAppointments();



}




// ======================================
// Show Appointment Table
// ======================================


function showAppointments(){


let list =
JSON.parse(localStorage.getItem("appointments")) || [];



let table =
document.getElementById("appointmentTable");



if(!table) return;



table.innerHTML="";



list.forEach((a,index)=>{


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


// ======================================
// Print Slip
// ======================================


function printAppointment(){



let printData =
document.getElementById("printArea").innerHTML;



let old =
document.body.innerHTML;



document.body.innerHTML = printData;



window.print();



document.body.innerHTML = old;



location.reload();


}

function toggleOtherService(){

    let service =
        document.getElementById("service").value;

    let box =
        document.getElementById("otherServiceBox");

    if(service === "Other"){

        box.style.display = "block";

    }else{

        box.style.display = "none";

    }

}



// Load Data When Open

window.addEventListener("load", function () {

    showAppointments();

    const applicationInput = document.getElementById("applicationDate");

    if (applicationInput) {

        const today = new Date();

        applicationInput.value = today.toISOString().split("T")[0];

    }

});

document.addEventListener("DOMContentLoaded", function () {

    showAppointments();

    const input = document.getElementById("applicationDate");

    if (input) {
        input.valueAsDate = new Date();
    }

});










































































