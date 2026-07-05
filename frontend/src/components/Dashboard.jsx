import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import StatCard from './StatCard'
import { FolderKanban, Rocket, PlayCircle, XCircle, Plus } from 'lucide-react'

function Dashboard() {
  const [deployments] = useState([
    { id: 1, project: 'E-commerce App', environment: 'Production', status: 'Success', time: '2 hours ago' },
    { id: 2, project: 'API Gateway', environment: 'Staging', status: 'Running', time: '5 hours ago' },
    { id: 3, project: 'User Service', environment: 'Development', status: 'Failed', time: '1 day ago' },
    { id: 4, project: 'Payment Module', environment: 'Production', status: 'Success', time: '2 days ago' },
    { id: 5, project: 'Admin Panel', environment: 'Staging', status: 'Success', time: '3 days ago' },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-700'
      case 'Running':
        return 'bg-blue-100 text-blue-700'
      case 'Failed':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
            <p className="text-gray-600">Overview of your deployments and projects</p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Projects"
              value="12"
              icon={FolderKanban}
              color="blue"
            />
            <StatCard
              title="Deployments"
              value="48"
              icon={Rocket}
              color="green"
            />
            <StatCard
              title="Running"
              value="5"
              icon={PlayCircle}
              color="yellow"
            />
            <StatCard
              title="Failed"
              value="2"
              icon={XCircle}
              color="red"
            />
          </div>

          {/* Recent Deployments Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Recent Deployments</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 font-medium">
                <Plus className="w-4 h-4" />
                <span>New Deployment</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Environment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {deployments.map((deployment) => (
                    <tr key={deployment.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-800">{deployment.project}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{deployment.environment}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(deployment.status)}`}>
                          {deployment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{deployment.time}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
