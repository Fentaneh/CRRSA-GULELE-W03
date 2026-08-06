// ======================================
// CRRSA Gulele Woreda 03
// Admin Appointment Management
// ======================================



// Admin Login

function adminLogin(){


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



// Demo Login

if(username=="admin" && password=="1234"){



document.getElementById("loginBox").style.display="none";


document.getElementById("adminPanel").style.display="block";


loadDashboard();
loadAppointments();
serviceReport();

}

else{


alert(
"Invalid Username or Password"
);


}


}





// Load Appointment Table

function loadAppointments(){


let list =
JSON.parse(localStorage.getItem("appointments")) || [];



let table =
document.getElementById("adminTable");



table.innerHTML="";



list.forEach(function(a,index){



table.innerHTML += `


<tr>


<td>
${index+1}
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


<td id="status${index}">

${a.status}

</td>



<td>


<button onclick="approveAppointment(${index})">

Approve

</button>



<button onclick="rejectAppointment(${index})">

Reject

</button>



<button onclick="deleteAppointment(${index})">

Delete

</button>



</td>


</tr>


`;



});


}






// Approve Appointment


function approveAppointment(index){


let list =
JSON.parse(localStorage.getItem("appointments"));



list[index].status="Approved";



localStorage.setItem(
"appointments",
JSON.stringify(list)
);



loadAppointments();
loadDashboard();
serviceReport();



}






// Reject Appointment


function rejectAppointment(index){


let list =
JSON.parse(localStorage.getItem("appointments"));



list[index].status="Rejected";



localStorage.setItem(
"appointments",
JSON.stringify(list)
);



loadAppointments();
loadDashboard();
serviceReport();


}






// Delete Appointment


function deleteAppointment(index){



let list =
JSON.parse(localStorage.getItem("appointments"));



if(confirm("Delete this appointment?")){


list.splice(index,1);



localStorage.setItem(
"appointments",
JSON.stringify(list)
);



loadAppointments();
loadDashboard();
serviceReport();


}


}
function exportToExcel() {

    let appointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

    if (appointments.length === 0) {
        alert("No appointment data found.");
        return;
    }

    let csv =
        "Appointment No,Name,Phone,Service,Date,Status\n";

    appointments.forEach(function(a){

        csv += `"${a.number}","${a.name}","${a.phone}","${a.service}","${a.date}","${a.status}"\n`;

    });

    let blob = new Blob([csv], {
        type: "text/csv;charset=utf-8;"
    });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "CRRSA_Appointments.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}
function loadDashboard(){

    let list =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let today =
    new Date().toISOString().split("T")[0];

    let month =
    new Date().getMonth();

    let year =
    new Date().getFullYear();

    let total = list.length;

    let todayTotal =
    list.filter(a => a.createdDate === today).length;

    let monthTotal =
    list.filter(function(a){

        let d = new Date(a.createdDate);

        return d.getMonth() === month &&
               d.getFullYear() === year;

    }).length;

    let pending =
    list.filter(a => a.status === "Pending").length;

    let approved =
    list.filter(a => a.status === "Approved").length;

    let rejected =
    list.filter(a => a.status === "Rejected").length;

    document.getElementById("totalAppointments").innerHTML = total;

    document.getElementById("todayAppointments").innerHTML = todayTotal;

    document.getElementById("monthAppointments").innerHTML = monthTotal;

    document.getElementById("pendingAppointments").innerHTML = pending;

    document.getElementById("approvedAppointments").innerHTML = approved;

    document.getElementById("rejectedAppointments").innerHTML = rejected;

}
function dailyReport(){

    let list =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let today =
    new Date().toISOString().split("T")[0];

    let todayList =
    list.filter(a => a.createdDate === today);

    let html = `
    <h3>📅 Daily Report</h3>

    <table border="1" width="100%">

    <tr>
    <th>No</th>
    <th>Appointment No</th>
    <th>Name</th>
    <th>Phone</th>
    <th>Service</th>
    <th>Status</th>
    </tr>
    `;

    todayList.forEach(function(a,index){

        html += `
        <tr>
        <td>${index+1}</td>
        <td>${a.number}</td>
        <td>${a.name}</td>
        <td>${a.phone}</td>
        <td>${a.service}</td>
        <td>${a.status}</td>
        </tr>
        `;

    });

    html += "</table>";

    document.getElementById("reportArea").innerHTML = html;

}
function monthlyReport(){

    let list =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let now = new Date();

    let month = now.getMonth();

    let year = now.getFullYear();

    let monthList =
    list.filter(function(a){

        let d = new Date(a.createdDate);

        return d.getMonth() === month &&
               d.getFullYear() === year;

    });

    let html = `
    <h3>📆 Monthly Report</h3>

    <table border="1" width="100%">

    <tr>
    <th>No</th>
    <th>Appointment No</th>
    <th>Name</th>
    <th>Phone</th>
    <th>Service</th>
    <th>Status</th>
    </tr>
    `;

    monthList.forEach(function(a,index){

        html += `
        <tr>
        <td>${index+1}</td>
        <td>${a.number}</td>
        <td>${a.name}</td>
        <td>${a.phone}</td>
        <td>${a.service}</td>
        <td>${a.status}</td>
        </tr>
        `;

    });

    html += "</table>";

    document.getElementById("reportArea").innerHTML = html;

}
// ===============================
// Service Statistics
// ===============================
function serviceReport(){

    let list =
    JSON.parse(localStorage.getItem("appointments")) || [];

    let report = {};

    list.forEach(function(a){

        if(report[a.service]){

            report[a.service]++;

        }else{

            report[a.service] = 1;

        }

    });

    let table =
    document.getElementById("serviceReport");

    table.innerHTML = "";

    for(let service in report){

        table.innerHTML += `
        <tr>
            <td>${service}</td>
            <td>${report[service]}</td>
        </tr>
        `;

    }

}
