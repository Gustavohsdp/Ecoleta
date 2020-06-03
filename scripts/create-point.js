

function populatesUFs() {
    const ufSelect = document.querySelector("select[name=uf")



    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json() })
    .then( states => {
        for( const state of states) {
            ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`
        }
    })
}
populatesUFs()

function getCity (event) {
    const citySelect = document.querySelector("[name=city]")
    const ufInput = document.querySelector("[name=uf]")

    const ufValue = event.target.value

    const indexOfSelecteduf = event.target.selectedIndex
    ufInput.value = event.target.options[indexOfSelecteduf].text

    //console.log(event.target.value)//

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then( (res) => {return res.json() })
    .then( City => {
        for( const city of City) {
            citySelect.innerHTML +=`<option value="${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })

}

document.querySelector("select[name=uf]");
document.addEventListener("change",getCity)



