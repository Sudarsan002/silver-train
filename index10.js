function product(...args)
{
    let product=1;
    for(let i=0;i<args.length;i++){
    product=product*args[i];
}
return product;

}
console.log(product(3,2,5));