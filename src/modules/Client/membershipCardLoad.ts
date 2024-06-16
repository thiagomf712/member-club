import { Client } from '../../services/fetchClientById'

const userIsElement = document.querySelector('#user-id') as HTMLSpanElement

const cardsContainerElement = document.querySelector(
  '.cards-container'
) as HTMLDivElement

export function membershipCardLoad(client: Client) {
  userIsElement.textContent = client.id

  cardsContainerElement.innerHTML = ''

  const { cutsNeeded, totalCuts } = client.loyaltyCard

  for (let index = 1; index <= cutsNeeded; index++) {
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')

    if (index === cutsNeeded && totalCuts === cutsNeeded) {
      const iconElement = document.createElement('img')
      iconElement.src = 'src/assets/PinGift.svg'

      cardElement.appendChild(iconElement)
    } else if (index === cutsNeeded && totalCuts < cutsNeeded) {
      const iconElement = document.createElement('img')
      iconElement.src = 'src/assets/Gift-Solid.svg'

      cardElement.appendChild(iconElement)
    } else if (index <= totalCuts) {
      const iconElement = document.createElement('img')
      iconElement.src = 'src/assets/PinCheck.png'

      cardElement.appendChild(iconElement)
    }

    cardsContainerElement.appendChild(cardElement)
  }
}
