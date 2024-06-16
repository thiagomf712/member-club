const modalElement = document.querySelector('#modal') as HTMLDivElement
const modalContentElement = document.querySelector(
  '#modal > .modal-content'
) as HTMLDivElement
const modalCloseButton = document.querySelector(
  '#modal-close-button'
) as HTMLDivElement

modalCloseButton.onclick = () => {
  modalElement.style.display = 'none'
}

document.onkeyup = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && modalElement.style.display !== 'none') {
    modalElement.style.display = 'none'
  }
}

modalElement.onclick = (_: MouseEvent) => {
  modalElement.style.display = 'none'
}

modalContentElement.onclick = (event: MouseEvent) => {
  event.stopPropagation()
}
