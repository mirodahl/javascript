'use strict'

//4.3
const hakuAlku = "https://api.tvmaze.com/search/shows?q="
const tulosAlue = document.querySelector("#results")
const tvForm = document.querySelector('#tv');

tvForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const hakuArvo = document.querySelector('input[name=q]').value;
  const hakuLause = hakuAlku + hakuArvo
  console.log("-- Hakulause: " + hakuLause)

  try {
    const response = await fetch(
      hakuLause
    );
    const jsonData = await response.json();
    console.log(jsonData);
    //tyhjennetään tulosalue
    tulosAlue.innerHTML = ``
    //haetaan tv-sarjasta tietoja
    for (let tvSarja of jsonData) {
      let h2Elem = document.createElement('h2')
      h2Elem.innerText = tvSarja.show.name
      let imgElem = document.createElement('img')
      imgElem.src = tvSarja.show.image?.medium
      imgElem.alt = tvSarja.show.name
      let linkElem = document.createElement('a')
      linkElem.innerText = tvSarja.show.url
      let divElem = document.createElement('div')
      divElem.innerHTML = tvSarja.show.summary

      let articleElem = document.createElement('article')
      articleElem.appendChild(h2Elem)
      articleElem.appendChild(imgElem)
      articleElem.appendChild(divElem)
      articleElem.appendChild(linkElem)

      tulosAlue.append(articleElem)

    }

  } catch (error) {
    console.log(error.message);
  }
});
