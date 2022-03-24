import{ listaProdutosPubli } from "../controllers/script.js"
import{ CardCarrinho } from "./cart.js"
import{ produto } from "../controllers/script.js"

const qtdCarrinho   = document.querySelector(".divQuantidadeCarrinho")
const ulCarrinho    = document.querySelector(".vitrineCarrinho-Listar")
const totalProdutos = document.querySelector(".divTotalCarrinho")


export class CardProduto{
    constructor(imgUrl, categoria, nomeProduto, descricao, preco, idProduto){
        this.imgUrl      = imgUrl
        this.categoria   = categoria
        this.nomeProduto = nomeProduto
        this.descricao   = descricao
        this.preco       = preco
        this.idProduto   = idProduto

        this.liCardapio  = document.createElement("li")
        this.liCardapio.classList.add("vitrineCardapio-produtos-listar")
        this.liCardapio.addEventListener("click", this)
    }

    criarTemplate(elementoPai){
        this.liCardapio.innerHTML = `
                <img class="imgCardapio" src="${this.imgUrl}" alt="">
                <h2 class="h2Cardapio">${this.nomeProduto}</h2>
                <p>${this.descricao}</p>
                <span class="categoriaTemplateCardapiro"> ${this.categoria} </span>
                <div class="divPreco">
                    <span class="preco">R$: ${this.preco.toFixed(2)}</span> 
                    <button class="btnAddCarrinho"><img class="imgCart" src="./src/img/carrinho1.png" alt=""></button>
                </div>
        `;
        elementoPai.appendChild(this.liCardapio)
    }

    handleEvent(){
        ulCarrinho.innerHTML = ""
        produto.push(listaProdutosPubli.filter((elemento) => {
            return elemento.id === this.idProduto   
        })[0])
        produto.forEach((elemento)=>{
            if(elemento.id == elemento.id){
                const liCarrinho = new CardCarrinho(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.id)
                liCarrinho.templateCarrinho(ulCarrinho)
            }
        })
        this.quantidadeCarrinho()
        this.somaTotal()
    }
    quantidadeCarrinho(){
        return qtdCarrinho.innerHTML = `Quantidade ${produto.length}`
    }
    somaTotal(){
        let soma = 0
        produto.map((elemento) =>{
            soma += elemento.preco
            return  totalProdutos.innerHTML = `Total R$:  ${soma.toFixed(2)}`  
        })
    }
}





