const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function showPass() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById('eye').className = "btn fa fa-eye-slash mr-4"
  } else {
    x.type = "password";
    document.getElementById('eye').className = "btn fa fa-eye mr-4"
  }
}

function showPass2() {
  var x = document.getElementById("myInput2");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById('eye2').className = "btn fa fa-eye-slash mr-4"
  } else {
    x.type = "password";
    document.getElementById('eye2').className = "btn fa fa-eye mr-4"
  }
}