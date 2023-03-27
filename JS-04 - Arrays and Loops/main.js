console.log("********Parte1*********")
let fila = ["Sofia", "David", "Juan"];
let divAlert = document.getElementById("divAlert");
divAlert.innerHTML = fila.length;
divAlert.innerHTML += "<ol> <li>" + fila[0] + "</li>"
+"<li>" + fila[1] + "</li>"
+"<li>" + fila[2] + "</li> </ol>"
let strfila = fila.join(", ")
console.log(strfila);




console.log("**********Parte2*********");
let fila2 = ["David", "Juan", "Sara", "Agustin"];
let divAlert2 = document.getElementById("divAlert2");
divAlert2.innerHTML = fila2.length;
divAlert2.innerHTML += "<ol> <li>" + fila2[0] + "</li>"
+"<li>" + fila2[1] + "</li>"
+"<li>" + fila2[2] + "</li>"
+"<li>" + fila2[3] + "</li> </ol>"
let strfila2 = fila2.join(", ")
console.log(strfila2);




console.log("**********Parte3*********");
let fila3 = ["David","Renata", "Juan", "Sara", "Agustin", "Elena"];
let divAlert3 = document.getElementById("divAlert3");
divAlert3.innerHTML = fila3.length;
divAlert3.innerHTML += "<ol> <li>" + fila3[0] + "</li>"
+"<li>" + fila3[1] + "</li>"
+"<li>" + fila3[2] + "</li>"
+"<li>" + fila3[3] + "</li>"
+"<li>" + fila3[4] + "</li>"
+"<li>" + fila3[5] + "</li> </ol>"
let strfila3 = fila3.join(", ")
console.log(strfila3);

console.log("*****forma2(solo una variable)*****");
let fila0 = ["Sofia", "David", "Juan"];
console.log("parte 1");
console.log(fila0);
fila0.push ("Sara");
fila0.push ("Agustin");
fila0.shift();
console.log("parte 2");
console.log(fila0);
fila0.splice(1,0, "Renata");
fila0.push("Elena");
console.log("parte 3");
console.log(fila0);
