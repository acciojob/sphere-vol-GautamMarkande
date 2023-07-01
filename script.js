function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let rad = document.getElementById("radius").value;
	let ans = (4/3)*Math.PI*(rad*rad*rad);
	let vol = document.getElementById("volume").value=ans;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
