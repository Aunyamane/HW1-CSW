console.log("--- Calculate Bmi ---")
let result = '';
console.log('height: ')
let stdin = process.openStdin()
stdin.addListener("data",  (h) => {
    console.log('width: ')
    stdin.addListener("data", (w) => {
        if(isNaN(Number(h)) === false && isNaN(Number(w)) === false){
            result = calculateBMI(h, w)
            console.log(result)
        }
        else{
            console.log("Input InCorrect")
        }
        stdin.destroy()
   })
})
var calculateBMI = (h, w) => {
	var reverse = ''
    var bmi = 0;
    bmi = w/((h/100) * (h/100))
    if(bmi < 18.5) {
        return 'Result : UnderWeight';
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        return 'Result : Perfect'
    }
    else{
        return 'Result : Overweight'
    }
}		