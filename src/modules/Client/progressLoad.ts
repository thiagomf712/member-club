import { Client } from '../../services/fetchClientById'

const remainingHaircutsElement = document.querySelector(
  '#remaining-haircuts'
) as HTMLSpanElement

const progressBarElement = document.querySelector(
  '#haircuts-progress-bar'
) as HTMLDivElement

export function progressLoad(client: Client) {
  const { cutsNeeded, cutsRemaining, totalCuts } = client.loyaltyCard

  remainingHaircutsElement.textContent = cutsRemaining.toString()

  progressBarElement.style.width = `${(totalCuts / cutsNeeded) * 100}%`
}
