var items = [
  ["Carte graphique", 379.99],
  ["Processeur", 199.99],
  ["Carte mère", 114.99],
  ["Mémoire vive de 8 GO", 49.99],
  ["Mémoire vive de 16 GO", 92.49]
];

var affiche = document.getElementById("affiche");

function prix() {
  var gpu = document.getElementById("gpu");
  var cpu = document.getElementById("cpu");
  var mboard = document.getElementById("mboard");
  var ram8 = document.getElementById("ram8");
  var ram16 = document.getElementById("ram16");
  var un = "";
  var deux = "";
  var trois = "";
  var quatre = "";
  var cinq = "";
  var aucun = "";
  var soustotal = 0;

  if (gpu.checked) {
    un = items[0][0] + " - \t" + items[0][1] + "$<br>";
    soustotal = soustotal + items[0][1];
  }
  if (cpu.checked) {
    deux = items[1][0] + " - \t" + items[1][1] + "$<br>";
    soustotal = soustotal + items[1][1];
  }
  if (mboard.checked) {
    trois = items[2][0] + " - \t" + items[2][1] + "$<br>";
    soustotal = soustotal + items[2][1];
  }
  if (ram8.checked) {
    quatre = items[3][0] + " - \t" + items[3][1] + "$<br>";
    soustotal = soustotal + items[3][1];
  }
  if (ram16.checked) {
    cinq = items[4][0] + " - \t" + items[4][1] + "$";
    soustotal = soustotal + items[4][1];
  }
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


  var total = (soustotal * taxe).toFixed(2) + "$";


  var message = ("<b>REÇU</b><br><br>" + un + deux + trois + quatre + cinq + aucun + "<br><br>-------------------------------------------------------" + "<br><br> Sous-total: " + soustotal + prov + "<br> Total: " + total + aucunProvince);
  affiche.innerHTML = message;
}
