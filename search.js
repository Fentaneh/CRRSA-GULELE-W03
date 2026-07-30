// ======================================
// CRRSA Gulele Woreda 03
// Search System
// Amharic / English / Afaan Oromoo
// ======================================


const services = [

{
am:"የልደት ምዝገባ",
en:"Birth Registration",
om:"Galmee Dhalootaa",
file:"birth.html"
},

{
am:"የመስመር ላይ መታወቂያ",
en:"Online ID",
om:"ID Karaa Interneetii",
url:"https://portal.aacrrsa.gov.et"
},

{
am:"የጋብቻ ምዝገባ",
en:"Marriage Registration",
om:"Galmee Gaa'elaa",
file:"marriage.html"
},

{
am:"የፍቺ ምዝገባ",
en:"Divorce Registration",
om:"Galmee Hiikkaa",
file:"divorce.html"
},

{
am:"የሞት ምዝገባ",
en:"Death Registration",
om:"Galmee Du'aa",
file:"death.html"
},

{
am:"የጉዲፈቻ ምዝገባ",
en:"Adoption Registration",
om:"Galmee Guddifachaa",
file:"adoption.html"
},

{
am:"ነዋሪ አገልግሎት",
en:"Resident Service",
om:"Tajaajila Jiraataa",
file:"resident.html"
},

{
am:"ያላገባ ማስረጃ",
en:"Single Status Certificate",
om:"Ragaa Haala Qeenxee",
file:"single-status.html"
}

];


// OPEN PAGE

function openService(file,url){

if(url){

window.open(url,"_blank");

}

else if(file){

window.location.href=file;

}

else{

alert("Page not found");

}

}



// SEARCH

function searchWebsite(){


let text=document
.getElementById("searchInput")
.value
.toLowerCase()
.trim();


let result=document.getElementById("searchResult");


result.innerHTML="";


let lang = localStorage.getItem("language") || "am";


let buttonText={
am:"ክፈት",
en:"Open",
om:"Bani"
};



if(text==""){

result.innerHTML =
"Please type search word / የሚፈልጉትን ይጻፉ / Maal barbaaddu barreessi";

return;

}


let found=false;



services.forEach(function(service){


if(

service.am.toLowerCase().includes(text) ||

service.en.toLowerCase().includes(text) ||

service.om.toLowerCase().includes(text)

){


found=true;


let title;


if(lang=="am"){

title=service.am;

}

else if(lang=="om"){

title=service.om;

}

else{

title=service.en;

}



result.innerHTML += `

<div class="search-card">

<h3>${title}</h3>


<button onclick="openService('${service.file || ""}','${service.url || ""}')">

${buttonText[lang]}

</button>


</div>

`;

}


});



if(!found){


result.innerHTML=

`
<p>
Service not found<br>
አገልግሎት አልተገኘም<br>
Tajaajilli hin argamne
</p>
`;

}


}
