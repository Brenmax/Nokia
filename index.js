

// Collection View
document.getElementById("UltraBasic").style.display = "none";       //1 Series
document.getElementById("BasicSeries").style.display = "none";      //2 Series
document.getElementById("Youth").style.display = "none";            //3 Series

document.getElementById("E5Series").style.display = "none";          //5 Series
document.getElementById("ClassicBeesWax").style.display = "none";   //6 Series
document.getElementById("XPerimental").style.display = "none";      //7 Series

document.getElementById("NSeries").style.display = "none";      //N Series
document.getElementById("ESeries").style.display = "none";      //E Series

HideSelModel()

function HideSelModel() {
    document.getElementById("SelPhone").style.display = "none";    
}

function ClearPages() {
    document.getElementById("UltraBasic").style.display = "none";       //1 Series
    document.getElementById("BasicSeries").style.display = "none";      //2 Series
    document.getElementById("Youth").style.display = "none";            //3 Series

    document.getElementById("E5Series").style.display = "none";          //5 Series
    document.getElementById("ClassicBeesWax").style.display = "none";   //6 Series
    document.getElementById("XPerimental").style.display = "none";      //7 Series

    document.getElementById("NSeries").style.display = "none";      //N Series
    document.getElementById("ESeries").style.display = "none";      //E Series
    document.getElementById("SelPhone").style.display = "none";   

    document.getElementById("PictorialImagery").style.display = "none";   
    document.getElementById("SHP1Home").style.display = "none";   
    document.getElementById("SHP2Home").style.display = "none";   

    document.getElementById("Writing8").style.display = "block";      
    document.getElementById("Writing7").style.display = "block";     
    document.getElementById("Writing6").style.display = "block";     
    document.getElementById("Writing5").style.display = "block";     
    document.getElementById("Writing4").style.display = "block";      
    document.getElementById("Writing3").style.display = "block";      
    document.getElementById("Writing2").style.display = "block";      
    document.getElementById("Writing1").style.display = "block"; 
}

// Access Collection View
document.getElementById("1_OptView").addEventListener("mouseup", () => {document.getElementById("UltraBasic").style.display = "block"; HideSelModel()})
document.getElementById("2_OptView").addEventListener("mouseup", () => {document.getElementById("BasicSeries").style.display = "block"; HideSelModel()})
document.getElementById("3_OptView").addEventListener("mouseup", () => {document.getElementById("Youth").style.display = "block"; HideSelModel()})
document.getElementById("5_OptView").addEventListener("mouseup", () => {document.getElementById("E5Series").style.display = "block"; HideSelModel()})
document.getElementById("6_OptView").addEventListener("mouseup", () => {document.getElementById("ClassicBeesWax").style.display = "block"; HideSelModel()})
document.getElementById("7_OptView").addEventListener("mouseup", () => {document.getElementById("XPerimental").style.display = "block"; HideSelModel()})
document.getElementById("N_OptView").addEventListener("mouseup", () => {document.getElementById("NSeries").style.display = "block"; HideSelModel()})
document.getElementById("E_OptView").addEventListener("mouseup", () => {document.getElementById("ESeries").style.display = "block"; HideSelModel()})

document.getElementById("Brows_Coll").addEventListener("mouseup", () => { ClearPages(); document.getElementById("SelPhone").style.display = "block";})
document.getElementById("ViewColl").addEventListener("mouseup", () => { ClearPages(); 
    document.getElementById("UltraBasic").style.display = "block";       //1 Series
    document.getElementById("BasicSeries").style.display = "block";      //2 Series
    document.getElementById("Youth").style.display = "block";            //3 Series

    document.getElementById("E5Series").style.display = "block";          //5 Series
    document.getElementById("ClassicBeesWax").style.display = "block";   //6 Series
    document.getElementById("XPerimental").style.display = "block";      //7 Series

    document.getElementById("NSeries").style.display = "block";      //N Series
    document.getElementById("ESeries").style.display = "block";      //E Series

    document.getElementById("Writing8").style.display = "none";      
    document.getElementById("Writing7").style.display = "none";     
    document.getElementById("Writing6").style.display = "none";     
    document.getElementById("Writing5").style.display = "none";     
    document.getElementById("Writing4").style.display = "none";      
    document.getElementById("Writing3").style.display = "none";      
    document.getElementById("Writing2").style.display = "none";      
    document.getElementById("Writing1").style.display = "none";      
})

document.getElementById("Home").addEventListener("mouseup", () => { ClearPages();
    document.getElementById("PictorialImagery").style.display = "block";   
    document.getElementById("SHP1Home").style.display = "block";   
    document.getElementById("SHP2Home").style.display = "block";   
})

document.getElementById("Brows_Coll").addEventListener("mouseup", () => { ClearPages(); document.getElementById("SelPhone").style.display = "block";})
document.getElementById("Brows_Coll").addEventListener("mouseup", () => { ClearPages(); document.getElementById("SelPhone").style.display = "block";})

