// ===============================
// CRRSA Gulele Woreda 03
// 3 Language System
// Amharic / English / Afaan Oromoo
// ===============================


// Change language from dropdown
function changeLanguage(){

    let lang = document.getElementById("language").value;

    localStorage.setItem("language", lang);

    translatePage();

}



// Load saved language
function translatePage(){

    let lang = localStorage.getItem("language") || "am";


    // Keep dropdown selected
    let selector = document.getElementById("language");

    if(selector){
        selector.value = lang;
    }



// =====================
// HOME / ALL PAGES
// =====================

let officeTitle = document.getElementById("officeTitle");
let pageTitle = document.getElementById("pageTitle");



if(lang=="am"){

// Amharic

if(officeTitle)
officeTitle.innerHTML="AACRRSA ወረዳ 03";


if(pageTitle)
pageTitle.innerHTML="የሲቪል ምዝገባ እና የነዋሪነት አገልግሎት";



}


else if(lang=="en"){

// English

if(officeTitle)
officeTitle.innerHTML="AACRRSA Woreda 03";


if(pageTitle)
pageTitle.innerHTML="Civil Registration and Residency Service";


}



else if(lang=="om"){

// Afaan Oromoo

if(officeTitle)
officeTitle.innerHTML="AACRRSA Aanaa 03";


if(pageTitle)
pageTitle.innerHTML="Tajaajila Galmee Lammummaa fi Jiraattotaa";


}




// =====================
// VITAL EVENTS BUTTONS
// =====================


let heading=document.getElementById("heading");

if(heading){


if(lang=="am"){

heading.innerHTML="የወሳኝ ኩነት ምዝገባ";

document.getElementById("birthBtn").innerHTML=
"የልደት ምዝገባ";


document.getElementById("marriageBtn").innerHTML=
"የጋብቻ ምዝገባ";


document.getElementById("divorceBtn").innerHTML=
"የፍቺ ምዝገባ";


document.getElementById("adoptionBtn").innerHTML=
"የጉዲፈቻ ምዝገባ";


document.getElementById("deathBtn").innerHTML=
"የሞት ምዝገባ";

}



else if(lang=="en"){


heading.innerHTML="Vital Events Registration";


document.getElementById("birthBtn").innerHTML=
"Birth Registration";


document.getElementById("marriageBtn").innerHTML=
"Marriage Registration";


document.getElementById("divorceBtn").innerHTML=
"Divorce Registration";


document.getElementById("adoptionBtn").innerHTML=
"Adoption Registration";


document.getElementById("deathBtn").innerHTML=
"Death Registration";


}



else if(lang=="om"){


heading.innerHTML="Galmee Taateewwan Murteessoo";


document.getElementById("birthBtn").innerHTML=
"Galmee Dhalootaa";


document.getElementById("marriageBtn").innerHTML=
"Galmee Gaa'elaa";


document.getElementById("divorceBtn").innerHTML=
"Galmee Hiikkaa";


document.getElementById("adoptionBtn").innerHTML=
"Galmee Guddifachaa";


document.getElementById("deathBtn").innerHTML=
"Galmee Du'aa";


}


}





}



// Run automatically when page opens

window.onload=function(){

translatePage();

};
