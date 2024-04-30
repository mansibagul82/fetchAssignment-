
let container = document.getElementById("container")

let select = document.getElementById("select")

let allOption = document.getElementsByClassName("sortCountry")

let asc = document.getElementsByClassName("sortAscending")

let desc = document.getElementsByClassName("sortDescending")

select.addEventListener("change", function(event){
    let value = event.target.value
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`)
})

const getData = async (API) =>{
    
    let res = await fetch(API)
    let data = await res.json()
    showData(data.data)

}

function showData(arr){

    container.innerHTML = ""
    arr.forEach((ele, i) => {

        let div = document.createElement("div")
        div.style.borderRadius = "118px"
        div.style.marginBottom  = "4%"
        div.style.padding = "4%"
        div.style.backgroundColor = "rgb(230, 230, 230)"

        let countryName = document.createElement("h3")
        countryName.innerText = `CountryName: ${ele.country}`

        let rank = document.createElement(("h4"))
        rank.innerText = `Country Rank: ${ele.Rank}`
        rank.style.color = "rgb(7, 86, 7)"

        let population  = document.createElement("h4")
        population.style.fontFamily = "cursive"
        population.style.color = "rgb(215, 12, 79)"
        population.innerText = `Country Population: ${ele.population}`
        
        div.append(countryName,rank,population)

        container.append(div)
    })
    // arr.sort((A,B) => {
    //     A.population - B.population
    // })
}

getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`)
