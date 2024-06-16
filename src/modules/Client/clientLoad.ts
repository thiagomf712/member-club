import { Client } from '../../services/fetchClientById'
import { historyLoad } from './historyLoad'
import { membershipCardLoad } from './membershipCardLoad'
import { progressLoad } from './progressLoad'
import { userInfoLoad } from './userInfoLoad'

const modalElement = document.querySelector('#modal') as HTMLDivElement
const clientElement = document.querySelector('#layout') as HTMLDivElement

const totalCutsElements = document.getElementsByClassName('total-haircuts')

export function clientLoad(client: Client) {
  clientElement.style.display = 'grid'

  userInfoLoad(client)

  membershipCardLoad(client)

  progressLoad(client)

  historyLoad(client)

  for (const totalElement of Array.from(totalCutsElements)) {
    totalElement.textContent = client.loyaltyCard.totalCuts.toString()
  }

  if (client.loyaltyCard.totalCuts === client.loyaltyCard.cutsNeeded) {
    modalElement.style.display = 'flex'
  }
}
