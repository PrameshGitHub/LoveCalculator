window.onload=function() {
	let button=document.getElementById("get-calculate");
	button.addEventListener("click",calculateLove);
}

function calculateLove() {
	let yourName=document.getElementById("your-name").value;
	let partnerName=document.getElementById("partner-name").value;

	if (yourName != "" && partnerName != "") {
		let percentage = Math.floor(Math.random() *10);
		document.getElementById("result-message").innerText= yourName  +  " and " + partnerName + "'s chance of love:"
		document.getElementById("result-percentage").innerText=percentage.toString()+"%";
	}



}