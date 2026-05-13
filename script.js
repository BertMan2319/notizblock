
//notizen anzeigen lassen
//ich brauche notizen
let notes = [`banana`, `rasen mähen`];

//wann werden sie angezeigt
function renderNotes(){
    //ich muss definieren, wo die notizen angezeigt werden sollen
    let contentRef = document.getElementById(`content`);

    contentRef.innerHTML = notes;
}






//notizen hinzufügen
//notizen löschen
//notizen archivieren
