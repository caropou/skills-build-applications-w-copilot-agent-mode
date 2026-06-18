import { useEffect, useState } from 'react'
import { buildApiUrl, normalizeApiResponse } from '../utils/api.js'

function Workouts() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = buildApiUrl('workouts')
    // https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/

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
      <h2>Workouts</h2>
      <p className="text-muted">API: <code>{buildApiUrl('workouts')}</code></p>

      {status === 'loading' && <div className="alert alert-info">Loading workouts...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}
      {status === 'loaded' && items.length === 0 && <div className="alert alert-warning">No workouts found.</div>}

      {items.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {items.map((item, index) => (
            <div className="col" key={item._id || item.id || index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.title || item.name || `Workout ${index + 1}`}</h5>
                  <p className="card-text">Duration: {item.duration || item.length || 'unknown'}</p>
                  <p className="card-text text-truncate">{item.description || item.instructions || JSON.stringify(item)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Workouts
