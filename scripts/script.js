let gitLink = document.getElementById("github-link");

document.getElementsByTagName("nav")[0].style.gridTemplateColumns = document.getElementsByTagName("nav")[0].offsetHeight + "px 50% auto";

function ghLinkHover(){
	document.getElementsByClassName("nav__name")[0].style.opacity = "0.5";
	document.getElementsByTagName("nav")[0].style.backgroundImage = "url(assets/images/github.png)";
}

function linkOut(){
	document.getElementsByClassName("nav__name")[0].style.opacity = "1";
	document.getElementsByTagName("nav")[0].style.backgroundImage = "none";
}

function smLinkHover(){
	document.getElementsByClassName("nav__name")[0].style.opacity = "0.5";
	document.getElementsByTagName("nav")[0].style.backgroundImage = "url(assets/images/vk.png)";
}

function showOrHide(){
	let list = document.getElementsByClassName("main__dropdown-list")[0];
	if(list.style.display == "none"){
		list.style.display = "flex";
		document.getElementById("show").style.visibility = "hidden";
		document.getElementById("hide").style.visibility = "visible";
	}
	else{
		list.style.display = "none";
		document.getElementById("hide").style.visibility = "hidden";
		document.getElementById("show").style.visibility = "visible";
	}
}

function move(delta, element){
	let currentValue = +element.style.left.replace("%", "");
	currentValue += delta;
	element.style.left = currentValue + "%";
}

let currentIndex = 0;

function goForward(){
	let project1 = document.getElementById("project1");
	let project2 = document.getElementById("project2");
	document.getElementById("next").style.disabled = true;
	document.getElementById("back").style.disabled = true;
	if(currentIndex){
		project1.style.left = "0%";
		project2.style.left = "-100%";
		let timerId1 = setInterval(move, 5, 1, project1);
		let timerId2 = setInterval(move, 5, 1, project2);
		setTimeout(clearInterval, 500, timerId1);
		setTimeout(clearInterval, 500, timerId2);
		currentIndex = 0;
	}
	else{
		project1.style.left = "-100%";
		project2.style.left = "0%";
		let timerId2 = setInterval(move, 5, 1, project2);
		let timerId1 = setInterval(move, 5, 1, project1);
		setTimeout(clearInterval, 500, timerId2);
		setTimeout(clearInterval, 500, timerId1);
		currentIndex = 1;
	}
	document.getElementById("next").style.disabled = false;
	document.getElementById("back").style.disabled = false;
}

function goBackward(){
	let project1 = document.getElementById("project1");
	let project2 = document.getElementById("project2");
	document.getElementById("next").style.disabled = true;
	document.getElementById("back").style.disabled = true;
	if(currentIndex){
		project1.style.left = "0%";
		project2.style.left = "100%";
		let timerId1 = setInterval(move, 5, -1, project1);
		let timerId2 = setInterval(move, 5, -1, project2);
		setTimeout(clearInterval, 500, timerId1);
		setTimeout(clearInterval, 500, timerId2);
		currentIndex = 0;
	}
	else{
		project1.style.left = "100%";
		project2.style.left = "0%";
		let timerId2 = setInterval(move, 5, -1, project2);
		let timerId1 = setInterval(move, 5, -1, project1);
		setTimeout(clearInterval, 500, timerId2);
		setTimeout(clearInterval, 500, timerId1);
		currentIndex = 1;
	}
	document.getElementById("next").style.disabled = false;
	document.getElementById("back").style.disabled = false;
}

showOrHide();