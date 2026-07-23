// ===============================
// Marriage Language Script
// PART 1
// ===============================

function setText(id, text) {
    let e = document.getElementById(id);
    if (e) e.innerHTML = text;
}

function changeLanguage() {

    let lang = document.getElementById("language").value;

    localStorage.setItem("language", lang);

    if (lang == "am") {

        document.title = "የጋብቻ ምዝገባ";

        setText("officeTitle", "CRRSA ጉለሌ ወረዳ 03");
        setText("pageTitle", "የጋብቻ ምዝገባ አገልግሎት");
        setText("serviceTitle", "የጋብቻ ምዝገባ");

        setText("civilTitle",
        "1. አዲስ /ብሔራዊ/ ተጋቢዎች የሚያስፈልጉ ቅድመ ሁኔታዎች");

        setCivilAm();
        setNotesAm();
        setTraditionalAm();

        setText("backButton",
        "⬅ ወደ ወሳኝ ኩነት ምዝገባ ተመለስ");
    }

    else if (lang == "en") {

        document.title = "Marriage Registration";

        setText("officeTitle", "CRRSA Gulele Woreda 03");
        setText("pageTitle", "Marriage Registration Service");
        setText("serviceTitle", "Marriage Registration");

        setText("civilTitle",
        "1. Requirements for New (Civil/National) Marriage Registration");

        setCivilEn();
        setNotesEn();
        setTraditionalEn();

        setText("backButton",
        "⬅ Back to Vital Events");
    }

    else if (lang == "om") {

        document.title = "Galmee Fuudhaa fi Heerumaa";

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
// ===============================
// CIVIL REQUIREMENTS
// ===============================

// ---------- AMHARIC ----------
function setCivilAm(){

setText("civilReq1","ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።");

setText("civilReq2","መታወቂያ ከፋይዳ ጋር የተሳሰረ መሆን አለበት።");

setText("civilReq3","ከአዲስ አበባ ውጭ የሆኑ የታደሰ መታወቂያ እና ፋይዳ ማቅረብ አለባቸው።");

setText("civilReq4","ሁለቱም ተጋቢዎች የታደሰ መታወቂያ ወይም ፓስፖርት (ዋናና ኮፒ) በአካል መቅረብ አለባቸው።");

setText("civilReq5","ከማመልከቻው ቀጥሎ ለ15 ቀናት የጋብቻ ማስታወቂያ (Online) ይለጠፋል።");

setText("civilReq6","በጋብቻ ቀን ሁለቱም ተጋቢዎች የታደሰ መታወቂያ ወይም ፓስፖርት ዋና ማቅረብ አለባቸው።");

setText("civilReq7","ከሚስት 2 እና ከባል 2 በድምሩ 4 ምስክሮች በታደሰ መታወቂያ ወይም ፓስፖርት በአካል መቅረብ አለባቸው።");

}

// ---------- ENGLISH ----------
function setCivilEn(){

setText("civilReq1","At least one of the applicants must be a resident of our Woreda.");

setText("civilReq2","The ID card must be linked with Fayda.");

setText("civilReq3","Applicants from outside Addis Ababa must present a renewed ID card and Fayda.");

setText("civilReq4","Both applicants must appear in person with renewed ID cards or passports (original and copy).");

setText("civilReq5","A marriage notice will be posted online for 15 days after application submission.");

setText("civilReq6","On the marriage day, both applicants must present their original valid ID cards or passports.");

setText("civilReq7","Four witnesses (2 from the bride's side and 2 from the groom's side) must appear with valid ID cards or passports.");

}

// ---------- AFAAN OROMOO ----------
function setCivilOm(){

setText("civilReq1","Namoota lamaan keessaa tokko jiraataa Aanaa keenyaa ta'uu qaba.");

setText("civilReq2","Waraqaan eenyummaa Faayidaa waliin walqabatee ta'uu qaba.");

setText("civilReq3","Namoonni Finfinnee ala jiraatan eenyummaa haarawaa fi Faayidaa dhiyeessuu qabu.");

setText("civilReq4","Namoonni lamaan eenyummaa ykn paaspoortii haarawaa (isa jalqabaa fi kooppii) qabatanii qaamaan dhiyaachuu qabu.");

setText("civilReq5","Beeksisni fuudhaa fi heerumaa guyyaa 15f online irratti maxxanfama.");

setText("civilReq6","Guyyaa fuudhaa fi heerumaa eenyummaa ykn paaspoortii isaanii isa jalqabaa dhiyeessuu qabu.");

setText("civilReq7","Ragaa baatota afur (lama gama dhiiraa fi lama gama dubartii) eenyummaa ykn paaspoortii qabanii qaamaan dhiyaachuu qabu.");

}
// ===============================
// NOTES
// ===============================

// ---------- AMHARIC ----------
function setNotesAm(){

setText("noteTitle","ማሳሰቢያ");

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

// ---------- ENGLISH ----------
function setNotesEn(){

setText("noteTitle","Notes");

setText("note1",
"If a previous Single Status Certificate was issued, it must be returned on the marriage registration day.");

setText("note2",
"If a Divorce Certificate exists, it must be returned on the marriage registration day.");

setText("note3",
"A divorced woman cannot marry another person before six months have passed after the divorce.");

setText("note4",
"Witnesses who are residents of Addis Ababa must have ID cards linked with Fayda.");

setText("note5",
"These requirements do not apply to marriages performed under religious or customary traditions.");

}

// ---------- AFAAN OROMOO ----------
function setNotesOm(){

setText("noteTitle","Hubachiisa");

setText("note1",
"Ragaan nama hin fuune/hin heerumne yoo jiraate guyyaa galmee gaa'elaatti deebifamuu qaba.");

setText("note2",
"Ragaan hiikkaa gaa'elaa yoo jiraate guyyaa galmee gaa'elaatti deebifamuu qaba.");

setText("note3",
"Dubartiin hiikkaa booda ji'a jaha osoo hin guutin nama biraa waliin heerumuu hin dandeessu.");

setText("note4",
"Ragaa baatonni Finfinnee keessa jiraatan eenyummaan isaanii Faayidaa waliin walqabatee ta'uu qaba.");

setText("note5",
"Ulaagaaleen kun gaa'ela aadaa ykn amantii irratti hin hojjetamu.");

}
// ===============================
// TRADITIONAL / RELIGIOUS MARRIAGE
// ===============================


// ---------- AMHARIC ----------
function setTraditionalAm(){

setText("traditionalTitle",
"2. ባህላዊ /ኃይማኖታዊ ጋብቻ ምዝገባ የሚያስፈልጉ ቅድመ ሁኔታዎች");


setText("tradReq1",
"ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።");


setText("tradReq2",
"የባህል ወይም የኃይማኖት ጋብቻ ዋና ማስረጃ ማቅረብ አለበት።");


setText("tradReq3",
"ዋናው ከጠፋ የፖሊስ ማስረጃ እና የተጋቡበትን ዓመት የሚገልጽ ማስረጃ ማቅረብ አለበት።");


setText("tradReq4",
"የባልና ሚስት የታደሰ መታወቂያ ወይም ፓስፖርት (ዋናና ኮፒ) ማቅረብ አለባቸው።");


setText("tradReq5",
"የባልና ሚስት 2 ጉርድ 3×4 ፎቶግራፍ ማቅረብ አለባቸው።");


setText("tradReq6",
"4 ምስክሮች በታደሰ መታወቂያ ወይም ፓስፖርት በአካል መቅረብ አለባቸው።");


setText("tradReq7",
"የተጋቢዎች ልጆች ምስክር መሆን አይችሉም።");


setText("tradReq8",
"መታወቂያ ከፋይዳ ጋር የተሳሰረ መሆን አለበት፤ ከአዲስ አበባ ውጭ የሆኑ ፋይዳ ማቅረብ አለባቸው።");

}



// ---------- ENGLISH ----------
function setTraditionalEn(){

setText("traditionalTitle",
"2. Requirements for Customary / Religious Marriage Registration");


setText("tradReq1",
"At least one of the applicants must be a resident of our Woreda.");


setText("tradReq2",
"The original customary or religious marriage certificate must be presented.");


setText("tradReq3",
"If the original certificate is lost, a police report and evidence showing the marriage year must be presented.");


setText("tradReq4",
"The husband and wife must provide renewed ID cards or passports (original and copy).");


setText("tradReq5",
"The husband and wife must each provide two recent 3×4 passport-size photographs.");


setText("tradReq6",
"Four witnesses with valid ID cards or passports must appear in person.");


setText("tradReq7",
"The couple's children cannot serve as witnesses.");


setText("tradReq8",
"ID cards must be linked with Fayda. Applicants outside Addis Ababa must provide Fayda.");

}



// ---------- AFAAN OROMOO ----------
function setTraditionalOm(){

setText("traditionalTitle",
"2. Ulaagaalee Galmee Fuudhaa fi Heeruma Aadaa / Amantii");


setText("tradReq1",
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba.");


setText("tradReq2",
"Ragaa fuudhaa fi heeruma aadaa ykn amantii isa jalqabaa dhiyeessuu qabu.");


setText("tradReq3",
"Ragaan jalqabaa yoo bade, ragaa poolisii fi ragaa waggaa fuudhaa fi heerumaa ibsu dhiyeessuu qabu.");


setText("tradReq4",
"Abbaa manaa fi haati manaa eenyummaa ykn paaspoortii haarawaa (isa jalqabaa fi kooppii) dhiyeessuu qabu.");


setText("tradReq5",
"Abbaa manaa fi haati manaa tokkoon tokkoon isaanii suuraa 3×4 lama dhiyeessuu qabu.");


setText("tradReq6",
"Ragaa baatota afur eenyummaa ykn paaspoortii qabanii qaamaan dhiyaachuu qabu.");


setText("tradReq7",
"Ijoolleen isaanii ragaa baatuu ta'uu hin danda'an.");


setText("tradReq8",
"Eenyummaan Faayidaa waliin walqabatee ta'uu qaba. Namoonni Finfinnee ala jiraatan Faayidaa dhiyeessuu qabu.");

}

// ===============================
// BACK BUTTON
// ===============================

function setBackButton(){

let lang = localStorage.getItem("language") || "am";


if(lang=="am"){

setText("backButton",
"⬅ ወደ ወሳኝ ኩነት ምዝገባ ተመለስ");

}


else if(lang=="en"){

setText("backButton",
"⬅ Back to Vital Events");

}


else if(lang=="om"){

setText("backButton",
"⬅ Gara Galmee Taateewwan Murteessaa Deebi'i");

}

}



// ===============================
// LOAD SAVED LANGUAGE
// ===============================


window.onload=function(){

let lang = localStorage.getItem("language") || "am";


let selector = document.getElementById("language");


if(selector){

selector.value = lang;

}


changeLanguage();


};
