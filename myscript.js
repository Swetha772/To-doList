
var myNodeList=document.getElementsByTagName("li");
var i;
function add_close(){
for(i=0;i<myNodeList.length;i++)
{
var btn=document.createElement("button");
var txt=document.createTextNode("close");
btn.appendChild(txt);
btn.className="close";
myNodeList[i].appendChild(btn);
}
var closeList=document.getElementsByClassName("close");
for(i=0;i<closeList.length;i++)
{
closeList[i].addEventListener("click",function()
{
var div=this.parentElement;
div.style.display="none";
});
}
}

function add_mark()
{
for(i=0;i<myNodeList.length;i++)
{
var btn=document.createElement("button");
var txt=document.createTextNode("mark");
btn.appendChild(txt);
btn.className="mark";
myNodeList[i].appendChild(btn);
}
var markList=document.getElementsByClassName("mark");
for(i=0;i<markList.length;i++)
{
markList[i].addEventListener("click",function()
{
var div=this.parentElement;
div.classList.toggle("checked");
});
}
}


function add_actions()
{
	var txt=document.getElementById("add_elements").value;
	var li_element=document.createElement("li");
	var txt_element=document.createTextNode(txt);
	li_element.appendChild(txt_element);
	if(txt==='')
	{
		alert("Enter something..");
	}
    else
	{
		document.getElementById("myList").appendChild(li_element);
	}
	document.getElementById("add_elements").value='';
    
	var btn=document.createElement("button");
	var txt=document.createTextNode("close");
	btn.appendChild(txt);
	btn.className="close";
	li_element.appendChild(btn);
	
	var btn=document.createElement("button");
	var txt=document.createTextNode("mark");
	btn.appendChild(txt);
	btn.className="mark";
	li_element.appendChild(btn);
	var closeList=document.getElementsByClassName("close");
	closeList[closeList.length-1].addEventListener("click",function()
	{
		var div=this.parentElement;
		div.style.display="none";
	});
	var markList=document.getElementsByClassName("mark");
	markList[markList.length-1].addEventListener("click",function()
	{
		var div=this.parentElement;
		div.classList.toggle("checked");
	});
	
	
}