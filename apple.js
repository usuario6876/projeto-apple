const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image")


//para verificar o elemento clicado
buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e);

        //para apagar a cor anterior
        buttons.forEach((btn)=>
        btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;
//verificando o id do botão
    const id = button.getAttribute("id");

//vai pegar o elemento das cores
    button.querySelector(".color").classList.add("selected");

//criando um efeito de opacity do CSS para trocar as cores pelo id
image.classList.toggle("changing");
image.setAttribute("src", `img/iPhone_${id}.jpg`);

    setTimeout(()=>{
        image.classList.toggle("changing")
    },200)
});
});