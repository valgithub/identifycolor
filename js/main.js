function myFunction() {
    var x = document.getElementById("myColor").value;
    document.getElementById("test").innerHTML = x;
}
function init(){
				var color=window.localStorage.getItem('myColor');
				document.getElementById("myColor").innerText=color;
			}			
init();