// ======================================
// CRRSA Gulele Woreda 03
// Website Search System
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
am:"መሸኛ",
en:"Transfer Letter",
om:"Xalayaa Dabarsaa",
file:"transfer-letter.html"
},
{
am:"የነዋሪነት ማረጋገጫ",
en:"Resident Verification Service",
om:"Tajaajila Mirkaneessa Jiraataa",
file:"resident-service.html"
},
{
am:"የሕይወት ማረጋገጫ",
en:"Proof of Life",
om:"Ragaa Jiraachuu",
file:"proof-of-life.html"
},
    
{
am:"አስተያየት",
en:"Feedback",
om:"Yaada",
url:"https://docs.google.com/forms/d/e/1FAIpQLSeX2m503_AdDI42Bw4c350LB5ptvUTVhZOXCPHUPVmIE2nRQA/viewform"
},
    
{
am:"የጥሪ ማዕከል",
en:"Call Center",
om:"Wiirtuu Bilbilaa",
url:"tel:7533"
}, 
{
am:"አድራሻ",
en:"Location GPS",
om:"Teessoo GPS",
url:"https://maps.app.goo.gl/STf4Zk87Hc1x2rY56"
},    
    
{
am:"ያግኙን",
en:"Contact",
om:"Nu Qunnamaa",
file:"contact.html"
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





// SEARCH FUNCTION

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


let am = service.am.toLowerCase();

let en = service.en.toLowerCase();

let om = service.om.toLowerCase();



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



<button onclick="openService('${service.file || ""}','${service.url || ""}')">

Open / ክፈት / Bani

</button>



</div>


`;

}


});





if(found==false){


result.innerHTML = `

<p>

Service not found<br>

አገልግሎት አልተገኘም<br>

Tajaajilli hin argamne

</p>

`;

}


}
