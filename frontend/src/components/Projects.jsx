import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Search, Plus, GitBranch, ExternalLink, Clock } from 'lucide-react'

function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [projects] = useState([
    {
      id: 1,
      name: 'E-commerce App',
      branch: 'main',
      repoUrl: 'github.com/company/ecommerce',
      lastDeployment: '2 hours ago',
      status: 'Active'
    },
    {
      id: 2,
      name: 'API Gateway',
      branch: 'develop',
      repoUrl: 'github.com/company/api-gateway',
      lastDeployment: '5 hours ago',
      status: 'Running'
    },
    {
      id: 3,
      name: 'User Service',
      branch: 'feature/auth',
      repoUrl: 'github.com/company/user-service',
      lastDeployment: '1 day ago',
      status: 'Failed'
    },
    {
      id: 4,
      name: 'Payment Module',
      branch: 'main',
      repoUrl: 'github.com/company/payment-module',
      lastDeployment: '2 days ago',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Admin Panel',
      branch: 'staging',
      repoUrl: 'github.com/company/admin-panel',
      lastDeployment: '3 days ago',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Notification Service',
      branch: 'develop',
      repoUrl: 'github.com/company/notification-service',
      lastDeployment: '4 days ago',
      status: 'Active'
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700'
      case 'Running':
        return 'bg-blue-100 text-blue-700'
      case 'Failed':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.branch.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDeploy = (projectId) => {
    console.log('Deploying project:', projectId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Projects</h1>
            <p className="text-gray-600">Manage and deploy your projects</p>
          </div>

          {/* Search and New Project Button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 font-medium whitespace-nowrap">
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <GitBranch className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{project.branch}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ExternalLink className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="truncate">{project.repoUrl}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{project.lastDeployment}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDeploy(project.id)}
                  className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Deploy
                </button>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found matching your search.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Projects
