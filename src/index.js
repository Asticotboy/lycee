function change(elem){
    window.history.pushState("", "", `${elem.value}`);
    location.reload()
}

