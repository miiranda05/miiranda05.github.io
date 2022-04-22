alert(Date());
 
function img(){
	var select=document.getElementById('ck')
	select.src ='https://thumbs.dreamstime.com/b/isolated-cute-happy-cat-emoji-vector-illustration-225027901.jpg' 
}

function content(){
	var select=document.getElementById('hi')
	select.innerHTML='Jacob will love miranda forever.';
}


function box(){alert('Ics 4U is my favourite subject');
	

}

function change(){
var select=document.getElementById('demo');
select.style.backgroundColor='blue';
select.style.fontFamily='cursive';
select.style.textAlign="center";
select.style.fontSize="40px";
select.innerHTML='You are handsome';
}


function ftocm(f){return (5/9) * (f-32);}
                
function ftoc(){
document.getElementById("two").innerHTML = ftocm(20);}


function sum(){
	var a=parseFloat(prompt('first number:'));var b =parseFloat(prompt('second number;'));

document.getElementById('sum').innerHTML=a+b;}

function names(){

	var a=prompt('please enter the first name:');
	var b=prompt('please entger the second name');
	 document.getElementById('five').innerHTML="Nice to meet you"+" "+a+" "+b;
} 
