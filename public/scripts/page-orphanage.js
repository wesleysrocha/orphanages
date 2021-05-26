// tipos de dados
// String ""
// Number 01
// Object {}
// Booleam true or false
// Array []
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// create map
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 15)

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



// Create and add marker

L.marker([-27.222633,-49.6455874], { icon })
.addTo(map)

/*image gallery*/

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active')

}
