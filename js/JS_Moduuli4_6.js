'use strict'

const hakuAlku = "https://api.chucknorris.io/jokes/search?query="
const tulosAlue = document.querySelector("#results")
const tvForm = document.querySelector('#chuck');

tvForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const hakuArvo = document.querySelector('input[name=query]').value;
  const hakuLause = hakuAlku + hakuArvo
  console.log("-- Hakulause: " + hakuLause)

  try {
    const response = await fetch(
      hakuLause
    );
    const jsonData = await response.json();
    console.log(jsonData);

    tulosAlue.innerHTML = ``

    for (const value of jsonData.result) {
      console.log(value)
      //console.log(jsonData)

        let articleElem = document.createElement('article')
        let paragElem = document.createElement('p')
        paragElem.innerHTML = jsonData.result.value;
        console.log(paragElem)
        articleElem.appendChild(paragElem)
        tulosAlue.append(articleElem)
    }

  } catch (error) {
    console.log(error.message);
  }
});