var arr=[1,[2,[3,4]]];

function Len(arr){
    let a=arr.flat(Infinity);
    return a.length;

}
console.log("hi");
console.log(Len(arr));