// ======================================
// CRRSA Gulele Woreda 03
// Global 3 Language System
// Default Language: English
// Amharic / English / Afaan Oromoo
// ======================================


function changeLanguage(){

    let lang = document.getElementById("language").value;

    localStorage.setItem("language", lang);

    translatePage();

}



// Safe Text Function

function setText(id,text){

    let element = document.getElementById(id);

    if(element){

        element.innerHTML = text;

    }

}



// Translate Page

function translatePage(){


let lang = localStorage.getItem("language") || "en";


// keep dropdown selected

let selector=document.getElementById("language");

if(selector){

    selector.value = lang;

}




// ================= HEADER =================


if(lang=="am"){


setText("officeTitle",
"AACRRSA ጉለሌ ወረዳ 03");


setText("pageTitle",
"የሲቪል ምዝገባ እና የነዋሪነት አገልግሎት");


}



else if(lang=="en"){


setText("officeTitle",
"AACRRSA Gulele Woreda 03");


setText("pageTitle",
"Civil Registration and Residency Service");


}



else if(lang=="om"){


setText("officeTitle",
"AACRRSA Aanaa Gulele 03");


setText("pageTitle",
"Tajaajila Galmee Lammummaa fi Jiraattotaa");


}





// ================= VITAL EVENTS =================



if(lang=="am"){


setText("heading",
"የወሳኝ ኩነት ምዝገባ");


setText("birthBtn",
"የልደት ምዝገባ");


setText("marriageBtn",
"የጋብቻ ምዝገባ");


setText("divorceBtn",
"የፍቺ ምዝገባ");


setText("deathBtn",
"የሞት ምዝገባ");


setText("adoptionBtn",
"የጉዲፈቻ ምዝገባ");


}




else if(lang=="en"){


setText("heading",
"Vital Events Registration");


setText("birthBtn",
"Birth Registration");


setText("marriageBtn",
"Marriage Registration");


setText("divorceBtn",
"Divorce Registration");


setText("deathBtn",
"Death Registration");


setText("adoptionBtn",
"Adoption Registration");


}




else if(lang=="om"){


setText("heading",
"Galmee Taateewwan Murteessoo");


setText("birthBtn",
"Galmee Dhalootaa");


setText("marriageBtn",
"Galmee Gaa'elaa");


setText("divorceBtn",
"Galmee Hiikkaa");


setText("deathBtn",
"Galmee Du'aa");


setText("adoptionBtn",
"Galmee Guddifachaa");


}





// ================= HOME SERVICES =================



if(lang=="am"){


setText("residentBtn",
"የነዋሪ አገልግሎት");


setText("printingBtn",
"የህትመት አገልግሎት");


setText("remarkBtn",
"ማስታወሻ አገልግሎት");


setText("onlineIdBtn",
"የመስመር ላይ መታወቂያ");


}




else if(lang=="en"){


setText("residentBtn",
"Resident Service");


setText("printingBtn",
"Printing Service");


setText("remarkBtn",
"Remark Service");


setText("onlineIdBtn",
"Online ID");


}




else if(lang=="om"){


setText("residentBtn",
"Tajaajila Jiraataa");


setText("printingBtn",
"Tajaajila Maxxansaa");


setText("remarkBtn",
"Tajaajila Yaada Dabalataa");


setText("onlineIdBtn",
"ID Karaa Interneetii");


}



}



// ================= LOAD LANGUAGE =================


window.onload=function(){


let savedLanguage = localStorage.getItem("language");


// First time = English

if(!savedLanguage){

    savedLanguage="en";

    localStorage.setItem("language","en");

}



let selector=document.getElementById("language");


if(selector){

    selector.value=savedLanguage;

}



translatePage();


};
