function changeLanguage(){

let lang = document.getElementById("language").value;


// ================= AMHARIC =================

if(lang=="am"){

document.title="የጋብቻ ምዝገባ";

document.getElementById("officeTitle").innerHTML=
"CRRSA ጉለሌ ወረዳ 03";

document.getElementById("pageTitle").innerHTML=
"የጋብቻ ምዝገባ አገልግሎት";

document.getElementById("serviceTitle").innerHTML=
"የጋብቻ ምዝገባ";

document.getElementById("civilTitle").innerHTML=
"1. አዲስ /ብሔራዊ/ ተጋቢዎች የሚያስፈልጉ ቅድመ ሁኔታዎች";

}


// ================= ENGLISH =================

if(lang=="en"){

document.title="Marriage Registration";

document.getElementById("officeTitle").innerHTML=
"CRRSA Gulele Woreda 03";

document.getElementById("pageTitle").innerHTML=
"Marriage Registration Service";

document.getElementById("serviceTitle").innerHTML=
"Marriage Registration";

document.getElementById("civilTitle").innerHTML=
"1. Requirements for New (Civil/National) Marriage Registration";

}


// ================= AFAAN OROMOO =================

if(lang=="om"){

document.title="Galmee Fuudhaa fi Heerumaa";

document.getElementById("officeTitle").innerHTML=
"CRRSA Aanaa Gulleellee 03";

document.getElementById("pageTitle").innerHTML=
"Tajaajila Galmee Fuudhaa fi Heerumaa";

document.getElementById("serviceTitle").innerHTML=
"Galmee Fuudhaa fi Heerumaa";

document.getElementById("civilTitle").innerHTML=
"1. Ulaagaalee Fuudhaa fi Heeruma Haaraa";

}

}

// ================= CIVIL REQUIREMENTS =================


if(lang=="am"){


document.getElementById("civilReq1").innerHTML=
"ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።";


document.getElementById("civilReq2").innerHTML=
"መታወቂያ ከፋይዳ ጋር የተሳሰረ መሆን አለበት።";


document.getElementById("civilReq3").innerHTML=
"ከአዲስ አበባ ውጭ የሆኑ የታደሰ መታወቂያ እና ፋይዳ ማቅረብ አለባቸው።";


document.getElementById("civilReq4").innerHTML=
"ሁለቱም ተጋቢዎች የታደሰ መታወቂያ ወይም ፓስፖርት (ዋናና ኮፒ) ይዘው በአካል መቅረብ አለባቸው።";


document.getElementById("civilReq5").innerHTML=
"ከማመልከቻው ቀጥሎ ለ15 ቀናት የጋብቻ ማስታወቂያ (Online) ይለጠፋል።";


document.getElementById("civilReq6").innerHTML=
"በጋብቻ ቀን ሁለቱም ተጋቢዎች የታደሰ መታወቂያ ወይም ፓስፖርት ዋና ማቅረብ አለባቸው።";


document.getElementById("civilReq7").innerHTML=
"4 ምስክሮች (2 ከሚስት ወገን እና 2 ከባል ወገን) በታደሰ መታወቂያ ወይም ፓስፖርት በአካል መቅረብ አለባቸውፓ";


}



// ================= ENGLISH =================


if(lang=="en"){


document.getElementById("civilReq1").innerHTML=
"At least one of the applicants must be a resident of our Woreda.";


document.getElementById("civilReq2").innerHTML=
"The ID card must be linked with Fayda.";


document.getElementById("civilReq3").innerHTML=
"Applicants from outside Addis Ababa must present a renewed ID card and Fayda.";


document.getElementById("civilReq4").innerHTML=
"Both applicants must appear in person with renewed ID cards or passports (original and copy).";


document.getElementById("civilReq5").innerHTML=
"A marriage notice will be posted online for 15 days after application submission.";


document.getElementById("civilReq6").innerHTML=
"On the marriage day, both applicants must present their original valid ID cards or passports.";


document.getElementById("civilReq7").innerHTML=
"Four witnesses (2 from the bride side and 2 from the groom side) must appear with valid ID cards or passports.";


}



// ================= AFAAN OROMOO =================


if(lang=="om"){


document.getElementById("civilReq1").innerHTML=
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba.";


document.getElementById("civilReq2").innerHTML=
"Waraqaan eenyummaa Faayidaa waliin walqabatee ta'uu qaba.";


document.getElementById("civilReq3").innerHTML=
"Namoonni Finfinnee ala jiraatan eenyummaa haarawaa fi Faayidaa dhiyeessuu qabu.";


document.getElementById("civilReq4").innerHTML=
"Namoonni lamaan eenyummaa ykn paaspoortii haarawaa (isa jalqabaa fi kooppii) qabatanii qaamaan dhiyaachuu qabu.";


document.getElementById("civilReq5").innerHTML=
"Beeksisni fuudhaa fi heerumaa guyyaa 15f online irratti maxxanfama.";


document.getElementById("civilReq6").innerHTML=
"Guyyaa fuudhaa fi heerumaa eenyummaa ykn paaspoortii isaanii isa jalqabaa dhiyeessuu qabu.";


document.getElementById("civilReq7").innerHTML=
"Ragaa baatota afur (lama gama dhiiraa fi lama gama dubartii) eenyummaa ykn paaspoortii qabanii dhiyaachuu qabu.";


}
// ================= NOTES =================


if(lang=="am"){


document.getElementById("noteTitle").innerHTML=
"ማሳሰቢያ";


document.getElementById("note1").innerHTML=
"ከዚህ በፊት የወጣ ያላገባ/ች ሰርተፍኬት ካለ በጋብቻው ቀን ይመለሳል።";


document.getElementById("note2").innerHTML=
"የፍቺ ሰርተፍኬት ካለ በጋብቻው ቀን ይመለሳል።";


document.getElementById("note3").innerHTML=
"አንዲት ሴት ፍቺ ከፈጸመች ከ6 ወር በፊት ከሌላ ሰው ጋር ጋብቻ መፈጸም አትችልም።";


document.getElementById("note4").innerHTML=
"የአዲስ አበባ ነዋሪ የሆኑ ምስክሮች መታወቂያቸው ከፋይዳ ጋር የተሳሰረ መሆን አለበት።";


document.getElementById("note5").innerHTML=
"ይህ መመሪያ የባህል ወይም የኃይማኖት ጋብቻን አይመለከትም።";


}



// ================= ENGLISH NOTES =================


if(lang=="en"){


document.getElementById("noteTitle").innerHTML=
"Notes";


document.getElementById("note1").innerHTML=
"If a previous Single Status Certificate was issued, it must be returned on the marriage registration day.";


document.getElementById("note2").innerHTML=
"If a Divorce Certificate exists, it must be returned on the marriage registration day.";


document.getElementById("note3").innerHTML=
"A divorced woman cannot marry another person before six months have passed after divorce.";


document.getElementById("note4").innerHTML=
"Witnesses who are Addis Ababa residents must have ID cards linked with Fayda.";


document.getElementById("note5").innerHTML=
"These requirements do not apply to religious or customary marriages.";


}



// ================= AFAAN OROMOO NOTES =================


if(lang=="om"){


document.getElementById("noteTitle").innerHTML=
"Hubachiisa";


document.getElementById("note1").innerHTML=
"Ragaan nama hin fuune/hin heerumne duraan kenname yoo jiraate guyyaa galmee gaa'elaa irratti deebi'a.";


document.getElementById("note2").innerHTML=
"Ragaan hiikkaa gaa'elaa yoo jiraate guyyaa galmee gaa'elaa irratti deebi'a.";


document.getElementById("note3").innerHTML=
"Dubartiin hiikkaa booda ji'a jaha dura nama biraa waliin heerumuu hin dandeessu.";


document.getElementById("note4").innerHTML=
"Ragaa baatonni Finfinnee jiraatan eenyummaan isaanii Faayidaa waliin walqabatee ta'uu qaba.";


document.getElementById("note5").innerHTML=
"Qajeelfamni kun gaa'ela aadaa ykn amantii irratti hin hojii irra oolu.";


}
// ================= TRADITIONAL / RELIGIOUS MARRIAGE =================


// ============ AMHARIC ============

if(lang=="am"){


document.getElementById("traditionalTitle").innerHTML=
"2. ባህላዊ /ኃይማኖታዊ ጋብቻ ምዝገባ የሚያስፈልጉ ቅድመ ሁኔታዎች";


document.getElementById("tradReq1").innerHTML=
"ከሁለቱ አንዳቸው የእኛ ወረዳ ነዋሪ መሆን አለባቸው።";


document.getElementById("tradReq2").innerHTML=
"የባህል ወይም የኃይማኖት ጋብቻ ዋና ማስረጃ ማቅረብ አለበት።";


document.getElementById("tradReq3").innerHTML=
"ዋናው ማስረጃ ከጠፋ የፖሊስ ማስረጃ እና የተጋቡበትን ዓመት የሚገልጽ ማስረጃ ማቅረብ አለበት።";


document.getElementById("tradReq4").innerHTML=
"የባልና ሚስት የታደሰ መታወቂያ ወይም ፓስፖርት (ዋናና ኮፒ) ማቅረብ አለባቸው።";


document.getElementById("tradReq5").innerHTML=
"የባልና ሚስት 2 ጉርድ 3×4 ፎቶግራፍ ማቅረብ አለባቸው።";


document.getElementById("tradReq6").innerHTML=
"4 ምስክሮች በታደሰ መታወቂያ ወይም ፓስፖርት በአካል መቅረብ አለባቸው።";


document.getElementById("tradReq7").innerHTML=
"የተጋቢዎች ልጆች ምስክር መሆን አይችሉም።";


document.getElementById("tradReq8").innerHTML=
"መታወቂያ ከፋይዳ ጋር የተሳሰረ መሆን አለበት፤ ከአዲስ አበባ ውጭ የሆኑ ፋይዳ ማቅረብ አለባቸው።";


}



// ============ ENGLISH ============


if(lang=="en"){


document.getElementById("traditionalTitle").innerHTML=
"2. Requirements for Customary / Religious Marriage Registration";


document.getElementById("tradReq1").innerHTML=
"At least one of the applicants must be a resident of our Woreda.";


document.getElementById("tradReq2").innerHTML=
"The original customary or religious marriage certificate must be presented.";


document.getElementById("tradReq3").innerHTML=
"If the original certificate is lost, a police report and evidence showing the marriage year must be presented.";


document.getElementById("tradReq4").innerHTML=
"The husband and wife must provide renewed ID cards or passports (original and copy).";


document.getElementById("tradReq5").innerHTML=
"The husband and wife must provide two 3×4 passport-size photographs each.";


document.getElementById("tradReq6").innerHTML=
"Four witnesses with valid ID cards or passports must appear in person.";


document.getElementById("tradReq7").innerHTML=
"The couple's children cannot be witnesses.";


document.getElementById("tradReq8").innerHTML=
"ID cards must be linked with Fayda. Applicants outside Addis Ababa must provide Fayda.";


}
// ============ AFAAN OROMOO TRADITIONAL ============

if(lang=="om"){


document.getElementById("traditionalTitle").innerHTML=
"2. Ulaagaalee Galmee Fuudhaa fi Heerumaa Aadaa / Amantii";


document.getElementById("tradReq1").innerHTML=
"Namoota lamaan keessaa tokko jiraataa Aanaa keenya ta'uu qaba.";


document.getElementById("tradReq2").innerHTML=
"Ragaa fuudhaa fi heeruma aadaa ykn amantii isa jalqabaa dhiyeessuu qabu.";


document.getElementById("tradReq3").innerHTML=
"Ragaan jalqabaa yoo bade, ragaa poolisii fi ragaa waggaa fuudhaa fi heerumaa ibsu dhiyeessuu qabu.";


document.getElementById("tradReq4").innerHTML=
"Abbaa manaa fi haati manaa eenyummaa ykn paaspoortii haarawaa (isa jalqabaa fi kooppii) dhiyeessuu qabu.";


document.getElementById("tradReq5").innerHTML=
"Abbaa manaa fi haati manaa tokkoon tokkoon isaanii suuraa 3×4 lama dhiyeessuu qabu.";


document.getElementById("tradReq6").innerHTML=
"Ragaa baatota afur eenyummaa ykn paaspoortii qabanii qaamaan dhiyaachuu qabu.";


document.getElementById("tradReq7").innerHTML=
"Ijoolleen isaanii ragaa baatuu ta'uu hin danda'an.";


document.getElementById("tradReq8").innerHTML=
"Eenyummaan Faayidaa waliin walqabatee ta'uu qaba. Namoonni Finfinnee ala jiraatan Faayidaa dhiyeessuu qabu.";


}


// ============ BACK BUTTON ============


if(lang=="am"){

document.getElementById("backButton").innerHTML=
"⬅ ወደ ወሳኝ ኩነት ምዝገባ ተመለስ";

}



if(lang=="en"){

document.getElementById("backButton").innerHTML=
"⬅ Back to Vital Events";

}



if(lang=="om"){

document.getElementById("backButton").innerHTML=
"⬅ Gara Galmee Taateewwan Murteessaa Deebi'i";

}


}
