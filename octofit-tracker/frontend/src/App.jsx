import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const apiHost = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              OctoFit Tracker
            </NavLink>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/users">
                Users
              </NavLink>
              <NavLink className="nav-link" to="/teams">
                Teams
              </NavLink>
              <NavLink className="nav-link" to="/activities">
                Activities
              </NavLink>
              <NavLink className="nav-link" to="/workouts">
                Workouts
              </NavLink>
              <NavLink className="nav-link" to="/leaderboard">
                Leaderboard
              </NavLink>
            </div>
          </div>
        </header>

        <main>
          <div className="container py-4">
            <div className="alert alert-secondary">
              <strong>API host:</strong> {apiHost}
              <br />
              {codespaceName ? (
                <span>
                  Using Vite environment variable <code>VITE_CODESPACE_NAME</code>.
                </span>
              ) : (
                <span>
                  <strong>Fallback:</strong> <code>http://localhost:8000</code>. Define{' '}
                  <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to use the
                  Codespaces API URL.
                </span>
              )}
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route
              path="*"
              element={
                <div className="container py-4">
                  <h2>Page not found</h2>
                  <p className="text-muted">Use the navigation links above.</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
