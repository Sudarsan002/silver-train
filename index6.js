function titleCaseEdit(title){
return title
.split(' ')
.map((word) => word[0].toUpperCase()+word.slice(1).toLowerCase())
.join(' ');
    //toUpperCase()

   // return string[0].toUpperCase + string.slice(1);
//console.log(titleCaseEdit('the road not taken'))
}

console.log(titleCaseEdit("the road not taken"));