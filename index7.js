function Lword(string){
    var str=string.split(" ");
    var long=0;
    var word = null;
    for(var i=0;i<str.length;i++){
        if(long<str[i].length){
            long=str[i].length;
            word=str[i];
        }
    }
    return word;

}
console.log(Lword("How the Avocado Became the Fruit of the Global Trade"));