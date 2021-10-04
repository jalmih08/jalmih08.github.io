var i = "oui";

var table = [];
while (i === "oui") {

  table.push(parseInt(prompt("Donne un nombre")));
  i = prompt("Veux-tu continuer? (oui/non)");
}




var max = table[0];


var j = 0;


for (j = 0; j <= table.length; j++) {

  if (table[j] > max) {
    max = table[j];
  }

}
var min=table[0];

for (j = 0; j <= table.length; j++) {

  if (table[j] < min) {
    min = table[j];
  }

}

var somme = 0
var y = 0;
for (y=0;table.length>y;y++) {
somme = somme+table[y]
}
alert(table);
alert("Somme = " + somme)
alert("Moyenne = " + (somme / table.length))
alert("Min = " + min);
alert("Max = " + max);
