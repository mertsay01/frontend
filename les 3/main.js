const dancing = document.getElementById("js--dancing");
const sansserif = document.getElementById("js--sansserif");
const serif = document.getElementById("js--serif");
const input = document.getElementById("js--input")

input.onchange = function(event){
    dancing.innerText = event.target.value;
    sansserif.innerText = event.target.value;
    serif.innerText = event.target.value;
}

const hartje = document.getElementsByClassName("showcase__hartje");
for(let i = 0; i < hartje.length; i++){
    hartje[i].onclick = function(event){
        for(let i = 0; i < hartje.length; i++){
            hartje[i].classList = "fa-regular fa-heart showcase__hartje";
        }
        hartje[i].classList = "fa-solid fa-heart showcase__hartje";
    }
}

const toggle = document.getElementById("toggle");
const header = document.querySelector("header");
const showcase = document.querySelector("article");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle("bi-brightness-high-fill")){
        header.style.backgroundColor = "#2c3333";
        showcase.style.backgroundColor = "#2c3333";
    }
    else{
        header.style.backgroundColor = "#fbf8f1";
        showcase.style.backgroundColor = "#fbf8f1";
    }
})

