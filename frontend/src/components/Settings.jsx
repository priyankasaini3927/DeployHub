import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { User, Bell, Shield, Key, Globe, Moon, Sun } from 'lucide-react'

function Settings() {
  const [settings, setSettings] = useState({
    // Profile
    name: 'Admin',
    email: 'admin@deployhub.com',
    company: 'DeployHub Inc.',
    
    // Notifications
    emailNotifications: true,
    deploymentAlerts: true,
    errorAlerts: true,
    weeklyReports: false,
    
    // Security
    twoFactorAuth: false,
    sessionTimeout: '30',
    
    // API
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxx',
    
    // Appearance
    darkMode: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Settings saved:', settings)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account and application settings</p>
          </div>

          <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
            {/* Profile Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <User className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Profile Settings</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={settings.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={settings.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Bell className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Notification Settings</h2>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={settings.emailNotifications}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Deployment Alerts</p>
                    <p className="text-sm text-gray-500">Get notified when deployments complete</p>
                  </div>
                  <input
                    type="checkbox"
                    name="deploymentAlerts"
                    checked={settings.deploymentAlerts}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Error Alerts</p>
                    <p className="text-sm text-gray-500">Get notified of deployment failures</p>
                  </div>
                  <input
                    type="checkbox"
                    name="errorAlerts"
                    checked={settings.errorAlerts}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Weekly Reports</p>
                    <p className="text-sm text-gray-500">Receive weekly summary reports</p>
                  </div>
                  <input
                    type="checkbox"
                    name="weeklyReports"
                    checked={settings.weeklyReports}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Security Settings</h2>
              </div>
              
              <div className="space-y-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                  <input
                    type="checkbox"
                    name="twoFactorAuth"
                    checked={settings.twoFactorAuth}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
                <div>
                  <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700 mb-2">
                    Session Timeout (minutes)
                  </label>
                  <select
                    id="sessionTimeout"
                    name="sessionTimeout"
                    value={settings.sessionTimeout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                  </select>
                </div>
              </div>
            </div>

            {/* API Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Key className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">API Settings</h2>
              </div>
              
              <div>
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
                  API Key
                </label>
                <div className="flex space-x-2">
                  <input
                    type="password"
                    id="apiKey"
                    name="apiKey"
                    value={settings.apiKey}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                  >
                    Regenerate
                  </button>
                </div>
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Globe className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Appearance</h2>
              </div>
              
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <div className="flex items-center space-x-3">
                    <Sun className="w-5 h-5 text-gray-600" />
                    <Moon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-800">Dark Mode</p>
                    <p className="text-sm text-gray-500">Toggle dark theme</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={settings.darkMode}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Settings
