function goToPage2() {
    
    document.getElementById("landing").style.display = "none";
    document.getElementById("page2").style.display = "block";
    
    
    window.scrollTo(0, 0);
}

function goBack() {
    
    document.getElementById("page2").style.display = "none";
    
    
    const landing = document.getElementById("landing");
    landing.style.display = "flex";
    
    
    window.scrollTo(0, 0);
}
