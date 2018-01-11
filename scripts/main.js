function toto() {
    document.getElementById('bouton').style.display = "none";
    document.getElementById('panel').style.display = "block";

}

function foo() {
document.getElementById('bouton').style.display = "block";
document.getElementById('panel').style.display = "none";

}

function chance() {
  let text = "J'ai de la chance"
  alert(text);

  text = text.replace(/ /g,"+");
  alert(text);

}

function affichageInput(){
  let msg = document.getElementById("affichage").value.replace(/ /g,"+");
  alert(msg)
  // msg = msg.replace(/ /g,"+");
  // alert(msg);

}

// function replace() {
// // document.getElementById("search").value.replace(" ","+");
// alert(document.getElementById("searchTxt").value.replace(" ","+");)
// }
