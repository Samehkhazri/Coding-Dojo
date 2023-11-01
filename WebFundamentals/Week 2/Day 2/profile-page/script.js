//console.log("page loaded...");
function Delete(el){
	console.log(el.parentNode.parentNode);
	el.parentNode.parentNode.remove()
}
var nc = document.querySelector(".count")
function accept(el){
	Delete(el)
	nc.innerText = parseInt(nc.innerText.split('+')[0])+1+"+"
}
