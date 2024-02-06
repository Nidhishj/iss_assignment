function scrolltoID(sectionId) {
    var id=document.getElementById(sectionId);
    if (id) {
        id.scrollIntoView({ behavior:"smooth" });
    }
}


function toggleDarkMode() {
    body = document.body;
    body.classList.toggle('dark-mode');
    // var p=document.getElementByClass(textandima);
    // p.style.background-color=body.classList.contains('dark-mode') ? 'rgba(0,0,0,0.5)' : '';
}