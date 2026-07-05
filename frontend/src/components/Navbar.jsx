import { Bell, User } from 'lucide-react'

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
          </svg>
          <svg className="w-7 h-7 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-800">DeployHub</h1>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
