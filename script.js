

//Code so that the '*' character is displayed as 'x' on users browser, and so that '/' character is displayed as '÷'.
//Also includes code so if user pushes two arithmetic buttons in a row, the first one deleted and only the most recently pressed button displays.
const calC =(c)=> {
let str=form.panel.value+c;
let finalChar=str.charAt(str.length-1)
let newStr = str.replace(/[x÷*/+-][x÷*/+-]/, finalChar).replace('*', 'x').replace('/',"÷")

	form.panel.value=newStr
    }

//This converts 'x' and '÷' back to '/' and '*' so that 'eval()' function will work
const workOut=(sum)=>{
	let str =form.panel.value;
	let newStr = str.replace(/x/g, '*').replace(/÷/g,'/')
	console.log(newStr)
	form.panel.value=eval(newStr)
}


const CE=()=> {

    
    form.panel.value = "";
}
