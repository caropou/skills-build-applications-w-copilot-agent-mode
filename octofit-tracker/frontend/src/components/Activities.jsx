import { useEffect, useState } from 'react'
import { buildApiUrl, normalizeApiResponse } from '../utils/api.js'

function Activities() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = buildApiUrl('activities')
    // https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/

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
      <h2>Activities</h2>
      <p className="text-muted">API: <code>{buildApiUrl('activities')}</code></p>

      {status === 'loading' && <div className="alert alert-info">Loading activities...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}
      {status === 'loaded' && items.length === 0 && <div className="alert alert-warning">No activities found.</div>}

      {items.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {items.map((item, index) => (
            <div className="col" key={item._id || item.id || index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name || item.activity || `Activity ${index + 1}`}</h5>
                  <p className="card-text">{item.description || item.notes || JSON.stringify(item)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Activities
