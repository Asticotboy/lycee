function change(elem){
    window.history.pushState("", "", `lycee/${elem.value}`);
    location.reload()
}

