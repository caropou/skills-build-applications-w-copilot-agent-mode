import { useEffect, useState } from 'react'
import { buildApiUrl, normalizeApiResponse } from '../utils/api.js'

function Leaderboard() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = buildApiUrl('leaderboard')
    // https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/

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
      <h2>Leaderboard</h2>
      <p className="text-muted">API: <code>{buildApiUrl('leaderboard')}</code></p>

      {status === 'loading' && <div className="alert alert-info">Loading leaderboard...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}
      {status === 'loaded' && items.length === 0 && <div className="alert alert-warning">No leaderboard entries found.</div>}

      {items.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Player</th>
                <th>Score</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id || item.id || index}>
                  <td>{index + 1}</td>
                  <td>{item.name || item.user || item.team || `Entry ${index + 1}`}</td>
                  <td>{item.score ?? item.points ?? item.value ?? '—'}</td>
                  <td>{item.details || JSON.stringify(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Leaderboard
