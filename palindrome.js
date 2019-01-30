console.log('Please enter : ')
let stdin = process.openStdin()
let value 
	stdin.addListener("data", (d) => {
		value = d.toString().trim()
        //NonCase Or Case
		palindrome(value, "Case")
		stdin.destroy()	
	})
var palindrome = (data, option) => {
	var reverse = '';
    // console.log(data.split("").reverse().join(""))
	for(var i = data.length - 1; i >= 0; i--){
        reverse += data[i];
    }
    console.log(data+' => '+reverse)

    if(option == "NonCase") {
        console.log("--- Non Case Sensitive ---")
        if(data.toLowerCase() == reverse.toLowerCase()){
            console.log('Palindrome')
        }
        else{
            console.log('Not Palindrome')
        }
    }
    else if(option == "Case"){
        console.log("--- Case Sensitive ---")
        if(data == reverse){
            console.log('Palindrome')
        }
        else{
            console.log('Not Palindrome')
        }
    }
}		