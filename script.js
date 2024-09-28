const pokemon = document.getElementById('pokemon');
let step = 10; // El número de pixeles que se moverá el personaje

window.addEventListener('keydown', function (event) {
    let left = parseInt(window.getComputedStyle(pokemon).left);
    let top = parseInt(window.getComputedStyle(pokemon).top);

    switch (event.key) {
        case 'ArrowUp':
            pokemon.style.top = (top - step) + 'px';
            break;
        case 'ArrowDown':
            pokemon.style.top = (top + step) + 'px';
            break;
        case 'ArrowLeft':
            pokemon.style.left = (left - step) + 'px';
            break;
        case 'ArrowRight':
            pokemon.style.left = (left + step) + 'px';
            break;
    }
});
