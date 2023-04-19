'use strict'

//4.3
const hakuAlku1 = "https://api.tvmaze.com/search/shows?q="
const tulosAlue = document.querySelector("#results")
const tvForm1 = document.querySelector('#tv3');

tvForm1.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const hakuArvo1 = document.querySelector('input[name=q]').value;
  const hakuLause1 = hakuAlku1 + hakuArvo1
  console.log("-- Hakulause: " + hakuLause1)

  try {
    const response = await fetch(
      hakuLause1
    );
    const jsonData = await response.json();
    console.log(jsonData);
    //tyhjennetään tulosalue
    tulosAlue.innerHTML = ``
    //haetaan tv-sarjasta tietoja
    for (let tvSarja of jsonData) {
      let h2Elem = document.createElement('h2')
      h2Elem.innerText = tvSarja.show.name
      tulosAlue.append(articleElem)
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

    }

  } catch (error) {
    console.log(error.message);
  }
});
