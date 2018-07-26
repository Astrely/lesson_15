function allowAsses() {
	alert(" Доступ разрешен!");
	console.log("Пользователь допущен!");
	}
function checkAccess() {
	var name = document.getElementById("Id").value;
	var age = document.getElementById("Age").value;
	var n = 18;
	var check;
	var bool = age>n;
	if (document.getElementById("ch").checked) {
 		check=1;
	}
	else {
		check=0;
	}
 	if ( (bool)&&(check) ) {
 		allowAsses();
 	}
 	else {
 		alert(" Доступ запрещен!!!");
 		}
	}
