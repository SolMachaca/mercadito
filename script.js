document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { nombre: 'Coca Cola', precio: 600, imagen: 'img/coquita2.jpg' },
        { nombre: 'Hamburguesa Paty', precio: 2000, imagen: 'img/paty.jpg' },
        { nombre: 'Papa Lays', precio: 1500, imagen: 'img/lays.jpg' },
        { nombre: 'Sprite', precio: 500, imagen: 'img/sprite.jpg' },
        { nombre: 'Fanta', precio: 550, imagen: 'img/fanta.jpg' },
        { nombre: 'Hamburguesas Swift', precio: 1500, imagen: 'img/swit.jpg' },
        { nombre: 'Cereal Nesquik', precio: 900, imagen: 'img/cereal.jpg' },
        { nombre: 'Hamburguesas Paty', precio: 2500, imagen: 'img/paty.jpg' },
        { nombre: 'Producto 3', precio: 15, imagen: 'img/ala.jpg' },
        { nombre: 'Producto 1', precio: 10, imagen: 'img/dulce.jpg' },
        { nombre: 'Producto 2', precio: 20, imagen: 'img/paty.jpg' },
        { nombre: 'Producto 3', precio: 15, imagen: 'img/lays.jpg' },
    ];

    const productosContainer = document.getElementById('productos');

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
            </div>
        `;
        productosContainer.innerHTML += productoHTML;
    });
});
