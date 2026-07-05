// Authentication utility functions
// This file can later be replaced with API calls to Flask backend

export const login = async (email, password) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Frontend-only validation
  if (email === 'admin@deployhub.com' && password === 'admin123') {
    return {
      success: true,
      token: 'mock-jwt-token',
      user: {
        email: email,
        name: 'Admin'
      }
    }
  }

  return {
    success: false,
    error: 'Invalid email or password.'
  }
}

export const logout = () => {
  // Remove token from localStorage
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null
}
