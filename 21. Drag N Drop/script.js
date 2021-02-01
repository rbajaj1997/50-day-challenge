const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty => {
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('drop', dragDrop);
})

function dragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.remove('fill'), 0);
}
function dragEnd() {
    this.classList.remove('hold');
    this.classList.add('fill');
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}
function dragLeave() {
    this.classList.remove('hovered');
}
function dragDrop() {
    this.classList.remove('hovered');
    this.append(fill);
}