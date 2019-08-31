console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
    dogImages()
    dogBreeds()
    dropdownMenu()
})


//challenge 1
function dogImages(){
    fetch(imgUrl)
    .then(response => response.json())
    .then (json => showImages(json['message']));

    function showImages(images){
        images.forEach(createImage)
    }

    function createImage(image){
        const img = document.createElement('img')
        img.src = image
        img.style.height='150px'
        const container = document.querySelector('#dog-image-container')
        container.appendChild(img)

    }
}

//challenge 2 & 3
function dogBreeds(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => showBreeds(json['message']));

    function showBreeds(breeds){
        for(const breed in breeds){
            listBreed(breed)
        }
    }

    function listBreed(breed){
        const list = document.querySelector('#dog-breeds')
        const li = document.createElement('li')
        li.innerText = breed
        list.appendChild(li)
        li.addEventListener('click', function(){
            event.target.style.color='green'
        })
    }
}

//challenge 4
function dropdownMenu(){
    dropList = document.querySelector('#breed-dropdown');
    dropList.addEventListener("change", function(){
        allBreeds = document.querySelectorAll('li')
        for (const breed of allBreeds) {
            if (breed.innerText[0] != dropList.value){
                breed.style='display:none;'
            } else {
                breed.style='display:visible'
            }
        }  
    })
}