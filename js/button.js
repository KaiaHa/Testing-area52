var completes = document.querySelectorAll(".complete");
var toggleButton1 = document.getElementById("toggleButton1");
var toggleButton2 = document.getElementById("toggleButton2")
var toggleButton3 = document.getElementById("toggleButton3")
var toggleButton4 = document.getElementById("toggleButton4")


function toggleComplete1(){
   console.log("start av toggle complete1");
  var lastComplete = completes[completes.length - 1];
  if (document.querySelector('#toggle3').classList.contains('complete')){
  lastComplete.classList.toggle('complete');
     console.log("slutt av toggle complete1");
}}
function toggleComplete2(){
   console.log("start av toggle complete2");
  var lastComplete = completes[completes.length - 2];
  if (document.querySelector('#toggle2').classList.contains('complete')){
  lastComplete.classList.toggle('complete');
     console.log("slutt av toggle complete2");
}}
function toggleComplete3(){
   console.log("start av toggle complete3");
  var lastComplete = completes[completes.length - 3];
  lastComplete.classList.toggle('complete');
   console.log("slutt av toggle complete3");
}
function toggleComplete4(){
  console.log("start av toggle complete4");
  var lastComplete = completes[completes.length - 4];
   if (document.querySelector('#toggle4').classList.contains('complete')){
  lastComplete.classList.toggle('complete');
     console.log("slutt av toggle complete4");
}}

toggleButton1.onclick = toggleComplete1;
toggleButton2.onclick = toggleComplete2;
toggleButton3.onclick = toggleComplete3;
toggleButton4.onclick = toggleComplete4;
