console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// CHALLENGE 1 >>>>>>>>>>>>><<<<<<<<<<<<<<<<<
document.addEventListener("DOMContentLoaded", () => {
  getPuppies();
  getBreeds();
  dropDown();
});

function getPuppies() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => showAllPuppies(json['message']));
}

function showAllPuppies(obj) {
  for (const puppyUrl of obj) {
    const newPuppy = document.createElement('img')
    newPuppy.src = puppyUrl
    newPuppy.style = "height:150px;margin:10px;";
    const dogZone = document.querySelector('#dog-image-container')
    dogZone.appendChild(newPuppy)
  }
}

// CHALLENGE 2 & 3 >>>>>>>>>>>>><<<<<<<<<<<<<<<<<
function getBreeds() {
  fetch(breedUrl)
    .then(response => response.json())
    .then(json => fullPuppyList(json['message']));
}

function fullPuppyList(breedList) {
  for (const breed in breedList) {
    const newBreed = document.createElement('li');
    newBreed.innerText = breed;
    newBreed.addEventListener('click', function() {
        newBreed.style = "color:red;"
    });
    const breedZone = document.querySelector('#dog-breeds');
    breedZone.appendChild(newBreed);
  }
};

// CHALLENGE 4 >>>>>>>>>>>>><<<<<<<<<<<<<<<<<
function dropDown() {
  dropdown = document.querySelector('#breed-dropdown');
  dropdown.addEventListener('change', function() {
    allBreeds = document.querySelectorAll('li')
    for (const breed of allBreeds) {
      if (breed.innerText[0] != dropdown.value) {
        breed.style = "display:none;"
      } else {
        breed.style = "display:visible;"
      }
    }
  })
}
