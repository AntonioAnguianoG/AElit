window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

window.addEventListener("scroll", function(){
    var article = document.querySelector("article");
    article.classList.toggle("abajo3",window.scrollY>0);
})