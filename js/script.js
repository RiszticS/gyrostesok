/*Pagination
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("1").style.display = "block";
  document.getElementById("defaultOpen").className += " active";
});*/

function opennumbers(evt, numbers) {
  var i, tabcontent, paginationpage;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  paginationpage = document.getElementsByClassName("paginationpage");
  for (i = 0; i < paginationpage.length; i++) {
    paginationpage[i].className = paginationpage[i].className.replace(" active", "");
  }
  document.getElementById(numbers).style.display = "block";
  evt.currentTarget.className += " active";
}

//Sidebar
function openNavbar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeNavbar() {
  document.getElementById("mySidebar").style.display = "none";
}

//Modal
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}