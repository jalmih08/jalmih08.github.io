// Le tableau qui contient tous les items et leurs prix
var items = [
  ["Carte graphique", 379.99],
  ["Processeur", 199.99],
  ["Carte mère", 114.99],
  ["Mémoire vive de 8 GO", 49.99],
  ["Mémoire vive de 16 GO", 92.49]
];
// variable qui aide avec l'affichage du message javascript dans le div dans l'html
var affiche = document.getElementById("affiche");

// la fonction qui calcule tous les prix et affiche les messages
function prix() {
  /* variables des 5 items et si l'utilisateur les a selectioner 
  (getElementById cherche cette information) */
  var gpu = document.getElementById("gpu");
  var cpu = document.getElementById("cpu");
  var mboard = document.getElementById("mboard");
  var ram8 = document.getElementById("ram8");
  var ram16 = document.getElementById("ram16");
  /* la declaration des variables qui vont servir au message final, ils commencent par 
  n'avoir pas de valeur donc s'ils ne sont pas selectionnes, ils affichent rien */
  var messageGpu = "";
  var messageCpu = "";
  var messageMboard = "";
  var messageRam8 = "";
  var messageRam16 = "";
  var aucun = "";
  var soustotal = 0;
  // 5 ifs pour voir s'ils sont selectionnes avec l'ajout des messages
  if (gpu.checked) {
    messageGpu = "<br>" + items[0][0] + " - \t" + items[0][1];
    soustotal = soustotal + items[0][1];
  }
  if (cpu.checked) {
    messageCpu = "<br>" + items[1][0] + " - \t" + items[1][1];
    soustotal = soustotal + items[1][1];
  }
  if (mboard.checked) {
    messageMboard = "<br>" + items[2][0] + " - \t" + items[2][1];
    soustotal = soustotal + items[2][1];
  }
  if (ram8.checked) {
    messageRam8 = "<br>" + items[3][0] + " - \t" + items[3][1];
    soustotal = soustotal + items[3][1];
  }
  if (ram16.checked) {
    messageRam16 = "<br>" + items[4][0] + " - \t" + items[4][1];
    soustotal = soustotal + items[4][1];
  }
  // un dernier if pour afficher le message si rien est selectionne
  if (gpu.checked == false && cpu.checked == false && mboard.checked == false && ram8.checked == false && ram16.checked == false) {
    aucun = "Aucun";
  }

  var provinceChoisi = document.getElementsByName("province")
  var taxe = 0;
  var aucunProvince = "";
  var prov = "";
  if (provinceChoisi[0].checked) {
    var taxe = 1.13;
    var prov = "<br> Taxes (ON 13%): " + (soustotal * 0.13).toFixed(2);
  } else if (provinceChoisi[1].checked) {
    var taxe = 1.15;
    var prov = "<br> Taxes (QC 15%): " + (soustotal * 0.15).toFixed(2);
  } else {
    aucunProvince = " - SVP choisir une province pour la facilitation de ton achat.";
  }


  var total =  "$" + (soustotal * taxe).toFixed(2);
  soustotal = soustotal.toFixed(2);


  var message = ("<b>REÇU</b><br>" + messageGpu + messageCpu+ messageMboard + messageRam8 + messageRam16 + aucun + "<br>-------------------------------------------------------" + "<br><br> Sous-total: " + soustotal + prov + "<br> Total: " + total + aucunProvince);
  affiche.innerHTML = message;
}
