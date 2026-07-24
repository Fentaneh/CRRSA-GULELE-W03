// ======================================
// CRRSA Gulele Woreda 03
// Global Language System
// Default Language: English
// Supported:
// English / Amharic / Afaan Oromoo
// ======================================


// ================= CHANGE LANGUAGE =================

function changeLanguage(){

    let lang = document.getElementById("language").value;

    localStorage.setItem("language", lang);

    translatePage();

}



// ================= SAFE TEXT FUNCTION =================

function setText(id,text){

    let element = document.getElementById(id);

    if(element){

        element.innerHTML = text;

    }

}



// ================= MAIN TRANSLATION =================

function translatePage(){


let lang = localStorage.getItem("language") || "en";


// keep dropdown selected

let selector = document.getElementById("language");

if(selector){

    selector.value = lang;

}




// ======================================
// HEADER
// ======================================


if(lang === "en"){


document.title =
"Civil Registration and Residency Service";


setText(
"officeTitle",
"AACRRSA Gulele Woreda 03"
);


setText(
"pageTitle",
"Civil Registration and Residency Service"
);


}



else if(lang === "am"){


document.title =
"የሲቪል ምዝገባ እና የነዋሪነት አገልግሎት";


setText(
"officeTitle",
"AACRRSA ጉለሌ ወረዳ 03"
);


setText(
"pageTitle",
"የሲቪል ምዝገባ እና የነዋሪነት አገልግሎት"
);


}



else if(lang === "om"){


document.title =
"Tajaajila Galmee Lammummaa fi Jiraattotaa";


setText(
"officeTitle",
"AACRRSA Aanaa Gulele 03"
);


setText(
"pageTitle",
"Tajaajila Galmee Lammummaa fi Jiraattotaa"
);


}




// ======================================
// VITAL EVENTS
// ======================================


if(lang === "en"){


setText(
"heading",
"Vital Events Registration"
);


setText(
"birthBtn",
"Birth Registration"
);


setText(
"marriageBtn",
"Marriage Registration"
);


setText(
"divorceBtn",
"Divorce Registration"
);


setText(
"deathBtn",
"Death Registration"
);


setText(
"adoptionBtn",
"Adoption Registration"
);


}



else if(lang === "am"){


setText(
"heading",
"የወሳኝ ኩነት ምዝገባ"
);


setText(
"birthBtn",
"የልደት ምዝገባ"
);


setText(
"marriageBtn",
"የጋብቻ ምዝገባ"
);


setText(
"divorceBtn",
"የፍቺ ምዝገባ"
);


setText(
"deathBtn",
"የሞት ምዝገባ"
);


setText(
"adoptionBtn",
"የጉዲፈቻ ምዝገባ"
);


}



else if(lang === "om"){


setText(
"heading",
"Galmee Taateewwan Murteessoo"
);


setText(
"birthBtn",
"Galmee Dhalootaa"
);


setText(
"marriageBtn",
"Galmee Gaa'elaa"
);


setText(
"divorceBtn",
"Galmee Hiikkaa"
);


setText(
"deathBtn",
"Galmee Du'aa"
);


setText(
"adoptionBtn",
"Galmee Guddifachaa"
);


}


// ================= VITAL EVENTS =================

function translateVitalEvents(lang){


if(lang=="en"){

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



else if(lang=="am"){

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


}



// ================= HOME SERVICES =================


function translateServices(lang){


if(lang=="en"){


setText("residentBtn",
"Resident Service");

setText("printingBtn",
"Printing Service");

setText("remarkBtn",
"Remark Service");

setText("onlineIdBtn",
"Online ID Service");


}



else if(lang=="am"){


setText("residentBtn",
"የነዋሪ አገልግሎት");

setText("printingBtn",
"የህትመት አገልግሎት");

setText("remarkBtn",
"የማስታወሻ አገልግሎት");

setText("onlineIdBtn",
"የመስመር ላይ መታወቂያ");


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

// ======================================
// MARRIAGE PAGE TRANSLATION
// ======================================


function translateMarriage(lang){



// ================= TITLE =================


if(lang=="en"){


setText(
"serviceTitle",
"Marriage Registration"
);


setText(
"civilTitle",
"1. Requirements for New (Civil/National) Marriage Registration"
);


setText(
"noteTitle",
"Notes"
);


setText(
"traditionalTitle",
"2. Requirements for Customary / Religious Marriage Registration"
);


}



else if(lang=="am"){


setText(
"serviceTitle",
"የጋብቻ ምዝገባ"
);


setText(
"civilTitle",
"1. አዲስ /ብሔራዊ/ ተጋቢዎች የሚያስፈልጉ ቅድመ ሁኔታዎች"
);


setText(
"noteTitle",
"ማሳሰቢያ"
);


setText(
"traditionalTitle",
"2. ባህላዊ /ኃይማኖታዊ ጋብቻ ምዝገባ"
);


}



else if(lang=="om"){


setText(
"serviceTitle",
"Galmee Fuudhaa fi Heerumaa"
);


setText(
"civilTitle",
"1. Ulaagaalee Fuudhaa fi Heeruma Haaraa"
);


setText(
"noteTitle",
"Hubachiisa"
);


setText(
"traditionalTitle",
"2. Ulaagaalee Galmee Fuudhaa fi Heeruma Aadaa / Amantii"
);


}




// ================= CIVIL REQUIREMENTS =================



if(lang=="en"){


setText(
"civilReq1",
"At least one applicant must be a resident of our Woreda."
);


setText(
"civilReq2",
"The ID card must be linked with Fayda."
);


setText(
"civilReq3",
"Applicants outside Addis Ababa must present renewed ID and Fayda."
);


setText(
"civilReq4",
"Both applicants must appear with renewed ID card or passport."
);


setText(
"civilReq5",
"Marriage notice will be posted online for 15 days."
);


setText(
"civilReq6",
"Both applicants must present original ID or passport on marriage day."
);


setText(
"civilReq7",
"Four witnesses must appear with valid ID cards or passports."
);


}



else if(lang=="am"){


setText(
"civilReq1",
"ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።"
);


setText(
"civilReq2",
"መታወቂያ ከፋይዳ ጋር የተሳሰረ መሆን አለበት።"
);


setText(
"civilReq3",
"ከአዲስ አበባ ውጭ የሆኑ ሰዎች የታደሰ መታወቂያ እና ፋይዳ ማቅረብ አለባቸው።"
);


setText(
"civilReq4",
"ሁለቱም ተጋቢዎች የታደሰ መታወቂያ ወይም ፓስፖርት ይዘው መቅረብ አለባቸው።"
);


setText(
"civilReq5",
"የጋብቻ ማስታወቂያ ለ15 ቀናት Online ይለጠፋል።"
);


setText(
"civilReq6",
"በጋብቻ ቀን ዋና መታወቂያ ወይም ፓስፖርት ማቅረብ አለባቸው።"
);


setText(
"civilReq7",
"4 ምስክሮች በአካል መቅረብ አለባቸው።"
);


}



else if(lang=="om"){


setText(
"civilReq1",
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba."
);


setText(
"civilReq2",
"Waraqaan eenyummaa Faayidaa waliin walqabatee ta'uu qaba."
);


setText(
"civilReq3",
"Namoonni Finfinnee ala jiraatan eenyummaa haarawaa fi Faayidaa dhiyeessuu qabu."
);


setText(
"civilReq4",
"Namoonni lamaan eenyummaa ykn paaspoortii qabatanii qaamaan dhiyaachuu qabu."
);


setText(
"civilReq5",
"Beeksisni fuudhaa fi heerumaa guyyaa 15f online irratti maxxanfama."
);


setText(
"civilReq6",
"Guyyaa fuudhaa fi heerumaa eenyummaa isaanii dhiyeessuu qabu."
);


setText(
"civilReq7",
"Ragaa baatota afur dhiyeessuu qabu."
);


}


}

// ======================================
// NOTES TRANSLATION
// ======================================


function translateNotes(lang){



if(lang=="en"){


setText(
"note1",
"If a previous Single Status Certificate was issued, it must be returned on marriage day."
);


setText(
"note2",
"If a Divorce Certificate exists, it must be returned on marriage day."
);


setText(
"note3",
"A divorced woman cannot marry another person before six months after divorce."
);


setText(
"note4",
"Addis Ababa resident witnesses must have ID cards linked with Fayda."
);


setText(
"note5",
"These requirements do not apply to customary or religious marriage."
);


}



else if(lang=="am"){


setText(
"note1",
"ከዚህ በፊት የወጣ ያላገባ/ች ሰርተፍኬት ካለ በጋብቻው ቀን ይመለሳል።"
);


setText(
"note2",
"የፍቺ ሰርተፍኬት ካለ በጋብቻው ቀን ይመለሳል።"
);


setText(
"note3",
"ፍቺ የፈጸመች ሴት ከ6 ወር በፊት ከሌላ ሰው ጋር ጋብቻ መፈጸም አትችልም።"
);


setText(
"note4",
"የአዲስ አበባ ነዋሪ ምስክሮች መታወቂያቸው ከፋይዳ ጋር የተሳሰረ መሆን አለበት።"
);


setText(
"note5",
"ይህ መመሪያ የባህል ወይም የኃይማኖት ጋብቻን አይመለከትም።"
);


}



else if(lang=="om"){


setText(
"note1",
"Ragaan nama hin fuune duraan kenname yoo jiraate guyyaa galmee gaa'elaa irratti deebi'a."
);


setText(
"note2",
"Ragaan hiikkaa gaa'elaa yoo jiraate guyyaa galmee gaa'elaa irratti deebi'a."
);


setText(
"note3",
"Dubartiin hiikkaa booda ji'a jaha dura nama biraa waliin heerumuu hin dandeessu."
);


setText(
"note4",
"Ragaa baatonni Finfinnee jiraatan eenyummaan isaanii Faayidaa waliin walqabatee ta'uu qaba."
);


setText(
"note5",
"Qajeelfamni kun gaa'ela aadaa ykn amantii irratti hin hojii irra oolu."
);


}


}




// ======================================
// BACK BUTTON
// ======================================


function translateBackButton(lang){


if(lang=="en"){


setText(
"backButton",
"⬅ Back to Vital Events"
);


}



else if(lang=="am"){


setText(
"backButton",
"⬅ ወደ ወሳኝ ኩነት ምዝገባ ተመለስ"
);


}



else if(lang=="om"){


setText(
"backButton",
"⬅ Gara Galmee Taateewwan Murteessaa Deebi'i"
);


}


}




// ======================================
// TRADITIONAL MARRIAGE REQUIREMENTS
// ======================================


function translateTraditionalMarriage(lang){


if(lang=="en"){


setText(
"traditionalTitle",
"2. Requirements for Customary / Religious Marriage Registration"
);


setText(
"tradReq1",
"At least one applicant must be a resident of our Woreda."
);


setText(
"tradReq2",
"The original customary or religious marriage evidence must be presented."
);


setText(
"tradReq3",
"If the original document is lost, police evidence and proof showing the marriage year must be presented."
);


setText(
"tradReq4",
"Husband and wife must provide renewed ID card or passport (original and copy)."
);


setText(
"tradReq5",
"Husband and wife must provide two 3×4 photographs."
);


setText(
"tradReq6",
"Four witnesses must appear with valid ID cards or passports."
);


setText(
"tradReq7",
"Children of the couple cannot be witnesses."
);


setText(
"tradReq8",
"ID card must be linked with Fayda. Applicants outside Addis Ababa must provide Fayda."
);


}

else if(lang=="am"){


setText(
"traditionalTitle",
"2. ባህላዊ /ኃይማኖታዊ ጋብቻ ምዝገባ"
);


setText(
"tradReq1",
"ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።"
);


setText(
"tradReq2",
"የባህል ወይም የኃይማኖት ጋብቻ ዋና ማስረጃ ማቅረብ አለበት።"
);


setText(
"tradReq3",
"ዋናው ማስረጃ ከጠፋ የፖሊስ ማስረጃ እና የተጋቡበትን ዓመት የሚገልጽ ማስረጃ ማቅረብ አለበት።"
);


setText(
"tradReq4",
"ባልና ሚስት የታደሰ መታወቂያ ወይም ፓስፖርት (ዋናና ኮፒ) ማቅረብ አለባቸው።"
);


setText(
"tradReq5",
"ባልና ሚስት 2 የ3×4 ፎቶ ማቅረብ አለባቸው።"
);


setText(
"tradReq6",
"4 ምስክሮች በታደሰ መታወቂያ ወይም ፓስፖርት በአካል መቅረብ አለባቸው።"
);


setText(
"tradReq7",
"የተጋቢዎች ልጆች ምስክር መሆን አይችሉም።"
);


setText(
"tradReq8",
"መታወቂያ ከፋይዳ ጋር የተሳሰረ መሆን አለበት።"
);


}



else if(lang=="om"){


setText(
"traditionalTitle",
"2. Ulaagaalee Galmee Fuudhaa fi Heeruma Aadaa / Amantii"
);


setText(
"tradReq1",
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba."
);


setText(
"tradReq2",
"Ragaa fuudhaa fi heeruma aadaa ykn amantii isa jalqabaa dhiyeessuu qabu."
);


setText(
"tradReq3",
"Ragaan jalqabaa yoo bade ragaa poolisii fi ragaa waggaa fuudhaa fi heerumaa ibsu dhiyeessuu qabu."
);


setText(
"tradReq4",
"Abbaa manaa fi haati manaa eenyummaa ykn paaspoortii haarawaa dhiyeessuu qabu."
);


setText(
"tradReq5",
"Suuraa 3×4 lama dhiyeessuu qabu."
);


setText(
"tradReq6",
"Ragaa baatota afur eenyummaa waliin qaamaan dhiyaachuu qabu."
);


setText(
"tradReq7",
"Ijoolleen isaanii ragaa baatuu ta'uu hin danda'an."
);


setText(
"tradReq8",
"Eenyummaan Faayidaa waliin walqabatee ta'uu qaba."
);


}


}



// ======================================
// PAGE LOAD
// DEFAULT LANGUAGE = ENGLISH
// ======================================


window.onload=function(){


let savedLanguage = localStorage.getItem("language");


// Clear old wrong saved language once
// Remove this line after first test if needed
// localStorage.removeItem("language");


if(!savedLanguage){

savedLanguage="en";

localStorage.setItem(
"language",
"en"
);

}



let selector=document.getElementById("language");


if(selector){

selector.value=savedLanguage;

}



translatePage();



};






