import { Client } from '../../services/fetchClientById'

const userImageElement = document.querySelector(
  '.user-image > div > img'
) as HTMLImageElement

const userInfoElement = document.querySelector('.user-info') as HTMLDivElement

export function userInfoLoad(client: Client) {
  userImageElement.src = client.image

  const userNameElement = document.createElement('p')
  userNameElement.textContent = client.name

  const clientSinceElement = document.createElement('span')
  clientSinceElement.textContent = `Cliente desde ${client.clientSince}`

  userInfoElement.innerHTML = ''
  userInfoElement.append(userNameElement, clientSinceElement)
}
