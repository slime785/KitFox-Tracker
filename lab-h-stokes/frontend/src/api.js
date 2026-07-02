export const API_BASE_URL = "https://bender.cs.csubak.edu/stokes";

export async function getSightings() {
  const response = await fetch(`${API_BASE_URL}/sightings`)
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }
  return response.json()
}

export async function createSighting(newSighting) {
  const response = await fetch(`${API_BASE_URL}/sightings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newSighting)
  })
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }
  return response.json()
}
