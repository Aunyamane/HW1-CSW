console.log("--- Multiplication Number---")

console.log('number: ')
let stdin = process.openStdin()
stdin.addListener("data",  (n) => {
    if(isNaN(Number(n)) === false){
        multiplication(n)
    }
    else{
        console.log("Input InCorrect")
    }
    stdin.destroy()    
   
})
var multiplication = (n) => {
    console.log("--- Result ---")
    for (var i = 1; i < 13; i++) {
        console.log('%d *  %d : %d', n, i, (n * i));
    }
}       