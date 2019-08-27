console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', event => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => (resp.json()))
        .then(json => addImages(json['message']))

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => (resp.json()))
        .then(json => addBreeds(json['message']))

    document.getElementById('breed-dropdown').onchange = function() {
        filterDogs(document.getElementById('breed-dropdown').value)
    };
})

function addImages(json) {
    json.forEach(function(e){
        const img = document.createElement('img')
        img.src = e
        document.body.appendChild(img)
    })
}

function addBreeds(json){
        document.querySelector('ul').remove()
        const ul = document.createElement('ul')
        ul.id = 'this-ul'
        document.body.appendChild(ul)
        for (var key in json) {
            const li = document.createElement('li')
            li.innerText = key
            li.id = key 
            ul.appendChild(li)
            li.addEventListener('click', function(e){
                if (li.style.color == 'blue') {
                    li.style.color = 'black'
                } else {
                    li.style.color = 'blue'
                }
            })
        }
}

function filterDogs(letter){
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => (resp.json()))
        .then(json => addByBreed(json['message'], letter))
}

function addByBreed(json, letter){
    const filteredNames = {}
    for (var key in json) {
        if (key[0] == letter) {
            filteredNames[key] = []
        }
    }
    addBreeds(filteredNames)
}

