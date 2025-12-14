document.addEventListener("DOMContentLoaded", function(){
    loadContent('../strony/glowna.html');
});

function loadContent(strona) {
    const element = document.getElementById("content");
    fetch("../strony/"+strona)
        .then(Response => {
            if(!Response.ok) { throw new Error('Błąd sieci');}
            return Response.text();
        })
        .then(data => {element.innerHTML = data;})
        .catch(error => {element.innerHTML = '<p>Bład ładowania treści</p>';});
}