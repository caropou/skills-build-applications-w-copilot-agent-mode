import { useEffect, useState } from 'react'
import { buildApiUrl, normalizeApiResponse } from '../utils/api.js'

function Users() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = buildApiUrl('users')
    // https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/

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
      <h2>Users</h2>
      <p className="text-muted">API: <code>{buildApiUrl('users')}</code></p>

      {status === 'loading' && <div className="alert alert-info">Loading users...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}
      {status === 'loaded' && items.length === 0 && <div className="alert alert-warning">No users found.</div>}

      {items.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {items.map((user, index) => (
                <tr key={user._id || user.id || index}>
                  <td>{index + 1}</td>
                  <td>{user.name || user.username || `User ${index + 1}`}</td>
                  <td>{user.email || user.contact || '—'}</td>
                  <td>{user.role || user.type || 'Member'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Users
