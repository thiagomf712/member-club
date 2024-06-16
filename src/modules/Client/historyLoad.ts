import { Client } from '../../services/fetchClientById'

const historyListElement = document.querySelector(
  '#history > ul'
) as HTMLUListElement

export function historyLoad(client: Client) {
  historyListElement.innerHTML = ''

  client.appointmentHistory.forEach((appointment) => {
    const appointmentElement = document.createElement('li')

    const infoElement = document.createElement('div')

    const dateElement = document.createElement('p')
    dateElement.textContent = appointment.date

    const timeElement = document.createElement('span')
    timeElement.textContent = appointment.time

    infoElement.append(dateElement, timeElement)

    const iconElement = document.createElement('img')
    iconElement.src = 'src/assets/SealCheck.svg'

    appointmentElement.append(infoElement, iconElement)

    historyListElement.appendChild(appointmentElement)
  })
}
