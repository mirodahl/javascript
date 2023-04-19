'use strict'

//4.4
//vinkki testaa onko show.image null tai onko show.image.medium null
//jos on niin laita 'not found' kuva, muuten sarjan kuva
let imgElem = document.createElement('img')
//varaudutaan medium kuvan puuttumiseen ?-operaattorilla
//jos image.medium löytyy niin otetaan sen arvo
//jos ei löydy nioin arvoksi tulee undefined
imgElem.src = tvSarja.show.image?.medium
imgElem.alt = tvSarja.show.name
