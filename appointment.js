// ======================================
// CRRSA Gulele Woreda 03
// Appointment System
// appointment.js CLEAN VERSION
// ======================================



// ===============================
// Page Load
// ===============================

document.addEventListener("DOMContentLoaded", function(){

    showAppointments();

    setApplicationDate();

});




// ===============================
// Application Date (E.C.)
// ===============================

function setApplicationDate(){


    let input =
    document.getElementById("applicationDate");


    if(!input) return;



    let today = new Date();


    // Ethiopian year approximate
    let ecYear =
    today.getFullYear() - 8;


    let ecMonth =
    today.getMonth() + 1;


    let ecDay =
    today.getDate();



    input.value =
    ecDay + "/" +
    ecMonth + "/" +
    ecYear +
    " E.C.";


}





// ===============================
// Create Appointment
// ===============================

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



let applicationDate =
document.getElementById("applicationDate").value;



let appointmentDate =
document.getElementById("appointmentDate").value;



if(appointmentDate === ""){


alert("Please select appointment date");

return;


}





let appointments =
JSON.parse(localStorage.getItem("appointments")) || [];





// Daily Appointment Number


let today =
new Date().toISOString().split("T")[0];



let count =

appointments.filter(function(a){

return a.createdDate === today;


}).length + 1;




let number =

"CRRSA-" +
today.replaceAll("-","") +
"-" +
String(count).padStart(2,"0");






let appointment = {


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


<h2>
CRRSA Gulele Woreda 03
</h2>


<h3>
📅 Appointment Confirmation
</h3>


<hr>



<p>
<b>Appointment No:</b>
${data.number}
</p>


<p>
<b>Name:</b>
${data.name}
</p>



<p>
<b>Phone:</b>
${data.phone}
</p>


<p>
<b>Service:</b>
${data.service}
</p>


<p>
<b>Application Date:</b>
${data.applicationDate}
</p>


<p>
<b>Appointment Date:</b>
${data.appointmentDate}
</p>


<p>
<b>Status:</b>
${data.status}
</p>


</div>


`;



createQR(data);



let button =
document.getElementById("printButton");



if(button){

button.style.display="block";

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


`
CRRSA Gulele Woreda 03

Appointment No:
${data.number}

Name:
${data.name}

Service:
${data.service}

Application Date:
${data.applicationDate}

Appointment Date:
${data.appointmentDate}

Status:
${data.status}

`,


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



table.innerHTML="";



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
// Print
// ===============================


function printAppointment(){



let printArea =
document.getElementById("printArea");



if(!printArea){

alert("No appointment found");

return;

}



let old =
document.body.innerHTML;



document.body.innerHTML =
printArea.innerHTML;



window.print();



document.body.innerHTML =
old;



location.reload();



}






// ===============================
// Other Service
// ===============================


function toggleOtherService(){



let service =
document.getElementById("service").value;



let box =
document.getElementById("otherServiceBox");



if(!box) return;



if(service==="Other"){


box.style.display="block";


}else{


box.style.display="none";


}



}






// ===============================
// Search
// ===============================


function searchAppointment(){



let text =
document.getElementById("searchInput").value.toLowerCase();



let list =
JSON.parse(localStorage.getItem("appointments")) || [];



let table =
document.getElementById("appointmentTable");



table.innerHTML="";



list.forEach(function(a,index){



let data =

(
a.name+
a.phone+
a.number+
a.service
).toLowerCase();



if(data.includes(text)){



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
