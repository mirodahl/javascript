'use strict'
//etsitään img- ja p-tagit htmllästä
const imgElem = document.getElementById('target')
const pElem = document.querySelector('#trigger')

//asetetaan pElementille tapahtumankuuntelijat
//kuunnellaan tuleeko hiiri teksin päälle
pElem.addEventListener('mouseenter', function(){
  imgElem.src = "img/picB.jpg"
})

//kuunnellaan poistuuko hiiri
pElem.addEventListener('mouseleave', function(){
  imgElem.src = "img/picA.jpg"
})