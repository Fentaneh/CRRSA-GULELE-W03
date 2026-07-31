// ======================================
// CRRSA Gulele Woreda 03
// Online Appointment System
// Generate Number + QR + Print + Table
// ======================================



function createAppointment(event){

event.preventDefault();



let name =
document.getElementById("fullName").value;



let phone =
document.getElementById("phone").value;



let service =
document.getElementById("service").value;



let date =
document.getElementById("date").value;




// Create Appointment Number

let number =
"CRRSA-" + Math.floor(100000 + Math.random() * 900000);




// Appointment Data

let appointment = {

number:number,

name:name,

phone:phone,

service:service,

date:date,

status:"Pending"

};





// Save Appointment

let list =
JSON.parse(localStorage.getItem("appointments")) || [];



list.push(appointment);



localStorage.setItem(
"appointments",
JSON.stringify(list)
);





// Show Appointment Slip

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
Appointment Number:
<b>${number}</b>
</p>


<p>
Name:
${name}
</p>


<p>
Phone:
${phone}
</p>


<p>
Service:
${service}
</p>


<p>
Date:
${date}
</p>


<p>
Status:
Pending
</p>


<hr>


<p>
Please keep your appointment number.
</p>


</div>


`;






// Generate QR Code


document.getElementById("qrcode").innerHTML="";



new QRCode(

document.getElementById("qrcode"),

{

text:

`
CRRSA Gulele Woreda 03

Appointment No:
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





// Show Print Button

document.getElementById("printButton").style.display="block";




// Refresh Table

showAppointments();



}




// ======================================
// Display Appointment Table
// ======================================


function showAppointments(){



let list =
JSON.parse(localStorage.getItem("appointments")) || [];



let table =
document.getElementById("appointmentTable");



if(!table){

return;

}



table.innerHTML="";



list.forEach(function(a,index){



table.innerHTML += `


<tr>


<td>
${index + 1}
</td>


<td>
${a.number}
</td>


<td>
${a.name}
</td>


<td>
${a.phone}
</td>


<td>
${a.service}
</td>


<td>
${a.date}
</td>


<td>
${a.status}
</td>


</tr>


`;



});


}




// ======================================
// Print Appointment Slip
// ======================================


function printAppointment(){



let content =

document.getElementById("printArea").innerHTML;



let oldPage =

document.body.innerHTML;



document.body.innerHTML = content;



window.print();



document.body.innerHTML = oldPage;



location.reload();



}





// Load Table When Page Opens


window.onload=function(){


showAppointments();


};
