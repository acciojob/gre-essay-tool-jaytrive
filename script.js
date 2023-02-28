//your code here
let output=document.getElementById('wordCount')

function realTimeChange(){
	let spaces=0
	let str=document.getElementById('evaluatedText').value
	let arr=str.split(' ')
	arr.forEach((value) => {
		if(value=='') spaces++
	})
	output.innerText=arr.length-spaces
}

