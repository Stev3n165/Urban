document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const title = product.querySelector('h2').innerText.toLowerCase();
        if (title.includes(query)) {
            product.style.display = 'block'; // Muestra el producto si coincide
        } else {
            product.style.display = 'none'; // Oculta el producto si no coincide
        }
    });

    document.getElementById('search-input').value = ''; // Limpia la barra de búsqueda
});
