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


loadAppointments();



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


}


}
