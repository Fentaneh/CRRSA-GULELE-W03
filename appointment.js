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


let date =
document.getElementById("date").value;




// Generate Appointment Number

let number =
"CRRSA-" + Date.now();





let appointment = {


number:number,

name:name,

phone:phone,

service:service,

date:date,

status:"Pending"


};




// Save Data

let appointments =
JSON.parse(localStorage.getItem("appointments")) || [];



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
<b>Date:</b>
${date}
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

Date:
${date}

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

<td>${a.date}</td>

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


window.onload=function(){

showAppointments();

};
function changeCalendar(){

let type =
document.getElementById("calendarType").value;

if(type=="gc"){

document.getElementById("gcDateBox").style.display="block";
document.getElementById("ecDateBox").style.display="none";

}else{

document.getElementById("gcDateBox").style.display="none";
document.getElementById("ecDateBox").style.display="block";

}

}
window.onload = function(){

    let today = new Date();

    let year = today.getFullYear();

    let month = String(today.getMonth() + 1).padStart(2,"0");

    let day = String(today.getDate()).padStart(2,"0");


    let applicationDate =
        document.getElementById("applicationDate");


    if(applicationDate){

        applicationDate.value =
        year + "-" + month + "-" + day;

    }

};
