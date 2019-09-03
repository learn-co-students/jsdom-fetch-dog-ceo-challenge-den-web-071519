console.log('%c HI', 'color: firebrick')

const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    allDogImgs()  
    allDogBreeds()
    dropDown()
})


function allDogImgs(){
    fetch(imgURL)
    .then(response =>response.json())
    .then(json => showDogPics(json['message']))
}

function showDogPics(imgArr){
    for (const image of imgArr) {        
        const pupImg = document.createElement('img')
        pupImg.src = image
        pupImg.style = 'height:200px; width:200px; margin:10px'
        const imgCont = document.querySelector('#dog-image-container')
        imgCont.appendChild(pupImg)
    }
}

function allDogBreeds(){
    fetch(breedUrl)
        .then(response => response.json())
        .then(json => showBreeds(json['message']))
}

function showBreeds(breedArr){
    for (const breed in breedArr){
        const breedList = document.createElement('li')
        breedList.innerText = breed
        breedList.addEventListener('click', function(){
            breedList.style = 'color:blue' 
        })
        const breedCont = document.querySelector('#dog-breeds')
        breedCont.appendChild(breedList)
    }
}

function dropDown(){
    drop = document.querySelector('#breed-dropdown')
    drop.addEventListener('change', function() {
        breeds = document.querySelectorAll('li')
        for (const breed of breeds) {
            if (breed.innerText[0] != drop.value) {
                breed.style = "display:none"
            } else {
                breed.style = "display:visible"
            }
        }
    })
}



