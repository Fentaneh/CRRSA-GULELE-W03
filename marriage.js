function changeLanguage(){

let lang=document.getElementById("language").value;

localStorage.setItem("language",lang);


// TITLE
if(lang=="am"){

document.title="የጋብቻ ምዝገባ";

setText("officeTitle","CRRSA ጉለሌ ወረዳ 03");
setText("pageTitle","የጋብቻ ምዝገባ አገልግሎት");
setText("serviceTitle","የጋብቻ ምዝገባ");

setText("civilTitle",
"1. አዲስ /ብሔራዊ/ ተጋቢዎች የሚያስፈልጉ ቅድመ ሁኔታዎች");


setCivilAm();

setNotesAm();

setTraditionalAm();

setText("backButton",
"⬅ ወደ ወሳኝ ኩነት ምዝገባ ተመለስ");

}



else if(lang=="en"){

document.title="Marriage Registration";

setText("officeTitle","CRRSA Gulele Woreda 03");
setText("pageTitle","Marriage Registration Service");
setText("serviceTitle","Marriage Registration");

setText("civilTitle",
"1. Requirements for New (Civil/National) Marriage Registration");


setCivilEn();

setNotesEn();

setTraditionalEn();


setText("backButton",
"⬅ Back to Vital Events");

}



else if(lang=="om"){

document.title="Galmee Fuudhaa fi Heerumaa";

setText("officeTitle",
"CRRSA Aanaa Gulleellee 03");

setText("pageTitle",
"Tajaajila Galmee Fuudhaa fi Heerumaa");

setText("serviceTitle",
"Galmee Fuudhaa fi Heerumaa");


setText("civilTitle",
"1. Ulaagaalee Fuudhaa fi Heeruma Haaraa");


setCivilOm();

setNotesOm();

setTraditionalOm();


setText("backButton",
"⬅ Gara Galmee Taateewwan Murteessaa Deebi'i");

}


}



// SAFE TEXT FUNCTION

function setText(id,text){

let e=document.getElementById(id);

if(e){
e.innerHTML=text;
}

}



// ================= CIVIL AM =================

function setCivilAm(){

setText("civilReq1",
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba.");

setText("civilReq2",
"ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።");

setText("civilReq3",
"ከአዲስ አበባ ውጭ የሆኑ የታደሰ መታወቂያ እና ፋይዳ ማቅረብ አለባቸው።");

setText("civilReq4",
"ሁለቱም ተጋቢዎች የታደሰ መታወቂያ ወይም ፓስፖርት በአካል መቅረብ አለባቸው።");

setText("civilReq5",
"የጋብቻ ማስታወቂያ ለ15 ቀናት Online ይለጠፋል።");

setText("civilReq6",
"በጋብቻ ቀን ዋና መታወቂያ ወይም ፓስፖርት ማቅረብ አለባቸው።");

setText("civilReq7",
"4 ምስክሮች በአካል መቅረብ አለባቸው።");

}



// ================= EN =================

function setCivilEn(){

setText("civilReq1",
"At least one applicant must be a resident of our Woreda.");

setText("civilReq2",
"The ID card must be linked with Fayda.");

setText("civilReq3",
"Applicants outside Addis Ababa must present renewed ID and Fayda.");

setText("civilReq4",
"Both applicants must appear with renewed ID card or passport.");

setText("civilReq5",
"Marriage notice will be posted online for 15 days.");

setText("civilReq6",
"Both applicants must present original ID or passport on marriage day.");

setText("civilReq7",
"Four witnesses must appear with valid ID cards or passports.");

}



// ================= OROMO =================

function setCivilOm(){

setText("civilReq1",
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba.");

setText("civilReq2",
"Waraqaan eenyummaa Faayidaa waliin walqabatee ta'uu qaba.");

setText("civilReq3",
"Namoonni Finfinnee ala jiraatan eenyummaa haarawaa fi Faayidaa dhiyeessuu qabu.");

setText("civilReq4",
"Namoonni lamaan eenyummaa ykn paaspoortii qabatanii qaamaan dhiyaachuu qabu.");

setText("civilReq5",
"Beeksisni fuudhaa fi heerumaa guyyaa 15f online irratti maxxanfama.");

setText("civilReq6",
"Guyyaa fuudhaa fi heerumaa eenyummaa isaanii dhiyeessuu qabu.");

setText("civilReq7",
"Ragaa baatota afur dhiyeessuu qabu.");

}



// NOTES

function setNotesAm(){

setText("noteTitle","ማሳሰቢያ");

}

function setNotesEn(){

setText("noteTitle","Notes");

}

function setNotesOm(){

setText("noteTitle","Hubachiisa");

}



// TRADITIONAL

function setTraditionalAm(){

setText("traditionalTitle",
"2. ባህላዊ /ኃይማኖታዊ ጋብቻ");

}


function setTraditionalEn(){

setText("traditionalTitle",
"2. Requirements for Customary / Religious Marriage");

}


function setTraditionalOm(){

setText("traditionalTitle",
"2. Ulaagaalee Fuudhaa fi Heeruma Aadaa / Amantii");

}



// LOAD SAVED LANGUAGE

window.onload=function(){

let lang=localStorage.getItem("language");

if(lang){

document.getElementById("language").value=lang;

changeLanguage();

}

};
