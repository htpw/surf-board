let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.752004, 37.576133],
    zoom: 14.4,
    controls: []
  });

  const coords = [
    [55.752004, 37.576133]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable:false,
    iconLayout: 'default#image',
    iconImageHref: './img/icons/mark.png',
    iconImageSize: [58, 73],
    iconImageOffset: [-29, -73]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);
  
}

ymaps.ready(init);