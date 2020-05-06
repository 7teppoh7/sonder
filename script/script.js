/*
// 1

var human1 = {
	name: "Владислав",
	firstname: "Лаптев",
	age: 18,
	sex: "male"
};

var human2 = new Object();
human2.name = "Сергей";
human2.firstname = "Куликов";
human2.age = 21;
human2.sex = "male";

//2

human1.calcBirth = function() {
	let date = new Date(2019);
	this.birth = date - this.age;
};

human1.calcCourse = function(){
	this.course = this.age - 17;
}

human1.calcBirth();
human1.calcCourse();

alert(human1.birth); 
alert(human1.course);

//3

var Student = function(name, firstname, age, sex){
	this.name = name;
	this.firstname = firstname;
	this.age = age;
	this.sex = sex;
}

Student.prototype.university = [];

Student.prototype.setUn = function(){
	this.university = prompt("Где " + this.name + " " + this.firstname + " учится?");
}

var student1 = new Student("Мария", "Московская", 21, "female");
student1.setUn();

var student2 = new Student("Анатолий", "Шкаф", 19, "male");
student2.setUn();

Student.prototype.calcCourse = function(){
	this.course = this.age - 17;
}

Student.prototype.checkStudents = function(obj1, obj2){
	if (obj1.university == obj2.university){ 
		alert("Эти студенты учатся в одном вузе");
	} else { 
		alert("Эти студенты учатся в разных вузах")
	}
	if (obj1.course == undefined) obj1.calcCourse();
	if (obj2.course == undefined) obj2.calcCourse();
	if (obj1.course == obj2.course){
		alert("Эти студенты учатся на одном курсе");
	} else { 
		alert("Эти студенты учатся на разных курсах")
	}
}

var check = new Student().checkStudents(student1, student2);
console.log(student1);

//////////////////////////////////////////////////////////////////////
*/
var a = 1;
var q = 1;
var rigA = [1, 0, 2, 3, 1, 1, 7, 0, 0, 2];
var endA = 1; 
var b = 1;

window.onload = function(){
	if (localStorage.getItem("theme") != null){
		var theme = localStorage.getItem("theme");
		if (theme == "white"){
			a = 1;
			change();
		}
	}
}

function change(){
	a++;
	var menu = document.getElementById("menu");
	var elements = menu.getElementsByTagName("a");
	var menuM = document.getElementById("iphonemenu");
	var elementsM = menuM.getElementsByTagName("a");
	if (a == 2){
		document.getElementsByTagName("body")[0].style.backgroundColor = "white";
		document.getElementById("iphone").style.backgroundColor = "white";
		document.getElementById("iphonemenu").style.backgroundColor = "white";

		for (var i = 0; i < elements.length; i++){
			elements[i].style.color = "black";
			elementsM[i].style.color = "red";
			if (i == (elements.length - 1)){
				elements[i].innerHTML = "ЗАТЕМНИТЬ";
				elementsM[i].innerHTML = "ЗАТЕМНИТЬ";
			}
		}
		var grad = document.getElementById("indexart");
		if (grad) grad.style.background = "white";
		document.getElementById("info1").style.color = "black";
		document.getElementById("links").style.color = "black";
		a = 0; 
		localStorage.setItem("theme", "white");
	} else {
		document.getElementsByTagName("body")[0].style.backgroundColor = "black";
		document.getElementById("iphone").style.backgroundColor = "black";
		document.getElementById("iphonemenu").style.backgroundColor = "black";
		for (var i = 0; i < elements.length; i++){
			elements[i].style.color = "grey";
			elementsM[i].style.color = "orange";
			if (i == (elements.length - 1)){
				elements[i].innerHTML = "ОСВЕТИТЬ";
				elementsM[i].innerHTML = "ОСВЕТИТЬ";
			}
		}
		var grad = document.getElementById("indexart");
		if (grad) grad.style.background = "radial-gradient(60% 50%, #CCCCCC, black)";
		document.getElementById("info1").style.color = "#CCCCCC";
		document.getElementById("links").style.color = "#CCCCCC";
		localStorage.setItem("theme", "black");
	}
}

var quests = document.getElementsByClassName("q")

function next(){
	var curA;
	var ans = document.getElementsByName("quest" + q);
	for (var i = 0; i < ans.length; i++){
		if (ans[i].checked){
			curA = i;
		}
	}
	if (curA == rigA[q - 1]) endA++;

	curQ="q"+q;
	q++;
	if (q == 11){
		document.getElementsByClassName("numq")[0].style.display = "none";
		document.getElementsByClassName("nextq")[0].style.display = "none";
		document.getElementsByClassName("q11")[2].style.display = "block";
	}
	nexQ="q"+q;
	document.getElementsByClassName("numq")[0].innerHTML = "Вопрос " + q + " из 10:"
	document.getElementsByClassName(curQ)[0].style.display = "none";
	document.getElementsByClassName(nexQ)[0].style.display = "block";
	document.getElementsByClassName(curQ)[1].style.display = "none";
	document.getElementsByClassName(nexQ)[1].style.display = "grid";
} 

function openmenu(){
	if (b == 1){
		document.getElementById("iphonemenu").className = "iphonemenu2";
		b++;
	} else {
		document.getElementById("iphonemenu").className = "iphonemenu1";
		b--;
	}
}

function start(){
	var elem = document.getElementsByClassName("starttest");
	for (var i =  0; i < elem.length; i++) {
		elem[i].style.display = "none";
	}
	document.getElementsByClassName("q1")[0].style.display = "block";
	document.getElementsByClassName("q1")[1].style.display = "grid";
	document.getElementsByClassName("question")[0].style.display = "block";
	document.getElementsByClassName("question")[1].style.display = "block";
	document.getElementsByClassName("nextq")[0].style.display = "block";
}

function end(){
	document.getElementsByClassName("q11")[1].innerHTML = "Поздравляем! Вы набрали " + endA*10 + "% правильных ответов!"
	document.getElementsByClassName("endtest")[0].style.display = "none";
	var text = document.getElementsByClassName("result");
	var button = document.getElementsByClassName("butend");
	button[0].style.display = "grid";
	text[0].style.display = "block"; //текст
	text[1].style.display = "block"; //div
	text[2].style.display = "block"; //input
	if (endA == 10){
		text[0].innerHTML = "Всё верно? Вы случайно не создатель теста? Признавайтесь, вам подсказывали? Ну ладно, наверно у вас просто отличная интуиция! Поздравляем, вы выиграли бесплатный билет на наш концерт! Когда он состоится, конечно.";
	} else if (endA > 7){
		text[0].innerHTML = "Отличный результат! Возможно, вы были на наших концертах. Вполне вероятно, вы с нами знакомы. А может быть вы играете у нас на гитаре.";
	} else if (endA > 3){
		text[0].innerHTML = "Вполне неплохой результат! Надеюсь, у вас появилось желание узнать нас получше! Следите за нами везде где можно, мы открыты для общения."
	} else{
		text[0].innerHTML = "Кхм... Спасибо за попытку!"
	}
	text[1].innerHTML = "Хотите сохранить свой результат? Тогда введите своё имя. Вы также можете посмотреть результаты других посетителей"
	document.getElementsByClassName("result")[1].style.display = "block";
	text[3].style.display = "block";
	text[4].style.display = "block";
}

function save(){
	var username = document.form.user.value;

	var User = function(name, ans){
	this.name = name;
	this.ans = endA;
	this.time = new Date();
	}

	var newuser = new User(username, endA);
	var data = [];
	if (JSON.parse(localStorage.getItem("users")) != null){
		data = JSON.parse(localStorage.getItem("users"));
	}
	data.push(newuser);
	localStorage.setItem("users", JSON.stringify(data));
	document.getElementsByClassName("result")[0].innerHTML = "Ваши резульаты сохранены";
	document.getElementsByClassName("result")[1].style.display = "none";
	document.getElementsByClassName("result")[2].style.display = "none";
	document.getElementById("save").style.display = "none";
	document.getElementsByClassName("butend")[0].style.gridTemplateColumns = "auto";

}
