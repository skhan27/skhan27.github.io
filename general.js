var navitem = document.getElementById('navlist');
var checkbox = document.getElementById('navi-toggle');
navitem.addEventListener("click", function(e) {
    //console.log(e.target.nodeName);
    if(e.target && e.target.nodeName == "A"){
        checkbox.checked = false;
    }
});
