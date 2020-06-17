
function populatesUFs() {
    const ufSelect = document.querySelector("select[name=uf");


    //then = resposta de sucesso API
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json() }) // Quando uso o fetch tenho que transforma em json

    //resposta da API
    .then( states => {
        for( const state of states) {
            ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`;
        }
    })
}
populatesUFs() //Executando a função

//iremos receber "event" quando ocorrer alteração
function getCities (event) {
    const citySelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=state]");

    const ufValue = event.target.value  //target é o elemento que eu selecionei
                                        //Value é o que foi selecionado

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    //console.log(event.target.value)//

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for( const city of cities ) {
            citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })

}
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

    //Evento change vai ser executado quando houver alteração


//Itens de coleta//
//Pegar todos os li´s
const itemsToCollect = document.querySelectorAll(".items-grid li") //Criei uma var para selecionar todos os items que estiver dentro de items-grid na li//
for /*Estrutura de repetição*/ (const item of itemsToCollect) /*Para cada um deles iremos fazer alguma coisa no item*/{
    item.addEventListener('click'/*Vai ouvir a function click*/, handleSelectedItem /*Função*/)
}


const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem (event) {
    const itemLI = event.target
    // adicionar ou remover uma classe com javascript
    itemLI.classList.toggle("selected") /* toggle faz a função de adicionar ou remover*/
    const itemId = itemLI.dataset.id

    //verificar se existem items selecionados, se sim
    //pegar os items selecionados       //findIndex, procurar pelo Index
    const alreadySelected = selectedItems.findIndex(item =>{
        const itemFound = item == itemId //isso será true ou false
        return itemFound
    })

    //Se já estiver selecionado, remover da seleção
    if ( alreadySelected  >= 0) {
        //Tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

       selectedItems = filteredItems
    } else {
        //Se não estiver selecionado
        //adicionar a seleção
        selectedItems.push(itemId) //adicionar o item
         array
    }

    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
}





