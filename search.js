// ======================================
// CRRSA Website Search System
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



// OPEN SERVICE

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


// get current language every search

let lang = localStorage.getItem("language") || "am";


let buttonText={

am:"ክፈት",

en:"Open",

om:"Bani"

};



let text =
document.getElementById("searchInput")
.value
.toLowerCase()
.trim();



let result =
document.getElementById("searchResult");


result.innerHTML="";



if(text==""){

result.innerHTML=
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

${buttonText[lang]}

</button>



</div>


`;

}


});



if(!found){


result.innerHTML=`

<p>

Service not found<br>

አገልግሎት አልተገኘም<br>

Tajaajilli hin argamne

</p>

`;

}


}
