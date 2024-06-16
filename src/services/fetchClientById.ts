import { apiConfig } from './apiConfig'

export interface Appointment {
  date: string
  time: string
}

export interface Client {
  id: string
  name: string
  clientSince: string
  image: string
  appointmentHistory: Appointment[]
  loyaltyCard: {
    totalCuts: number
    cutsNeeded: number
    cutsRemaining: number
  }
}

export async function fetchClientById(id: string) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients/${id}`)

    if (!response.ok) {
      if (response.status === 404) {
        alert('Client não encontrado')

        return null
      }

      alert('Falha ao buscar o client')

      return null
    }

    const client: Client = await response.json()

    return client
  } catch (error) {
    alert('Falha ao buscar o client')

    return null
  }
}
