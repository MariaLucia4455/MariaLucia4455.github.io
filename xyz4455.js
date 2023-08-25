
var vidtitle = document.getElementById("vidtitle");
var video = document.getElementById("mp4");
var set1 = document.getElementById("set1");
var offpic = document.getElementById("offpic");
var set1 = document.getElementById("vivaset1");
var btn = document.getElementById("btnp");
var pass = document.getElementById("pass");
var oll = document.getElementById("oll");
var vivaset1 = document.getElementById("vivaset1");
var pcon = document.getElementById("pcon");
var tset = document.getElementById("tset");
var images = document.querySelectorAll('img.thumbnail2');
var ac = document.getElementById("da");


dimg.ondblclick = function() {
dcon.style.display = "block";
}

const dlink = document.getElementById('da');
  function disableRightClick(event) {
    event.preventDefault();
    console.log('Right-click disabled on the link.');
  }
  dlink.addEventListener('contextmenu', disableRightClick);



//pass
btn.ondblclick = function() {
if(pass.value == "123") {
pcon.style.display = "none";
oll.style.display = "block";
vivaset1.style.display = "none";
tset.style.display = "block";
video.src ="https://archive.org/download/siklo.-2022.720p.-vmax.-web-dl.-aac-2.0.x-264-msq/Silip.Sa.Apoy.2022.1080p.WEB-DL.AAC2.0.x264-RSG.mkv "
video.poster = "img/silipsaapoy.jpeg"
vidtitle.innerHTML = "Silip sa apoy  (2022)  720p"
} else if(pass.value == "11111") {
pcon.style.display = "none";
oll.style.display = "block";
}else{
alert("Invalid Password!!");
}
}






//vivaset title and link 

lawa.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQcX-dbYGWR1nnRO/root/content"; 
vidtitle.innerHTML = "Lawa (480p)";
video.poster  = "img/lawa.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQcX-dbYGWR1nnRO/root/content";  
ac.innerHTML = "Download 507MB"; 
}


suki.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDe6U4Z5zE1__yAW8/root/content"; 
vidtitle.innerHTML = "Suki (720p)";
video.poster  = "img/suki.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDe6U4Z5zE1__yAW8/root/content";  
ac.innerHTML = "Download 503MB"; 
}

lagaslas.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDanfDpcQ8DDn3Cz8/root/content"; 
vidtitle.innerHTML = "Lagaslas (720p)";
video.poster  = "img/lagaslas.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDanfDpcQ8DDn3Cz8/root/content";  
ac.innerHTML = "Download 873MB"; 
}

laquerida.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDaxqjVfRHye8_p9E/root/content"; 
vidtitle.innerHTML = "LA Querida (720p)";
video.poster  = "img/laquerida.jpeg"
   
ac.href ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDaxqjVfRHye8_p9E/root/content";  
ac.innerHTML = "Download 428MB"; 
}

bellaluna.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQXsJph5Pvb5dj_l/root/content"; 
vidtitle.innerHTML = "Bellaluna (720p)";
video.poster  = "img/bellaluna.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQXsJph5Pvb5dj_l/root/content";  
ac.innerHTML = "Download 1GB"; 
}

mangkanor.ondblclick = function() {
video.src ="https://archive.org/download/mkv-_20230409/MangKanor.mkv"; 
vidtitle.innerHTML = "Mangkanor (2023) - 720p";
video.poster  = "img/mangkanor.jpeg"
  
ac.href ="https://www.mediafire.com/file/s4tx9cmr2boic6u/MangKanor.mp4/file   " ;  
ac.innerHTML = "Download 481MB"; 
}

taginit.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDegzc3U166N3Ymms/root/content"; 
vidtitle.innerHTML = "Tag-init (720p)";
video.poster  = "img/taginit.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDegzc3U166N3Ymms/root/content";  
ac.innerHTML = "Download 784MB"; 
}

nigthbird.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsbjpl5-guSRsqXIc/root/content"; 
vidtitle.innerHTML = "Nigthbird (720p)";
video.poster  = "img/nigthbird.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsbjpl5-guSRsqXIc/root/content";  
ac.innerHTML = "Download 875MB"; 
}

bosodos.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsak617ZOm8MQx5d4/root/content"; 
vidtitle.innerHTML = "Bosodos (720p)";
video.poster  = "img/bosodos.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsak617ZOm8MQx5d4/root/content";  
ac.innerHTML = "Download 810MB"; 
}


scorpionigths3.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKahlFTdveFAinntg/root/content"; 
vidtitle.innerHTML = "Scorpionigths3 (720p)";
video.poster  = "img/scorpionigths3.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKahlFTdveFAinntg/root/content";  
ac.innerHTML = "Download 966MB"; 
}

selenasgold.ondblclick = function() {
video.src = "https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKa24ZS_96StZpJPA/root/content"; 
vidtitle.innerHTML = "Selena's Gold (720p)";
video.poster  = "img/selenasgold.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKa24ZS_96StZpJPA/root/content";  
ac.innerHTML = "Download 1.1GB"; 
}


pamasahe.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKeSk9kfX3qAmBk1c/root/content"; 
vidtitle.innerHTML = "Pamasahe (720p)";
video.poster  = "img/pamasahe.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKeSk9kfX3qAmBk1c/root/content";  
ac.innerHTML = "Download 798MB"; 
}


bugso.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsa_YDxSaobtXRdQ0/root/content"; 
vidtitle.innerHTML = "Bugso (720p)";
video.poster  = "img/bugso.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsa_YDxSaobtXRdQ0/root/content";  
ac.innerHTML = "Download 920MB"; 
}

laruan.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsbb_Rq19oGVyF-S8/root/content"; 
vidtitle.innerHTML = "Laruan (720p)";
video.poster  = "img/laruan.jpeg"
  
ac.href = "  https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsbb_Rq19oGVyF-S8/root/content";  
ac.innerHTML = "Download 663MB"; 
}


putahe.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_IbuuUJAeuvuwn4q8/root/content"; 
vidtitle.innerHTML = "Putahe (720p)";
video.poster  = "img/putahe.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_IbuuUJAeuvuwn4q8/root/content" ;  
ac.innerHTML = "Download 695MB"; 
}








usxher.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_IbKS_u1q5x_R2B4I/root/content"; 
vidtitle.innerHTML = "Us x Her (720p)";
video.poster  = "img/usxher.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_IbKS_u1q5x_R2B4I/root/content" ;  
ac.innerHTML = "Download 942MB"; 
}

bula.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-a9k4Pnh6VrmFGaU/root/content"; 
vidtitle.innerHTML = "Bula (720p)";
video.poster  = "img/bula.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-a9k4Pnh6VrmFGaU/root/content";  
ac.innerHTML = "Download 1GB"; 
}


tubero.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-aoqzKzLhkCRbq28/root/content"; 
vidtitle.innerHTML = "Tubero (720p)";
video.poster  = "img/tubero.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-aoqzKzLhkCRbq28/root/content";  
ac.innerHTML = "Download 1.1GB"; 
}

batapasisabel.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgfqF92UAvedQ2Mzo/root/content"; 
vidtitle.innerHTML = "Bata pa si sabel (360p)";
video.poster  = "img/batapasisabel.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgfqF92UAvedQ2Mzo/root/content";  
ac.innerHTML = "Download 332MB"; 
}

majhongnigths.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBkamuEpZmNFNNDxBM/root/content"; 
vidtitle.innerHTML = "Majhong Nights (720p)";
video.poster  = "img/majhongnigths.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBkamuEpZmNFNNDxBM/root/content";  
ac.innerHTML = "Download 991MB"; 
}

kaliwaan.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-bVW83pUPJ0l8moQ/root/content"; 
vidtitle.innerHTML = "Kaliwaan (480p)";
video.poster  = "img/kaliwaan.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-bVW83pUPJ0l8moQ/root/content";  
ac.innerHTML = "Download 562MB"; 
}


girlfriday.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Ai8hNJ4MfZgTcDUpl_FYRQ2y7Oc/root/content"; 
vidtitle.innerHTML = "Girl Friday (720p)";
video.poster  = "img/girlfriday.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Ai8hNJ4MfZgTcDUpl_FYRQ2y7Oc/root/content";  
ac.innerHTML = "Download 848MB"; 
}

relyebo.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKeil9RSz_gg4Jo9U/root/content"; 
vidtitle.innerHTML = "Relyebo (2022) - 720p";
video.poster  = "img/relyebo.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKeil9RSz_gg4Jo9U/root/content"; 
ac.innerHTML = "Download 893MB"; 
}

palitan.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBka50w5Zs1DTQSjTI/root/content"; 
vidtitle.innerHTML = "Palitan (720p)";
video.poster  = "img/palitan.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBka50w5Zs1DTQSjTI/root/content";  
ac.innerHTML = "Download 995MB"; 
}

siklo.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_IbX_b_1wO5E7Ot5M/root/content"; 
vidtitle.innerHTML = "Siklo (720p)";
video.poster  = "img/siklo.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_IbX_b_1wO5E7Ot5M/root/content";  
ac.innerHTML = "Download 825MB"; 
}

silipsaapoy.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKfFvY0Sa5yIhE4c4/root/content"; 
vidtitle.innerHTML = "Silip sa apoy (720p)";
video.poster  = "img/silipsaapoy.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKfFvY0Sa5yIhE4c4/root/content";  
ac.innerHTML = "Download 753MB"; 

}

salamatdaks.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDfGB3jM9IPELqdwQ/root/content"; 
vidtitle.innerHTML = "Salamat Daks (720p)";
video.poster  = "img/salamatdaks.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDfGB3jM9IPELqdwQ/root/content";  
ac.innerHTML = "Download 722MB"; 

}

upuan.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Ai8hNJ4MfZgTbtT84MkQoSV94oQ/root/content"; 
vidtitle.innerHTML = "Upuan (720p)";
video.poster  = "img/upuan.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Ai8hNJ4MfZgTbtT84MkQoSV94oQ/root/content";  
ac.innerHTML = "Download 1GB"; 

}

domme.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDfdrpVPX1xVnm-Tw/root/content"; 
vidtitle.innerHTML = "Domme (480p)";
video.poster  = "img/domme.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDfdrpVPX1xVnm-Tw/root/content";  
ac.innerHTML = "Download 870MB"; 

}

pabuya.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKe6uVbJVzj-PLGgo/root/content"; 
vidtitle.innerHTML = "Pabuya (720p)";
video.poster  = "img/pabuya.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AmUm7rKywATKe6uVbJVzj-PLGgo/root/content";  
ac.innerHTML = "Download 727MB"; 

}

eva.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-bIeValwEzjDZCvo/root/content"; 
vidtitle.innerHTML = "Eva (720p)";
video.poster  = "img/eva.jpeg"
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-bIeValwEzjDZCvo/root/content";  
ac.innerHTML = "Download 989MB"; 
}


baliktaya.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBke4odu-0G-qUD-gk/root/content"; 
vidtitle.innerHTML = "Balik Taya (720p)";
video.poster  = "img/baliktaya.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBke4odu-0G-qUD-gk/root/content";  
ac.innerHTML = "Download 859MB"; 

}

paupahan.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpbWyxhRBtyaxgtQs/root/content"; 
vidtitle.innerHTML = "Paupahan (720p)";
video.poster  = "img/paupahan.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpbWyxhRBtyaxgtQs/root/content";  
ac.innerHTML = "Download 741MB"; 

}

cuatro.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQbk-hE0xXAlXEP9/root/content"; 
vidtitle.innerHTML = "Cuatro (720p)";
video.poster  = "img/cuatro.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQbk-hE0xXAlXEP9/root/content";  
ac.innerHTML = "Download 887MB"; 

}

sapul.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgbH8V90UikerSnGc/root/content"; 
vidtitle.innerHTML = "Sapul (720p)";
video.poster  = "img/sapul.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgbH8V90UikerSnGc/root/content";  
ac.innerHTML = "Download 1GB"; 

}

kk.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsbDe-m7Di8NqYamg/root/content"; 
vidtitle.innerHTML = "Kinsenas katapusan (360p)";
video.poster  = "img/kk.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsbDe-m7Di8NqYamg/root/content";  
ac.innerHTML = "Download 344MB"; 

}

sintiodiablo.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsfdgFFHh0VncNkes/root/content"; 
vidtitle.innerHTML = "Sitio Diablo (720p)";
video.poster  = "img/sintiodiablo.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Aq2eKSW-TRTsfdgFFHh0VncNkes/root/content";  
ac.innerHTML = "Download 690MB"; 

}

tahan.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AsG4AY4PO7nebjc2TKmQ4Vdx128/root/content"; 
vidtitle.innerHTML = "Tahan (720p)";
video.poster  = "img/tahan.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AsG4AY4PO7nebjc2TKmQ4Vdx128/root/content";  
ac.innerHTML = "Download 854MB"; 

}



// TV SERIES SAMPLE 









sexgames.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQNnuzWoffyPlazl/root/content"; 
vidtitle.innerHTML = "Sex games (720p)";
video.poster  = "img/sexgames.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQNnuzWoffyPlazl/root/content";  
ac.innerHTML = "Download  738MB"; 

}


afam.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBkeoJektHSyv1TXIM/root/content"; 
vidtitle.innerHTML = "Afam (720p)";
video.poster  = "img/afam.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBkeoJektHSyv1TXIM/root/content";  
ac.innerHTML = "Download 688MB"; 

}

theinfluencer.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AqjRxrPlQIingQGVDkD7ACdKQUv7/root/content"; 
vidtitle.innerHTML = "The Influencer (720p)";
video.poster  = "img/theinfluencer.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AqjRxrPlQIingQGVDkD7ACdKQUv7/root/content";  
ac.innerHTML = "Download 927MB"; 

}

karakrus.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AsG4AY4PO7nebUo8AnBxTMNgP_g/root/content"; 
vidtitle.innerHTML = "Kara Krus (720p)";
video.poster  = "img/karakrus.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AsG4AY4PO7nebUo8AnBxTMNgP_g/root/content";  
ac.innerHTML = "Download 842MB"; 

}

fallguy.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpakAR8r3wqR9aVmM/root/content"; 
vidtitle.innerHTML = "Fall Guy (720p)";
video.poster  = "img/fallguy.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpakAR8r3wqR9aVmM/root/content";  
ac.innerHTML = "Download 700MB"; 

}




sandwich.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpbiyUs17X2WBWCnw/root/content"; 
vidtitle.innerHTML = "Sandwich (720p)";
video.poster  = "img/sandwich.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpbiyUs17X2WBWCnw/root/content";  
ac.innerHTML = "Download 832MB"; 

}

kabayo.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpbAW0Dv1_nBrYIwM/root/content"; 
vidtitle.innerHTML = "Kabayo (720p) ";
video.poster  = "img/kabayo.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_FpbAW0Dv1_nBrYIwM/root/content";  
ac.innerHTML = "Download 819MB"; 

}

stardancer.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_Fpbz0teZOx4Vl0mXc/root/content"; 
vidtitle.innerHTML = "Star Dancer (480p) ";
video.poster  = "img/stardancer.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_Fpbz0teZOx4Vl0mXc/root/content";  
ac.innerHTML = "Download  611MB"; 

}
hugas.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!Ai8hNJ4MfZgTfrFG5SPnvhkGnqA/root/content"; 
vidtitle.innerHTML = "Huqas (720p) ";
video.poster  = "img/hugas.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!Ai8hNJ4MfZgTfrFG5SPnvhkGnqA/root/content";  
ac.innerHTML = "Download  855MB"; 

}


thm.ondblclick = function() {
video.src ="https://e3zypg.ch.files.1drv.com/y4mpl0oY41Af2thdobXvwks_Amyd7Z873RSQ8K8NvTbiFzKwZtYYINr0pVaMqw3lx9leeZhGVF_icsnU1Dzs-2yxp_fP2opojV4HCjg4z2efO0sh93kJA-D7XgD7J7QRZ3KQL8dXqKSYp_SW9Rq4AHH07hxcHaNbF7C08rlGhMyTJJrheDyaCG5XuNgLvP4I-2jdLqRJS_41AiZDJ6DYJ7MGA/The%20housemaid.mp4"; 
vidtitle.innerHTML = "The Housemaid (720p) ";
video.poster  = "img/thm.jpeg";
  
ac.href ="https://e3zypg.ch.files.1drv.com/y4mpl0oY41Af2thdobXvwks_Amyd7Z873RSQ8K8NvTbiFzKwZtYYINr0pVaMqw3lx9leeZhGVF_icsnU1Dzs-2yxp_fP2opojV4HCjg4z2efO0sh93kJA-D7XgD7J7QRZ3KQL8dXqKSYp_SW9Rq4AHH07hxcHaNbF7C08rlGhMyTJJrheDyaCG5XuNgLvP4I-2jdLqRJS_41AiZDJ6DYJ7MGA/The%20housemaid.mp4";  
ac.innerHTML = "Download  938MB"; 

}

hilom.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_Fpa9h7f8r__S1hnVk/root/content"; 
vidtitle.innerHTML = "Hilom (480p) ";
video.poster  = "img/hilom.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!ApYKmcBa9_Fpa9h7f8r__S1hnVk/root/content";  
ac.innerHTML = "Download  550MB"; 

}


hosto.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgcBLsYVad5hIuIo8/root/content"; 
vidtitle.innerHTML = "Hosto (720p) ";
video.poster  = "img/hosto.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgcBLsYVad5hIuIo8/root/content";  
ac.innerHTML = "Download  859MB"; 

}

tayuan.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQTcAQoG79L63bVf/root/content"; 
vidtitle.innerHTML = "Tayuan (720p) ";
video.poster  = "img/tayuan.jpeg";
  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_gQTcAQoG79L63bVf/root/content";  
ac.innerHTML = "Download  920MB"; 

}

hugot.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-b0cxvl0jyFt8RK4/root/content"; 
vidtitle.innerHTML = "HUGOT(720p) ";
video.poster  = "img/hugot.jpeg"; 
ac.href ="https://api.onedrive.com/v1.0/shares/s!AiDaeJqxQCX-b0cxvl0jyFt8RK4/root/content";  
ac.innerHTML = "Download  1.1GB"; 

}


bugaw.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_Ia9ykaDF5h8DXJrc/root/content"; 
vidtitle.innerHTML = "Bugaw (720p) ";
video.poster  = "img/bugaw.jpeg"; 
ac.href ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_Ia9ykaDF5h8DXJrc/root/content";  
ac.innerHTML = "Download  770MB"; 

}

taya.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AvUb0QCZk1UQem4cQJ2O37788Is/root/content"; 
vidtitle.innerHTML = "Taya (480p) ";
video.poster  = "img/taya.jpeg";
ac.href ="https://api.onedrive.com/v1.0/shares/s!AvUb0QCZk1UQem4cQJ2O37788Is/root/content";  
ac.innerHTML = "Download  653MB"; 

}

homeservice.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_Iat0jm2_s_qvOjPs/root/content"; 
vidtitle.innerHTML = "Home Service (720p) ";
video.poster  = "img/homeservice.jpeg";  
ac.href ="https://api.onedrive.com/v1.0/shares/s!AuV_gSO5b2_Iat0jm2_s_qvOjPs/root/content";  
ac.innerHTML = "Download  1GB"; 

}

bisyo.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgag332PZvmre99M0/root/content"; 
vidtitle.innerHTML = "Bisyo (720p) ";
video.poster  = "img/bisyo.jpeg";
ac.href ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJgag332PZvmre99M0/root/content";  
ac.innerHTML = "Download  900MB"; 

}

litsoneras.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJga_FnOOdOPTgHVQc/root/content"; 
vidtitle.innerHTML = "Litsoneras (720p) ";
video.poster  = "img/litsoneras.jpeg";
ac.href ="https://api.onedrive.com/v1.0/shares/s!AsG9hLafYAJga_FnOOdOPTgHVQc/root/content";  
ac.innerHTML = "Download  524MB"; 

}

siphayo.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_f5uOGxNpLD79pR0/root/content"; 
vidtitle.innerHTML = "Siphayo (720p) ";
video.poster  = "img/siphayo.jpeg";
ac.href ="https://api.onedrive.com/v1.0/shares/s!AkQaoAYW7i4_f5uOGxNpLD79pR0/root/content";  
ac.innerHTML = "Download  760MB"; 

}


manyak.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBkeSkMSce8xgweqd0/root/content"; 
vidtitle.innerHTML = "Manyak (720p) ";
video.poster  = "img/manyak.jpeg";
ac.href ="https://api.onedrive.com/v1.0/shares/s!AnJrhfI65jBkeSkMSce8xgweqd0/root/content";  
ac.innerHTML = "Download  1GB"; 

}

taonggrasa.ondblclick = function() {
video.src ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDfgrJ8og162w64sI/root/content"; 
vidtitle.innerHTML = "Taong Grasa (720p) ";
video.poster  = "img/taonggrasa.jpeg";
ac.href ="https://api.onedrive.com/v1.0/shares/s!AlKU0h23RBaDfgrJ8og162w64sI/root/content";
ac.innerHTML = "Download  900MB"; 

}

kamadora.ondblclick = function() {
video.src ="https://rvaaeg.ch.files.1drv.com/y4m-b5LNpWqKfevWR7BsZ0yxFCiExtTxLvnb0ZdO2QNJKbKRUE08vXes_7j0xpciQJoUAm54-ogPCXFRYzkomP7U09gn0Rm_dbxNH7caLbj659DCiO2WibWmjLw5mz53qFlY6lScGWRJ1ezlh1iacfTk7Ld7YYzSTSbC4aX0eeRTfpZkGLMTRO8IYy5wbijM31cKKeYD4QAK4BlXxwWLrf2Ag/Kamadora.mp4"; 
vidtitle.innerHTML = "Kamadora (720p) ";
video.poster  = "img/kamadora.jpeg";
ac.href ="https://rvaaeg.ch.files.1drv.com/y4m-b5LNpWqKfevWR7BsZ0yxFCiExtTxLvnb0ZdO2QNJKbKRUE08vXes_7j0xpciQJoUAm54-ogPCXFRYzkomP7U09gn0Rm_dbxNH7caLbj659DCiO2WibWmjLw5mz53qFlY6lScGWRJ1ezlh1iacfTk7Ld7YYzSTSbC4aX0eeRTfpZkGLMTRO8IYy5wbijM31cKKeYD4QAK4BlXxwWLrf2Ag/Kamadora.mp4";
ac.innerHTML = "Download  1.03GB"; 

}

kahalili.ondblclick = function() {
video.src ="https://swx4nq.ch.files.1drv.com/y4menFSSBrR7etl6Lr4dfCm3CTs23AIRglgAExt_y4tAJB508Vaf9YWdmK2AkM_cmdSu2ORtHU7-ISGw4vo2weMWamLNfUEpe6Gu7gFSomn5TKUSnmezTJdqwAWDF6vexFb3XAsd7yS0g4tCdXmAERxB20D4vZL99h9D7RMS6J2tqLIzDhFpjqZijfz7dvk0lROSa2Ttc4R2qcsChQFIo7NCw/KKAHALlLl%20vivamax.mp4"; 
vidtitle.innerHTML = "Kahalili (720p) ";
video.poster  = "img/kahalili.jpeg";
ac.href ="https://swx4nq.ch.files.1drv.com/y4menFSSBrR7etl6Lr4dfCm3CTs23AIRglgAExt_y4tAJB508Vaf9YWdmK2AkM_cmdSu2ORtHU7-ISGw4vo2weMWamLNfUEpe6Gu7gFSomn5TKUSnmezTJdqwAWDF6vexFb3XAsd7yS0g4tCdXmAERxB20D4vZL99h9D7RMS6J2tqLIzDhFpjqZijfz7dvk0lROSa2Ttc4R2qcsChQFIo7NCw/KKAHALlLl%20vivamax.mp4";
ac.innerHTML = "Download  1GB"; 

}

sugapa.ondblclick = function() {
video.src ="https://www.dropbox.com/scl/fi/zxxee3hczu2bp7ox6j6mp/Sug4pa.mp4?rlkey=3n68lm3oiy32mifpw14hhtdtr&dl=1"; 
vidtitle.innerHTML = "Sugapa (720p) ";
video.poster  = "img/sugapa.jpeg";
ac.href ="https://www.dropbox.com/scl/fi/zxxee3hczu2bp7ox6j6mp/Sug4pa.mp4?rlkey=3n68lm3oiy32mifpw14hhtdtr&dl=1";
ac.innerHTML = "Download  1GB"; 

}


cma.ondblclick = function() {
video.src ="https://www.dropbox.com/scl/fi/h22fujq7dw0ahnclpb7an/E.mp4?rlkey=me47rlptssdzn99s048brxfln&dl=1"; 
vidtitle.innerHTML = "Call Me Alma (720p) ";
video.poster  = "img/cma.jpeg";
ac.href ="https://www.dropbox.com/scl/fi/h22fujq7dw0ahnclpb7an/E.mp4?rlkey=me47rlptssdzn99s048brxfln&dl=1";
ac.innerHTML = "Download  962MB"; 

}











