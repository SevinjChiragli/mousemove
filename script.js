let area = document.getElementById('area');
let element = document.getElementById('element');

const getCoordinate = (ev) => {
    let rect = area.getBoundingClientRect(); // Получаем границы области
    let coY = ev.clientY - rect.top;  // Координаты относительно области
    let coX = ev.clientX - rect.left;

    // Ограничение движения элемента в пределах области

    if (coY > (rect.height - element.offsetHeight) || 
    coX > (rect.width - element.offsetWidth) || coY < 0 || coX < 0) {
        return;
    }

    element.style.left = `${coX}px`;
    element.style.top = `${coY}px`;
}

element.addEventListener('mousedown', () => {
    area.addEventListener('mousemove', getCoordinate);
});

element.addEventListener('mouseup', () => {
    area.removeEventListener('mousemove', getCoordinate);
});

document.body.addEventListener('mouseup', () => {
    area.removeEventListener('mousemove', getCoordinate);
});