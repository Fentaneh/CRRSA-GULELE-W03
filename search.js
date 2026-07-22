// ======================================
// CRRSA Gulele Woreda 03
// Full Website Search System
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
file:"marriage-registration.html"
},

{
am:"የፍቺ ምዝገባ",
en:"Divorce Registration",
om:"Galmee Hiikkaa",
file:"divorce-registration.html"
},

{
am:"የሞት ምዝገባ",
en:"Death Registration",
om:"Galmee Du'aa",
file:"death-registration.html"
},

{
am:"የጉዲፈቻ ምዝገባ",
en:"Adoption Registration",
om:"Galmee Guddifachaa",
file:"adoption-registration.html"
},

{
am:"መሸኛ አገልግሎት",
en:"Transfer Letter Service",
om:"Tajaajila Xalayaa Ce'umsaa",
file:"transfer-letter.html"
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
},

{
am:"የሕይወት ማረጋገጫ",
en:"Proof of Life Certificate",
om:"Ragaa Jiraachuu",
file:"proof-of-life.html"
},

{
am:"የነዋሪነት ማረጋገጫ",
en:"Resident Verification",
om:"Mirkaneessa Jiraataa",
file:"resident-verification.html"
}

];

function openService(file,url){

    if(url){
        window.location.href = url;
    }
    else if(file){
        window.location.href = file;
    }

}
// Search Function

function searchWebsite(){


let text =
document.getElementById("searchInput")
.value
.toLowerCase()
.trim();



let result =
document.getElementById("searchResult");


result.innerHTML="";



if(text==""){

result.innerHTML =
"Please type search word / የሚፈልጉትን ይጻፉ / Maal barbaaddu barreessi";

return;

}



let found=false;



services.forEach(function(service){



let am =
service.am.toLowerCase();

let en =
service.en.toLowerCase();

let om =
service.om.toLowerCase();


if(
am.includes(text) ||
en.includes(text) ||
om.includes(text)
){


found=true;

result.innerHTML += `

<div class="search-card">

<h3>${service.en}</h3>

<p>${service.am}</p>

<p>${service.om}</p>

console.log(service.url);

<button onclick="openService('${service.file || ""}','${service.url || ""}')">
Open / ክፈት / Bani
</button>

</div>

`;

}


});



if(found==false){


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
