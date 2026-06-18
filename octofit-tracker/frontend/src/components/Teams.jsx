import { useEffect, useState } from 'react'
import { buildApiUrl, normalizeApiResponse } from '../utils/api.js'

function Teams() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = buildApiUrl('teams')

    fetch(url)
      .then(async (response) => {
        const payload = await response.json()
        if (!response.ok) {
          throw new Error(payload?.message || response.statusText)
        }

        setItems(normalizeApiResponse(payload))
        setStatus('loaded')
      })
      .catch((fetchError) => {
        setError(fetchError.message)
        setStatus('error')
      })
  }, [])

  return (
    <div className="container py-4">
      <h2>Teams</h2>
      <p className="text-muted">API: <code>{buildApiUrl('teams')}</code></p>

      {status === 'loading' && <div className="alert alert-info">Loading teams...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}
      {status === 'loaded' && items.length === 0 && <div className="alert alert-warning">No teams found.</div>}

      {items.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {items.map((team, index) => (
            <div className="col" key={team._id || team.id || index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{team.name || `Team ${index + 1}`}</h5>
                  <p className="card-text">Members: {team.members?.length ?? 'unknown'}</p>
                  <p className="card-text text-truncate">{team.description || team.notes || JSON.stringify(team)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Teams
