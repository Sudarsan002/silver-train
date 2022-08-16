var veg=["carrot","tomato","cucumber","cabbage","potato"];
var color=["orange","red","green","white","Brown"];

function findclr(vege)
{
let indexveg=veg.findIndex(element =>element ==vege);
console.log(color[indexveg]);
}
findclr("tomato");