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


<hr>


<p>
Please keep this number.
</p>


</div>


`;



document.getElementById("printButton").style.display="block";



localStorage.setItem(
"appointmentNumber",
number
);


}




function printAppointment(){

let content =
document.getElementById("printArea").innerHTML;


let old =
document.body.innerHTML;


document.body.innerHTML = content;


window.print();


document.body.innerHTML = old;


}
