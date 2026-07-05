import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../utils/auth'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const result = await login(formData.email, formData.password)

    if (result.success) {
      localStorage.setItem('token', result.token)
      localStorage.setItem('user', JSON.stringify(result.user))
      navigate('/dashboard')
    } else {
      setError(result.error)
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Column - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-12">
        <div className="text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
              </svg>
              <svg className="w-10 h-10 text-blue-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">DeployHub</h1>
          </div>
          <p className="text-xl text-blue-600 font-semibold mb-4">One Click Cloud Deployment</p>
          <p className="text-gray-600 mb-12">Automate your deployment process in minutes.</p>
          
          <div className="mt-8">
            <svg className="w-80 h-64 mx-auto" viewBox="0 0 400 300" fill="none">
              {/* Server racks */}
              <rect x="50" y="80" width="80" height="120" rx="4" fill="#E5E7EB"/>
              <rect x="55" y="90" width="70" height="15" rx="2" fill="#3B82F6"/>
              <rect x="55" y="115" width="70" height="15" rx="2" fill="#3B82F6"/>
              <rect x="55" y="140" width="70" height="15" rx="2" fill="#3B82F6"/>
              <rect x="55" y="165" width="70" height="15" rx="2" fill="#3B82F6"/>
              
              <rect x="150" y="80" width="80" height="120" rx="4" fill="#E5E7EB"/>
              <rect x="155" y="90" width="70" height="15" rx="2" fill="#3B82F6"/>
              <rect x="155" y="115" width="70" height="15" rx="2" fill="#3B82F6"/>
              <rect x="155" y="140" width="70" height="15" rx="2" fill="#3B82F6"/>
              <rect x="155" y="165" width="70" height="15" rx="2" fill="#3B82F6"/>
              
              {/* Laptop */}
              <rect x="250" y="120" width="100" height="70" rx="4" fill="#E5E7EB"/>
              <rect x="255" y="125" width="90" height="55" rx="2" fill="#1F2937"/>
              <rect x="270" y="190" width="60" height="8" rx="2" fill="#9CA3AF"/>
              
              {/* Clouds */}
              <ellipse cx="200" cy="50" rx="40" ry="25" fill="#BFDBFE"/>
              <ellipse cx="180" cy="45" rx="25" ry="20" fill="#BFDBFE"/>
              <ellipse cx="220" cy="45" rx="25" ry="20" fill="#BFDBFE"/>
              
              <ellipse cx="320" cy="70" rx="30" ry="20" fill="#BFDBFE"/>
              <ellipse cx="305" cy="65" rx="20" ry="15" fill="#BFDBFE"/>
              <ellipse cx="335" cy="65" rx="20" ry="15" fill="#BFDBFE"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
              </svg>
              <svg className="w-8 h-8 text-blue-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">DeployHub</h1>
            <p className="text-blue-600 font-semibold mt-2">One Click Cloud Deployment</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to your account</h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
