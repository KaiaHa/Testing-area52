function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'container')
       e.style.display = 'none';
    else
       e.style.display = 'container';
 }
 // yeah let's do vanilla JS just for fun :P

var toggle = document.getElementById('toggle');
var slider = document.querySelector('.slider');

toggle.addEventListener('click', toggleSlider, false);

function toggleSlider(){
    if (slider.classList.contains('opened')) {
        slider.classList.remove('opened');
        slider.classList.add('closed');
    } else {
        slider.classList.remove('closed');
        slider.classList.add('opened');
    }
    function toggle(showHideDiv, switchTextDiv) {
        var ele = document.getElementById(showHideDiv);
        var text = document.getElementById(switchTextDiv);
        if(ele.style.display == "block") {
                ele.style.display = "none";
            text.innerHTML = "show";
          }
        else {
            ele.style.display = "block";
            text.innerHTML = "hide";
        }
    } 