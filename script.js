// Variable has been declare to store values

var LLeftUl = document.getElementById("tsid-LeftUl");

var LLeftTextbox = document.getElementById("tsid-LeftTextBox");

var LLeftButton = document.getElementById("tsid-LeftBtn");


var LRightUl = document.getElementById("tsid-RightUl");

var LRightTextbox = document.getElementById("tsid-RightTextBox");

var LRightButton = document.getElementById("tsid-RightBtn");

// for accessing date and time I have created a object today
let LToday = new Date();

let LMonth = addZero(LToday.getMonth()+1);
let LYear = addZero(LToday.getFullYear());
let LDate = addZero(LToday.getDate());

let LHours = addZero(LToday.getHours());
let LMinutes = addZero(LToday.getMinutes());


let LCurr_time = `${LHours}:${LMinutes}`;

let LCurr_date = `${LDate}-${LMonth}-${LYear}`;

function addZero(num){
	return num< 10 ? `0${num}` : num;
}



// If someone clicks on send button of the left side div then this function will execute
LLeftButton.addEventListener("click", function(){

	var newMessage = document.createElement("li");
	var newMessageForRight = document.createElement("li");
	
	newMessage.innerHTML = LLeftTextbox.value;
	if(newMessage.innerHTML == ""){
		alert("Please write something to send");
	} else {
		
	newMessage.innerHTML +="<br>" + LCurr_date +","+ LCurr_time;

	newMessageForRight.innerHTML = "User1:  <br>" + LLeftTextbox.value ;
	newMessageForRight.innerHTML += "<br>" + LCurr_date + "," + LCurr_time;

	
	newMessage.style.backgroundColor = "rgb(95, 197, 231)";
	newMessageForRight.style.backgroundColor = "rgb(95, 197, 231)";

	newMessage.style.textAlign = "end";
	newMessageForRight.style.textAlign = "start";

	

	LLeftUl.appendChild(newMessage);
	LRightUl.appendChild( newMessageForRight);
	LLeftTextbox.value = "";
	document.getElementById('tsidClearL').scrollTop = newMessage.offsetHeight + newMessage.offsetTop; 


	}
	
	
});



// If someone clicks on send button of the Right side div then this function will execute
LRightButton.addEventListener("click", function(){

	var newMessage = document.createElement("li");
	var newMessageForLeft = document.createElement("li");
	
	newMessage.innerHTML = LRightTextbox.value;
	if(newMessage.innerHTML == ""){
		alert("Please write something to send");
	} else {

	newMessage.innerHTML +="<br>" + LCurr_date + "," + LCurr_time;
	newMessageForLeft.innerHTML = "User2: <br>" + LRightTextbox.value;
	newMessageForLeft.innerHTML += "<br>" + LCurr_date + "," + LCurr_time;
	newMessage.style.backgroundColor = "#fff";
	newMessageForLeft.style.backgroundColor = "#fff";

	newMessage.style.textAlign = "end";
	newMessageForLeft.style.textAlign = "start";


	LRightUl.appendChild(newMessage);
	LLeftUl.appendChild(newMessageForLeft);
	LRightTextbox.value = "";
	document.getElementById('tsidClearR').scrollTop = newMessage.offsetHeight + newMessage.offsetTop; 


	}
	
});



// Remove All Task From the List 
function clearAllListItems(elementID){

	var selectdiv = document.getElementById(elementID);
	var selectul = selectdiv.getElementsByTagName("ul")[0];
	var len = selectul.getElementsByTagName("li").length;
	for(var i=len-1;i>=0;i--){
    	var selectli = selectul.getElementsByTagName("li")[0];
    	selectul.removeChild(selectli);
	}
}
