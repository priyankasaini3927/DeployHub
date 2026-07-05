import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Search, Filter, Download, Trash2, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

function Logs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const [logs] = useState([
    {
      id: 1,
      timestamp: '2024-01-15 10:30:45',
      level: 'info',
      message: 'Deployment started for E-commerce App',
      project: 'E-commerce App',
      user: 'admin@deployhub.com'
    },
    {
      id: 2,
      timestamp: '2024-01-15 10:31:12',
      level: 'success',
      message: 'Build completed successfully',
      project: 'E-commerce App',
      user: 'admin@deployhub.com'
    },
    {
      id: 3,
      timestamp: '2024-01-15 10:32:05',
      level: 'warning',
      message: 'Memory usage above 80% threshold',
      project: 'API Gateway',
      user: 'system'
    },
    {
      id: 4,
      timestamp: '2024-01-15 10:35:20',
      level: 'error',
      message: 'Database connection failed',
      project: 'User Service',
      user: 'admin@deployhub.com'
    },
    {
      id: 5,
      timestamp: '2024-01-15 10:40:15',
      level: 'info',
      message: 'Health check passed for all services',
      project: 'System',
      user: 'system'
    },
    {
      id: 6,
      timestamp: '2024-01-15 10:45:30',
      level: 'success',
      message: 'Deployment completed for Payment Module',
      project: 'Payment Module',
      user: 'admin@deployhub.com'
    },
    {
      id: 7,
      timestamp: '2024-01-15 10:50:00',
      level: 'error',
      message: 'SSL certificate expired',
      project: 'Admin Panel',
      user: 'system'
    },
    {
      id: 8,
      timestamp: '2024-01-15 10:55:45',
      level: 'info',
      message: 'New user registered',
      project: 'User Service',
      user: 'system'
    },
  ])

  const getLevelIcon = (level) => {
    switch (level) {
      case 'success':
        return <CheckCircle className="w-4 h-4" />
      case 'error':
        return <XCircle className="w-4 h-4" />
      case 'warning':
        return <AlertCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'success':
        return 'bg-green-100 text-green-700'
      case 'error':
        return 'bg-red-100 text-red-700'
      case 'warning':
        return 'bg-yellow-100 text-yellow-700'
      case 'info':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.project.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel === 'all' || log.level === selectedLevel
    return matchesSearch && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Logs</h1>
            <p className="text-gray-600">View and manage system logs</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="all">All Levels</option>
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 font-medium">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
            <button className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition flex items-center space-x-2 font-medium">
              <Trash2 className="w-5 h-5" />
              <span>Clear All</span>
            </button>
          </div>

          {/* Logs Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4whitespace-nowrap">
                        <div className="text-sm text-gray-600 font-mono">{log.timestamp}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(log.level)}`}>
                          {getLevelIcon(log.level)}
                          <span className="capitalize">{log.level}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-800">{log.message}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{log.project}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{log.user}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No logs found matching your search.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Logs
