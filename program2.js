let result = '';
console.log('height: ')
let stdin = process.openStdin()
stdin.addListener("data",  (h) => {
    console.log('Sumside: ')
    stdin.addListener("data", (s) => {
        if(isNaN(Number(h)) === false && isNaN(Number(s)) === false){
            result = trapezoidArea(h, s)
            console.log('Area : ' + result)
        }
        else{
            console.log("Input InCorrect")
        }
        stdin.destroy()
   })
})
var trapezoidArea = (h, s) => {
    return (0.5 * h * s)
}       