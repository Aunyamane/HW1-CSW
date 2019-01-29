console.log('Please enter : ')
let stdin = process.openStdin()
let value 
	stdin.addListener("data", (d) => {
		value = d.toString().trim()
        //NonCase Or Case
		palindrome(value, "NonCase")
		stdin.destroy()
		
	})
var palindrome = (data, option) => {
	var reverse = '';
    
	for(var i = data.length - 1; i >= 0; i--){
        reverse += data[i];
    }
    console.log(data+' => '+reverse)

    if(option == "NonCase") {
        if(data.toLowerCase() == reverse.toLowerCase()){
            console.log('Palindrome Non Case Sensitive')
        }
        else{
            console.log('Not Palindrome')
        }
    }
    else if(option == "Case"){
        if(data == reverse){
            console.log('Palindrome')
        }
        else{
            console.log('Not Palindrome')
        }
    }
}		