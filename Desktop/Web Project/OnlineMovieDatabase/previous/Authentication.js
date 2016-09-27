function showResult()
{
	var str = document.getElementById("search");

	if (str.value == "") 
	{ 
	    document.getElementById("livesearch").innerHTML = "";
	    document.getElementById("livesearch").style.border = "0px";
	}

	else
	{
		var xmlhttp = new XMLHttpRequest();
		var data = 'search='+str.value;
		xmlhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) 
		    {
		      document.getElementById("livesearch").innerHTML = this.responseText;
		      document.getElementById("livesearch").style.border = "1px solid #A5ACB2";
		    }
		};

		xmlhttp.open("POST", "Search_Process.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(data);
	}
}

function login()
{
	var z = 0;

	if(document.getElementById("user_name").value != "")
	{	
		document.getElementById("chkuname").innerHTML = "";
		z = z+1;
	}
	else
		document.getElementById("chkuname").innerHTML = "Please enter Username";
	
	if(document.getElementById("password").value != "")
	{
		document.getElementById("chkpwd").innerHTML = "";
		z = z+1;
	}
	else
		document.getElementById("chkpwd").innerHTML = "Please enter Password";	
		

	if(z == 2)
	{	
		//AJAX
		var xmlhttp = new XMLHttpRequest();
		var a = document.getElementById("user_name").value;
		var b = document.getElementById("password").value;
		var data = 'user_name='+a+'&password='+b;
	    xmlhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	            if(this.responseText != "")
	            	document.getElementById("txtHint").innerHTML = this.responseText;
	            else
	            	window.location = "layout.php";
	        }
	    };
	    xmlhttp.open("POST", "Login_Process.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(data);
	}
}

function check()
{
	var x = document.getElementById("pwd1");
	var y = document.getElementById("pwd2");

	if(x.value != y.value)
		document.getElementById("alert").innerHTML = "Password values don't match";
	else
		document.getElementById("alert").innerHTML = "";
}

function chkpwd(x)
{
	if(document.getElementById("username").value == "")
		document.getElementById("alert").innerHTML = "Please enter Username";
	else
	{
		document.getElementById("alert").innerHTML = "";
		x.type = "submit";
		document.getElementById("rtpwd").submit();
	}	
}

function validate()
{
	var a = document.getElementById("fname");
	var g = document.getElementById("lname");
	var b = document.getElementById("email");
	var c = document.getElementById("username");
	var d = document.getElementById("pwd1");
	var e = document.getElementById("pwd2");
	var z = 0;

	if(/^[a-zA-Z]*$/g.test(a.value) && a.value != "")
	{
		document.getElementById("chkfname").innerHTML = "";
		z=z+1;
	}
	else if(a.value == "")
		document.getElementById("chkfname").innerHTML = "Please enter your First Name";
	else
		document.getElementById("chkfname").innerHTML = "First Name should not have number or special characters";


	if(/^[a-zA-Z]*$/g.test(g.value) && g.value != "")
	{
		document.getElementById("chklname").innerHTML = "";
		z=z+1;
	}
	else if(g.value == "")
		document.getElementById("chklname").innerHTML = "Please enter your Last Name";
	else
		document.getElementById("chklname").innerHTML = "Last Name should not have number or special characters";

	if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(b.value) && b.value != "")
	{
		document.getElementById("chkemail").innerHTML = "";
		z=z+1;
	}
	else if(b.value == "")
		document.getElementById("chkemail").innerHTML = "Please enter your Email-ID";
	else
		document.getElementById("chkemail").innerHTML = "Enter a valid Email-ID";


	if(c.value != "")
	{
		z=z+1;
		document.getElementById("chkuname").innerHTML = "";
	}
	else
		document.getElementById("chkuname").innerHTML = "Please enter your Username";


	if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g.test(d.value) && a.value != "")
	{
		document.getElementById("chkpwd").innerHTML = "";
		z=z+1;
	}
	else if(d.value == "")
		document.getElementById("chkpwd").innerHTML = "Please enter a Password";
	else
		document.getElementById("chkpwd").innerHTML = "Password should be >=8 characters, with one Upper Case and Special Character";


	if(e.value != "")
		z=z+1;
	else
		document.getElementById("alert").innerHTML = "Please re-enter your Password";


	if(z == 6)
	{
		var xmlhttp = new XMLHttpRequest();
		var data = 'fname='+a.value+'&lname='+g.value+'&email='+b.value+'&username='+c.value+'&pwd1='+d.value;
	    xmlhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	            document.getElementById("txtHint").innerHTML = this.responseText;
	        }
	    };
	    xmlhttp.open("POST", "SignUp_Process.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(data);
	}
}