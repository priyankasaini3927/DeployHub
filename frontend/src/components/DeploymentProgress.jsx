import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { CheckCircle, XCircle, Clock, Play, Pause, RefreshCw } from 'lucide-react'

function DeploymentProgress() {
  const [deployment, setDeployment] = useState({
    id: 'DEP-001',
    project: 'E-commerce App',
    branch: 'main',
    environment: 'Production',
    status: 'running',
    startTime: '2024-01-15 10:30:00',
    currentStep: 3,
    totalSteps: 5
  })

  const [steps, setSteps] = useState([
    { id: 1, name: 'Cloning Repository', status: 'completed', duration: '12s' },
    { id: 2, name: 'Installing Dependencies', status: 'completed', duration: '45s' },
    { id: 3, name: 'Running Tests', status: 'running', duration: '...' },
    { id: 4, name: 'Building Application', status: 'pending', duration: '-' },
    { id: 5, name: 'Deploying to Server', status: 'pending', duration: '-' },
  ])

  const [logs, setLogs] = useState([
    { time: '10:30:00', message: 'Deployment started', type: 'info' },
    { time: '10:30:12', message: 'Repository cloned successfully', type: 'success' },
    { time: '10:30:15', message: 'Installing dependencies...', type: 'info' },
    { time: '10:31:00', message: 'Dependencies installed successfully', type: 'success' },
    { time: '10:31:05', message: 'Running tests...', type: 'info' },
  ])

  const getStepIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'running':
        return <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-600" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStepColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200'
      case 'running':
        return 'bg-blue-50 border-blue-200'
      case 'failed':
        return 'bg-red-50 border-red-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  const getLogColor = (type) => {
    switch (type) {
      case 'success':
        return 'text-green-600'
      case 'error':
        return 'text-red-600'
      case 'warning':
        return 'text-yellow-600'
      default:
        return 'text-gray-600'
    }
  }

  const handleCancel = () => {
    console.log('Deployment cancelled')
  }

  const handleRetry = () => {
    console.log('Retrying deployment')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Deployment Progress</h1>
            <p className="text-gray-600">Track your deployment in real-time</p>
          </div>

          {/* Deployment Info */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{deployment.project}</h2>
                <p className="text-sm text-gray-600">ID: {deployment.id} • Branch: {deployment.branch} • {deployment.environment}</p>
              </div>
              <div className="flex items-center space-x-2">
                {deployment.status === 'running' && (
                  <>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center space-x-2 font-medium"
                    >
                      <Pause className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </>
                )}
                {deployment.status === 'failed' && (
                  <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 font-medium"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Retry</span>
                  </button>
                )}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{Math.round((deployment.currentStep / deployment.totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(deployment.currentStep / deployment.totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Play className="w-4 h-4 mr-1" />
                <span>Started: {deployment.startTime}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Duration: 1m 30s</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Deployment Steps */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Deployment Steps</h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${getStepColor(step.status)}`}
                  >
                    <div className="flex items-center space-x-3">
                      {getStepIcon(step.status)}
                      <div>
                        <p className="font-medium text-gray-800">{step.name}</p>
                        <p className="text-sm text-gray-600">Duration: {step.duration}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium uppercase ${
                      step.status === 'completed' ? 'text-green-600' :
                      step.status === 'running' ? 'text-blue-600' :
                      step.status === 'failed' ? 'text-red-600' :
                      'text-gray-400'
                    }`}>
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Logs */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Live Logs</h3>
              <div className="bg-gray-900 rounded-lg p-4 h-80 overflow-y-auto">
                <div className="space-y-2 font-mono text-sm">
                  {logs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-gray-400">{log.time}</span>
                      <span className={getLogColor(log.type)}>{log.message}</span>
                    </div>
                  ))}
                  {deployment.status === 'running' && (
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-400">{new Date().toLocaleTimeString()}</span>
                      <span className="text-blue-400">Running tests... (45%)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DeploymentProgress
