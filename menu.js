var nav = document.querySelector(".nav"); 
var toggle = document.querySelector(".toggle"); 
var btn = document.getElementsByClassName("dd_btn"); 
var menu = document.getElementsByClassName("sub_menu");

var navStatus = true;
toggle.addEventListener("click", function(){ 
	 if (navStatus === true){
		 nav.style.left='0px';
		 toggle.style.left = '250px';
		 navStatus = false;
	 }
	 else if(navStatus === false){
		 nav.style.left= '-250px';
		 toggle.style.left = '15px';
		 navStatus = true;
	 }
}) 



/* function reset(){
for (var a = 0; a < menu.length; a++) {
  menu[a].classList.add('hide');
 }
	
}

reset();

for ( let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function(){
		
	})
}
 */