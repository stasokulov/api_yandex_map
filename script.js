const mapHolder = document.querySelector('#map');
const but = document.querySelector('#but');
but.addEventListener( 'click', ()=>getMap() );


function getMap() {
    let latitude = document.querySelector('#latitude').value;
    let longitude = document.querySelector('#longitude').value;

    mapHolder.innerHTML = '';

    // Создание карты.
    ymaps.ready(function() { 
       let myMap = new ymaps.Map("map", {
           center: [latitude, longitude],
           zoom: 7
       });
   });
};
