// ======================================
// CRRSA Gulele Woreda 03
// Global Language System
// English Default
// Amharic / English / Afaan Oromoo
// ======================================


// CHANGE LANGUAGE

function changeLanguage(){

    let lang = document.getElementById("language").value;

    localStorage.setItem("language", lang);

    translatePage();

}



// SAFE TEXT FUNCTION

function setText(id,text){

    let element = document.getElementById(id);

    if(element){

        element.innerHTML = text;

    }

}



// MAIN TRANSLATION

function translatePage(){

    let lang = localStorage.getItem("language") || "en";


    let selector = document.getElementById("language");

    if(selector){

        selector.value = lang;

    }



// ================= HEADER =================


if(lang=="en"){


document.title="Civil Registration and Residency Service";


setText(
"officeTitle",
"AACRRSA Gulele Woreda 03"
);


setText(
"pageTitle",
"Civil Registration and Residency Service"
);


}



if(lang=="am"){


document.title="የሲቪል ምዝገባ እና የነዋሪነት አገልግሎት";


setText(
"officeTitle",
"AACRRSA ጉለሌ ወረዳ 03"
);


setText(
"pageTitle",
"የሲቪል ምዝገባ እና የነዋሪነት አገልግሎት"
);


}



if(lang=="om"){


document.title="Tajaajila Galmee Lammummaa fi Jiraattotaa";


setText(
"officeTitle",
"AACRRSA Aanaa Gulele 03"
);


setText(
"pageTitle",
"Tajaajila Galmee Lammummaa fi Jiraattotaa"
);


}



// Next Part:
// Vital Events
// Marriage
// Services

}

// ================= VITAL EVENTS =================


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



if(lang=="om"){


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



if(lang=="am"){


setText("residentBtn",
"የነዋሪ አገልግሎት");


setText("printingBtn",
"የህትመት አገልግሎት");


setText("remarkBtn",
"የማስታወሻ አገልግሎት");


setText("onlineIdBtn",
"የመስመር ላይ መታወቂያ");


}



if(lang=="om"){


setText("residentBtn",
"Tajaajila Jiraataa");


setText("printingBtn",
"Tajaajila Maxxansaa");


setText("remarkBtn",
"Tajaajila Yaada Dabalataa");


setText("onlineIdBtn",
"ID Karaa Interneetii");


}

// ================= MARRIAGE PAGE =================


// TITLE

if(lang=="en"){


setText("serviceTitle",
"Marriage Registration");


setText("civilTitle",
"1. Requirements for New (Civil/National) Marriage Registration");


setText("noteTitle",
"Notes");


setText("traditionalTitle",
"2. Requirements for Customary / Religious Marriage Registration");


}



if(lang=="am"){


setText("serviceTitle",
"የጋብቻ ምዝገባ");


setText("civilTitle",
"1. አዲስ /ብሔራዊ/ ተጋቢዎች የሚያስፈልጉ ቅድመ ሁኔታዎች");


setText("noteTitle",
"ማሳሰቢያ");


setText("traditionalTitle",
"2. ባህላዊ /ኃይማኖታዊ ጋብቻ ምዝገባ");


}



if(lang=="om"){


setText("serviceTitle",
"Galmee Fuudhaa fi Heerumaa");


setText("civilTitle",
"1. Ulaagaalee Fuudhaa fi Heeruma Haaraa");


setText("noteTitle",
"Hubachiisa");


setText("traditionalTitle",
"2. Ulaagaalee Galmee Fuudhaa fi Heeruma Aadaa / Amantii");


}



// ================= NOTES =================


if(lang=="en"){


setText("note1",
"If a previous Single Status Certificate was issued, it must be returned on marriage day.");


setText("note2",
"If a Divorce Certificate exists, it must be returned on marriage day.");


setText("note3",
"A divorced woman cannot marry another person before six months after divorce.");


setText("note4",
"Addis Ababa resident witnesses must have ID cards linked with Fayda.");


setText("note5",
"These requirements do not apply to customary or religious marriage.");


}



if(lang=="am"){


setText("note1",
"ከዚህ በፊት የወጣ ያላገባ/ች ሰርተፍኬት ካለ በጋብቻው ቀን ይመለሳል።");


setText("note2",
"የፍቺ ሰርተፍኬት ካለ በጋብቻው ቀን ይመለሳል።");


setText("note3",
"አንዲት ሴት ፍቺ ከፈጸመች ከ6 ወር በፊት ከሌላ ሰው ጋር ጋብቻ መፈጸም አትችልም።");


setText("note4",
"የአዲስ አበባ ነዋሪ የሆኑ ምስክሮች መታወቂያቸው ከፋይዳ ጋር የተሳሰረ መሆን አለበት።");


setText("note5",
"ይህ መመሪያ የባህል ወይም የኃይማኖት ጋብቻን አይመለከትም።");


}



if(lang=="om"){


setText("note1",
"Ragaan nama hin fuune duraan kenname yoo jiraate guyyaa galmee gaa'elaa irratti deebi'a.");


setText("note2",
"Ragaan hiikkaa gaa'elaa yoo jiraate guyyaa galmee gaa'elaa irratti deebi'a.");


setText("note3",
"Dubartiin hiikkaa booda ji'a jaha dura nama biraa waliin heerumuu hin dandeessu.");


setText("note4",
"Ragaa baatonni Finfinnee jiraatan eenyummaan isaanii Faayidaa waliin walqabatee ta'uu qaba.");


setText("note5",
"Qajeelfamni kun gaa'ela aadaa ykn amantii irratti hin hojii irra oolu.");


}

// ================= BACK BUTTON =================


if(lang=="en"){

setText(
"backButton",
"⬅ Back to Vital Events"
);

}



if(lang=="am"){

setText(
"backButton",
"⬅ ወደ ወሳኝ ኩነት ምዝገባ ተመለስ"
);

}



if(lang=="om"){

setText(
"backButton",
"⬅ Gara Galmee Taateewwan Murteessaa Deebi'i"
);

}



// ================= TRADITIONAL MARRIAGE =================


if(lang=="en"){


setText("tradReq1",
"At least one applicant must be a resident of our Woreda.");


setText("tradReq2",
"The original customary or religious marriage evidence must be presented.");


setText("tradReq3",
"If the original document is lost, police evidence and proof showing the marriage year must be presented.");


setText("tradReq4",
"Husband and wife must provide renewed ID card or passport (original and copy).");


setText("tradReq5",
"Husband and wife must provide two 3×4 photographs.");


setText("tradReq6",
"Four witnesses must appear with valid ID cards or passports.");


setText("tradReq7",
"Children of the couple cannot be witnesses.");


setText("tradReq8",
"ID card must be linked with Fayda. Applicants outside Addis Ababa must provide Fayda.");


}



if(lang=="am"){


setText("tradReq1",
"ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።");


setText("tradReq2",
"የባህል ወይም የኃይማኖት ጋብቻ ዋና ማስረጃ ማቅረብ አለበት።");


setText("tradReq3",
"ዋናው ማስረጃ ከጠፋ የፖሊስ ማስረጃ እና የተጋቡበትን ዓመት የሚገልጽ ማስረጃ ማቅረብ አለበት።");


setText("tradReq4",
"የባልና ሚስት የታደሰ መታወቂያ ወይም ፓስፖርት (ዋናና ኮፒ) ማቅረብ አለባቸው።");


setText("tradReq5",
"የባልና ሚስት 2 ጉርድ 3×4 ፎቶግራፍ ማቅረብ አለባቸው።");


setText("tradReq6",
"4 ምስክሮች በታደሰ መታወቂያ ወይም ፓስፖርት በአካል መቅረብ አለባቸው።");


setText("tradReq7",
"የተጋቢዎች ልጆች ምስክር መሆን አይችሉም።");


setText("tradReq8",
"መታወቂያ ከፋይዳ ጋር የተሳሰረ መሆን አለበት።");


}



if(lang=="om"){


setText("tradReq1",
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba.");


setText("tradReq2",
"Ragaa fuudhaa fi heeruma aadaa ykn amantii isa jalqabaa dhiyeessuu qabu.");


setText("tradReq3",
"Ragaan jalqabaa yoo bade ragaa poolisii fi ragaa waggaa fuudhaa fi heerumaa ibsu dhiyeessuu qabu.");


setText("tradReq4",
"Abbaa manaa fi haati manaa eenyummaa ykn paaspoortii haarawaa dhiyeessuu qabu.");


setText("tradReq5",
"Suuraa 3×4 lama dhiyeessuu qabu.");


setText("tradReq6",
"Ragaa baatota afur eenyummaa waliin qaamaan dhiyaachuu qabu.");


setText("tradReq7",
"Ijoolleen isaanii ragaa baatuu ta'uu hin danda'an.");


setText("tradReq8",
"Eenyummaan Faayidaa waliin walqabatee ta'uu qaba.");


}


}



// ================= PAGE LOAD =================


window.onload=function(){


let savedLanguage = localStorage.getItem("language");


// DEFAULT LANGUAGE = ENGLISH

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
