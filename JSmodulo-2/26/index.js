function fatorial(n){
    let fat=1
    for(let c=n;c>1;c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//-----------------------------------

function fatorial2(n){
    if(n == 1){
        return 1
    } else{
        return n* fatorial2(n-1)
    }
}
console.log(fatorial2(5))
//Fatorial é: 5x4 4x3 3x2 2x1=120