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



let number =
"CRRSA-" + Math.floor(100000 + Math.random()*900000);



document.getElementById("appointmentResult").innerHTML = `

<h2>✅ Appointment Successful</h2>

<p>
Appointment Number:
<b>${number}</b>
</p>

<p>
Name: ${name}
</p>

<p>
Service: ${service}
</p>

<p>
Date: ${date}
</p>

<p>
Please save your appointment number.
</p>

`;



localStorage.setItem(
"appointmentNumber",
number
);


}
