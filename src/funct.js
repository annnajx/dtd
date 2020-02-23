// import {help} from './help.js'

function post() {
  var name = document.getElementById("name").value;
  var msg = document.getElementById("msg").value;
  document.getElementById("name").value="";
  document.getElementById("msg").value="";
  alert("Thank you for your contribution!");
  document.getElementById("wrapper").innerHTML = name;
}

