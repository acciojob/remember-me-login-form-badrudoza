//your JS code here. If required.
const nameInput=document.querySelector("#username");
const passInput=document.querySelector("#password");
const checkboxInput=document.querySelector("#checkbox");
const submitBtn=document.querySelector("#submit");
const exitBtn=document.querySelector("#existing");

const form=document.querySelector("#loginForm");

window.addEventListener("DOMContentLoaded",()=>{
	let savedName=localStorage.getItem("username");
	let savedPass=localStorage.getItem("password");
	if(savedName && savedPass){
		exitBtn.style.display="block";
	}
});
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	alert(`Logged in as ${nameInput.value}`);
	if(checkboxInput.checked){
		localStorage.setItem("username",nameInput.value);
		localStorage.setItem("password",passInput.value);
		exitBtn.style.display="block";
	}
	else{
		localStorage.remove("username");
		localStorage.remove("password");
		exitBtn.style.display="none";
	}
	nameInput.value="";
	passInput.value="";
	checkboxInput.checked=false;
});
exitBtn.addEventListener("click",()=>{
	const name=localStorage.getItem("username");
	if(name){
			alert(`Logged in as ${name}`);
	}else{
		exitBtn.style.display="none";
	}
});