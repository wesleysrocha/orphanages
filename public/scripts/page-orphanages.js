// tipos de dados
// String ""
// Number 01
// Object {}
// Booleam true or false
// Array []

// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "./public/images//map-marker.svg",
    iconsize: [58, 68],
    iconanchor: [29, 68],
    popupanchor: [170, 2],
})


// Create popup overLayer
const popup = L.popup({
    CloseButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')


// Create and add marker

L.marker([-27.222633,-49.6455874], { icon })
.addTo(map)
.bindPopup(popup)
