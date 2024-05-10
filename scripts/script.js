window.addEventListener("scroll", function(){
    var opcao1 = document.querySelector(".op1")
    var opcao2 = document.querySelector(".op2")
    var opcao3 = document.querySelector(".op3")
    var menu = document.getElementsByName("nav#menu")
    if (this.window.scrollY > 50){
        opcao3.classList.add("movit-menu1")
    } else{
        opcao3.classList.remove("movit-menu1")
    }
    if (this.window.scrollY > 150){
        opcao3.classList.add("movit-menu2")
        opcao2.classList.add("movit-menu1")
    } else{
        opcao3.classList.remove("movit-menu2")
        opcao2.classList.remove("movit-menu1")
    }
    if (this.window.scrollY > 250){
        opcao1.classList.add("movit-menu1")
        opcao2.classList.add("movit-menu2")
        opcao3.classList.add("movit-menu3")
        
    } else{
        opcao1.classList.remove("movit-menu1")
        opcao2.classList.remove("movit-menu2")
        opcao3.classList.remove("movit-menu3")
    }
})