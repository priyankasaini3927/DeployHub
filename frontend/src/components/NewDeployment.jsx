import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { ChevronDown, GitBranch, Server, Globe, Clock } from 'lucide-react'

function NewDeployment() {
  const [formData, setFormData] = useState({
    projectName: '',
    branch: 'main',
    environment: 'production',
    server: '',
    domain: '',
    deployTime: 'immediate'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New deployment:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">New Deployment</h1>
            <p className="text-gray-600">Configure and deploy your project</p>
          </div>

          <div className="max-w-3xl">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <div className="space-y-6">
                {/* Project Name */}
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name
                  </label>
                  <select
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select a project</option>
                    <option value="ecommerce">E-commerce App</option>
                    <option value="api-gateway">API Gateway</option>
                    <option value="user-service">User Service</option>
                    <option value="payment-module">Payment Module</option>
                    <option value="admin-panel">Admin Panel</option>
                  </select>
                </div>

                {/* Branch */}
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <GitBranch className="w-4 h-4 mr-2 text-gray-400" />
                      Branch
                    </div>
                  </label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="main"
                  />
                </div>

                {/* Environment */}
                <div>
                  <label htmlFor="environment" className="block text-sm font-medium text-gray-700 mb-2">
                    Environment
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="environment"
                        value="development"
                        checked={formData.environment === 'development'}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="px-4 py-3 border border-gray-300 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 text-center transition">
                        Development
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="environment"
                        value="staging"
                        checked={formData.environment === 'staging'}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="px-4 py-3 border border-gray-300 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 text-center transition">
                        Staging
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="environment"
                        value="production"
                        checked={formData.environment === 'production'}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="px-4 py-3 border border-gray-300 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 text-center transition">
                        Production
                      </div>
                    </label>
                  </div>
                </div>

                {/* Server */}
                <div>
                  <label htmlFor="server" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <Server className="w-4 h-4 mr-2 text-gray-400" />
                      Server
                    </div>
                  </label>
                  <select
                    id="server"
                    name="server"
                    value={formData.server}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select a server</option>
                    <option value="server-1">Server 1 (US-East)</option>
                    <option value="server-2">Server 2 (US-West)</option>
                    <option value="server-3">Server 3 (EU-West)</option>
                    <option value="server-4">Server 4 (Asia-Pacific)</option>
                  </select>
                </div>

                {/* Domain */}
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-gray-400" />
                      Domain (Optional)
                    </div>
                  </label>
                  <input
                    type="text"
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example.com"
                  />
                </div>

                {/* Deployment Time */}
                <div>
                  <label htmlFor="deployTime" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      Deployment Time
                    </div>
                  </label>
                  <select
                    id="deployTime"
                    name="deployTime"
                    value={formData.deployTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="immediate">Deploy Immediately</option>
                    <option value="scheduled">Schedule for Later</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
                  >
                    Start Deployment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default NewDeployment
