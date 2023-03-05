'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	// Your JavaScript code goes here !
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	document.getElementById("clique").addEventListener("click",getNbDays);
	updateClock1();
	updateClock2();
	updateGraphicClock();
	document.getElementById("form").addEventListener("input",changeColor)
	document.getElementById("ig").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Informations Générales"
	document.getElementById("ig").addEventListener("click",afficheiginfo);
	document.getElementById("r").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Recherche"
	document.getElementById("r").addEventListener("click",afficheRinfo);
	document.getElementById("e").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Enseignement"
	document.getElementById("e").addEventListener("click",afficheEinfo);
	document.getElementById("p").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Personnel"
	document.getElementById("p").addEventListener("click",affichePinfo);

}

function defineHeading1(){
	document.querySelector("title").innerHTML = document.getElementById("title").innerText;
}

function defineHeading2(){
	if(document.querySelectorAll('h2').length != 0){
		document.querySelector("h2").innerHTML = "Test2";
		document.querySelector("h2:last-of-type").innerHTML = "Test3";	}
}

function defineHeading3(){
	if(document.querySelectorAll('h2').length == 0){
		document.querySelector("title").innerHTML = "Sacha";
	}
}

function defineHeading4(){
	if(document.getElementsByClassName("firstOrLast").length != 0){
		length = document.getElementsByClassName("firstOrLast").length;
		let title;
		if(length%2 == 0){
			title = document.querySelectorAll(".firstOrLast")[0];
		}
		else if(length%2 != 0){
			title = document.querySelectorAll(".firstOrLast")[length-1];
		}
	}
	else title = "Sacha castillejos";
	document.querySelector("title").innerHTML = title;

}

function swapInnerHTML(){
	var p1 = (document.querySelectorAll("div>p")[0].innerHTML);
	var p2 = (document.querySelectorAll("div>p")[1].innerHTML);
	document.querySelectorAll("div>p")[0].innerHTML = p2;
	document.querySelectorAll("div>p")[1].innerHTML = p1;
}

function dateAlter(){

	var author = document.querySelector("meta[name=author]");
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	  };
	var date =  new Date(document.lastModified).toLocaleDateString('fr-FR', options);
	document.getElementById("update-date").innerHTML="Derniere modification : le "+ date + " par : " + author.content;
}

function getNbDays(){

	var annee = new Date().getUTCFullYear();
	var d = new Date(annee,6,19,0,0,0);
	var jour = Math.round(d.getTime()/(1000*60*60*24));
	var auj =Math.round(Date.now()/(1000*60*60*24));
	var jRestant = jour-auj; var j = (jRestant>2) ? "jours" : "jour";
	document.getElementById("clique").innerHTML = "Il reste "+jRestant+" "+j+" avant le 19 juillet "+annee; 
}

function afficheH(){
	let d = new Date();
	document.getElementById("heure").innerHTML=d.getHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds();
}

function updateClock1(){
	window.setInterval(afficheH);
}

function updateClock2(){
	afficheH();
	window.setTimeout(updateClock2);
}

function setGraphicClock(){
	let d = new Date();
	let h1 = (d.getHours().toString()[1]!=null) ? d.getHours().toString()[0] : "0";
	let h2 = (d.getHours().toString()[1]!=null) ? d.getHours().toString()[1] : d.getHours().toString()[0] ;
	let m1 = (d.getMinutes().toString()[1]!=null) ? d.getMinutes().toString()[0] : "0";
	let m2 = (d.getMinutes().toString()[1]!=null) ? d.getMinutes().toString()[1] : d.getMinutes().toString()[0] ;
	let s1 = (d.getSeconds().toString()[1]!=null) ? d.getSeconds().toString()[0] : "0";
	let s2 = (d.getSeconds().toString()[1]!=null) ? d.getSeconds().toString()[1] : d.getSeconds().toString()[0] ;
	document.getElementById("graphic-clock").innerHTML=
	"<img src='./assets/images/"+ h1 +".gif' alt='h'  />"
	+ "<img src='./assets/images/"+ h2 +".gif' alt='h'  />"
	+ "<p>:</p>"
	+ "<img src='./assets/images/"+ m1 +".gif' alt='h'  />"
	+ "<img src='./assets/images/"+ m2 +".gif' alt='h'  />"
	+ "<p>:</p>"
	+ "<img src='./assets/images/"+ s1 +".gif' alt='h'  />"
	+ "<img src='./assets/images/"+ s2 +".gif' alt='h'  />"
}

function updateGraphicClock(){
	window.setInterval(setGraphicClock);
}

function changeColor(){
	var regex = /^\d+$/;
	var regex2 =  /^$/;
	if(regex.test(document.getElementById("change").value)) {
		document.getElementById("change").className = "green";
	}
	else if(regex2.test(document.getElementById("change").value)) {
		document.getElementById("change").className = "white";
	}
	else if(!regex.test(document.getElementById("change").value)) {
		document.getElementById("change").className = "red";
	}

}

function afficheiginfo(){
	if(document.getElementById("iginfocache") != null) {
		document.getElementById("iginfocache").id = "iginfo";
		document.getElementById("ig").innerHTML= "<img src='./assets/images/minus.gif' alt='h'  /> Informations Générales"
	}
	else if(document.getElementById("iginfo") != null) {
		document.getElementById("iginfo").id = "iginfocache";
		document.getElementById("ig").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Informations Générales"
	}
}

function afficheRinfo(){
	if(document.getElementById("rinfocache") != null) {
		document.getElementById("rinfocache").id = "rinfo";
		document.getElementById("r").innerHTML= "<img src='./assets/images/minus.gif' alt='h'  /> Recherche"
	}
	else if(document.getElementById("rinfo") != null) {
		document.getElementById("rinfo").id = "rinfocache";
		document.getElementById("r").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Recherche"
	}
}

function afficheEinfo(){
	if(document.getElementById("einfocache") != null) {
		document.getElementById("einfocache").id = "einfo";
		document.getElementById("e").innerHTML= "<img src='./assets/images/minus.gif' alt='h'  /> Enseignement"
	}
	else if(document.getElementById("einfo") != null) {
		document.getElementById("einfo").id = "einfocache";
		document.getElementById("e").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Enseignement"
	}
}

function affichePinfo(){
	if(document.getElementById("pinfocache") != null) {
		document.getElementById("pinfocache").id = "pinfo";
		document.getElementById("p").innerHTML= "<img src='./assets/images/minus.gif' alt='h'  /> Personnel"
	}
	else if(document.getElementById("pinfo") != null) {
		document.getElementById("pinfo").id = "pinfocache";
		document.getElementById("p").innerHTML= "<img src='./assets/images/plus.gif' alt='h'  /> Personnel"
	}
}

