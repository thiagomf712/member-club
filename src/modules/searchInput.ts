import { fetchClientById } from '../services/fetchClientById'
import { clientLoad } from './Client/clientLoad'

const searchInput = document.querySelector('#client-id') as HTMLInputElement
const searchButton = document.querySelector(
  '#search-button'
) as HTMLButtonElement

searchInput.oninput = (event) => {
  const input = event.target as HTMLInputElement
  const clientId = input.value

  if (clientId.length === 0) {
    searchButton.disabled = true
  } else {
    searchButton.disabled = false
  }
}

async function searchClient() {
  const clientId = searchInput.value

  if (clientId.length === 0) {
    return
  }

  const client = await fetchClientById(clientId)

  if (client != null) {
    clientLoad(client)
  }
}

searchButton.onclick = async () => {
  await searchClient()
}

searchInput.onkeydown = async (event) => {
  if (event.key === 'Enter' && !searchButton.disabled) {
    await searchClient()
  }
}
