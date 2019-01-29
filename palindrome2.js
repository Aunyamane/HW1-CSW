console.log('Please enter : ')
let stdin = process.openStdin()
let value 
	stdin.addListener("data", (d) => {
		value = d.toString().trim()
		palindrome(value)
		stdin.destroy()
		
	})
var palindrome = (data) => {
	var reverse = ''
	for(var i = data.length - 1; i >= 0; i--){
        reverse += data[i];
    }
    console.log(data+' => '+reverse)

    if(data.toLowerCase() == reverse.toLowerCase()){
    	if(data.toLowerCase() == reverse.toLowerCase()){
    		console.log('Palindrome Non Case Sensitive')
    	}
    	if(data != reverse){
    		console.log('Palindrome Case Sensitive')
    	}
    }
    else{
    	console.log('Not Palindrome')
    }
}		