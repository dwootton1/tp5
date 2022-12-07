
window.onload = function() {
  
  document.querySelector("#header h1").classList.add("tp");
  document.querySelector("#header h1").onclick = function() { 
    
    this.classList.toggle("black");
    
  }
  
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
  
   document.querySelector("#recipeColumns #equipment").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
   
    document.querySelector("#recipeColumns #directions").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
    
    document.querySelector("recipeColumns #ingredients ol").innerHTML += "<li>A love of all things creamy</li>";
  
}
