function abrirCarta() {
    let carta = document.querySelector('.carta');
    let envelope = document.querySelector('.envelope');
    let fotos = document.querySelector('.fotos');

    carta.style.display = 'block';
    envelope.style.transform = 'rotateX(180deg)';
    setTimeout(() => {
        fotos.style.display = 'flex';
    }, 1000);
}