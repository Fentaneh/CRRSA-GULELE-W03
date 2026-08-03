// ======================================
// CRRSA Gulele Woreda 03
// Appointment System
// appointment.js
// ======================================


// Load when page open

document.addEventListener("DOMContentLoaded", function(){

    showAppointments();

    setApplicationDate();

});



// ======================================
// Set Application Date
// ======================================

function setApplicationDate(){

    let input = document.getElementById("applicationDate");

    if(input){

        let today = new Date();

        let date =
        today.getFullYear() + "-" +
        String(today.getMonth()+1).padStart(2,"0") + "-" +
        String(today.getDate()).padStart(2,"0");


        input.value = date;

    }

}



// ======================================
// Create Appointment
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



    let applicationDate =
    document.getElementById("applicationDate").value;



    let appointmentDate =
    document.getElementById("appointmentDate").value;



    if(appointmentDate === ""){

        alert("Please select appointment date");

        return;

    }



    // Get old data

    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];



    // Daily number

    let today =
    new Date().toISOString().split("T")[0];



    let count =
    appointments.filter(function(a){

        return a.applicationDate === today;

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
// ======================================
// Show Appointment Slip
// ======================================

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


<hr>


<p>
Please keep your appointment number.
</p>


</div>

`;



// Create QR Code

createQR(data);



let print =
document.getElementById("printButton");


if(print){

    print.style.display="block";

}



}



// ======================================
// Create QR Code
// ======================================

function createQR(data){


let qr =
document.getElementById("qrcode");



if(!qr) return;



qr.innerHTML="";



new QRCode(

qr,

{

text:

`
CRRSA Gulele Woreda 03

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
${data.status}

`,

width:150,

height:150


}

);


}



// ======================================
// Print Appointment
// ======================================

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



// ======================================
// Other Service Show / Hide
// ======================================

function toggleOtherService(){


let service =
document.getElementById("service").value;



let box =
document.getElementById("otherServiceBox");



if(!box) return;



if(service === "Other"){


    box.style.display="block";


}else{


    box.style.display="none";


}


}



// ======================================
// Search Appointment
// ======================================

function searchAppointment(){


let text =
document.getElementById("searchInput").value.toLowerCase();



let table =
document.getElementById("appointmentTable");



if(!table) return;



let list =
JSON.parse(localStorage.getItem("appointments")) || [];



table.innerHTML="";



list.forEach(function(a,index){



let data =
(
a.name +
a.phone +
a.number +
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


// ======================================
// Update Appointment Status
// ======================================

function updateStatus(index, status){


let list =
JSON.parse(localStorage.getItem("appointments")) || [];



if(list[index]){


    list[index].status = status;


    localStorage.setItem(
        "appointments",
        JSON.stringify(list)
    );


}



showAppointments();



}



// ======================================
// Delete Appointment
// ======================================

function deleteAppointment(index){


let list =
JSON.parse(localStorage.getItem("appointments")) || [];



if(confirm("Delete this appointment?")){


    list.splice(index,1);



    localStorage.setItem(
        "appointments",
        JSON.stringify(list)
    );



    showAppointments();



}


}



// ======================================
// Clear All Appointments
// ======================================

function clearAppointments(){


if(confirm("Delete all appointments?")){


localStorage.removeItem("appointments");


showAppointments();


}



}



// ======================================
// Export To Excel CSV
// ======================================

function exportExcel(){


let list =
JSON.parse(localStorage.getItem("appointments")) || [];



if(list.length === 0){


alert("No appointment data");


return;


}



let csv =

"Appointment No,Name,Phone,Service,Application Date,Appointment Date,Status\n";



list.forEach(function(a){


csv +=

`${a.number},${a.name},${a.phone},${a.service},${a.applicationDate},${a.appointmentDate},${a.status}\n`;



});



let blob =
new Blob([csv],
{
type:"text/csv"
});



let link =
document.createElement("a");



link.href =
URL.createObjectURL(blob);



link.download =
"CRRSA_Appointments.csv";



link.click();



}
// ======================================
// Ethiopian Calendar Display
// ======================================


function showEthiopianDate(){


let box =
document.getElementById("ecDateDisplay");



if(!box) return;



let today =
new Date();



let gcYear =
today.getFullYear();



let gcMonth =
today.getMonth()+1;



let gcDay =
today.getDate();



// Approximate Ethiopian Calendar

let ecYear =
gcYear - 8;



let ecMonth =
gcMonth + 4;



let ecDay =
gcDay;



if(ecMonth > 13){

    ecMonth = ecMonth - 13;

    ecYear++;

}



box.innerHTML =

"የኢትዮጵያ ቀን: " +

ecDay +
"/" +
ecMonth +
"/" +
ecYear +
" E.C.";



}



// ======================================
// Calendar Type Change
// ======================================


function changeCalendar(){


let type =
document.getElementById("calendarType").value;



let gc =
document.getElementById("gcDateBox");



let ec =
document.getElementById("ecDateBox");



if(type==="gc"){


gc.style.display="block";


ec.style.display="none";


}else{


gc.style.display="none";


ec.style.display="block";


}



}



// ======================================
// Load Ethiopian Date
// ======================================


document.addEventListener(
"DOMContentLoaded",
function(){


showEthiopianDate();



}
);
// ======================================
// Final Fix & Backup
// ======================================



function validateAppointment(){


let name =
document.getElementById("fullName").value;



let phone =
document.getElementById("phone").value;



if(name.trim()===""){


alert("Please enter name");


return false;


}



if(phone.trim()===""){


alert("Please enter phone number");


return false;


}



return true;



}





// ======================================
// Backup Appointment Data
// ======================================


function backupData(){


let data =
localStorage.getItem("appointments");



if(!data){


alert("No data found");


return;


}



let file =
new Blob(
[data],
{
type:"application/json"
}
);



let link =
document.createElement("a");



link.href =
URL.createObjectURL(file);



link.download =
"CRRSA_backup.json";



link.click();



}





// ======================================
// Restore Appointment Data
// ======================================


function restoreData(event){


let file =
event.target.files[0];



if(!file) return;



let reader =
new FileReader();



reader.onload=function(e){


localStorage.setItem(
"appointments",
e.target.result
);



alert("Data restored successfully");



showAppointments();



};



reader.readAsText(file);



}





// ======================================
// System Information
// ======================================


function systemInfo(){


let list =
JSON.parse(
localStorage.getItem("appointments")
) || [];



alert(

"Total Appointments: " +
list.length

);



}



