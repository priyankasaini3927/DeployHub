import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import NewDeployment from './components/NewDeployment'
import Logs from './components/Logs'
import Settings from './components/Settings'
import DeploymentProgress from './components/DeploymentProgress'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/new-deployment" element={<NewDeployment />} />
      <Route path="/deployment-progress" element={<DeploymentProgress />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
