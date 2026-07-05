import { LayoutDashboard, FolderKanban, Rocket, FileText, Settings, Plus, Activity } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'projects', label: 'Projects', icon: FolderKanban, path: '/projects' },
    { id: 'new-deployment', label: 'New Deployment', icon: Plus, path: '/new-deployment' },
    { id: 'deployment-progress', label: 'Deployment Progress', icon: Activity, path: '/deployment-progress' },
    { id: 'deployments', label: 'Deployments', icon: Rocket, path: '/deployments' },
    { id: 'logs', label: 'Logs', icon: FileText, path: '/logs' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ]

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
