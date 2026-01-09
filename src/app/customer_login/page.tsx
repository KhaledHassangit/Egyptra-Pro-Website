"use client"

import React, { useState, useEffect } from 'react'
import { Eye, EyeOff, Lock, Mail, User, Check, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'

import Container from '@/util/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { loginSchema, registerSchema, type LoginFormData, type RegisterFormData } from '@/lib/validation'

// Logo component - defined directly in the file to ensure it works
const Logo = ({width, hight}: {width: number, hight: number}) => {
  return (
     <div className="flex-shrink-0 flex items-center">
       <Link href="/" className="flex items-center gap-2">
         <div style={{ width: `${width}px`, height: `${hight}px`, position: 'relative' }}>
           <Image
             src="/Logo.png" 
             alt="Egyptra Pro Logo"
             fill
             className="object-contain"
           />
         </div>
       </Link>
     </div>
  )
}

export default function CustomerLoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({})

  // Register Form State
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')
  const [registerErrors, setRegisterErrors] = useState<Record<string, string>>({})

  // Carousel images
  const carouselImages = [
    { src: '/images/1.jpg', alt: 'Egyptian Temple 1' },
    { src: '/images/2.jpg', alt: 'Egyptian Temple 2' },
    { src: '/images/3.jpg', alt: 'Egyptian Temple 3' }
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const toggleView = (view: 'login' | 'register') => {
    setIsLogin(view === 'login')
    // Clear errors when switching forms
    setLoginErrors({})
    setRegisterErrors({})
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Validate login form
  const validateLoginForm = () => {
    try {
      const formData: LoginFormData = {
        email: loginEmail,
        password: loginPassword
      }
      loginSchema.parse(formData)
      setLoginErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {}
        // Use error.issues instead of error.errors
        if (error.issues && Array.isArray(error.issues)) {
          error.issues.forEach((err) => {
            errors[err.path[0]] = err.message
          })
        }
        setLoginErrors(errors)
      }
      return false
    }
  }

  // Validate register form
  const validateRegisterForm = () => {
    try {
      const formData: RegisterFormData = {
        username: registerName,
        email: registerEmail,
        password: registerPassword,
        confirmPassword: registerConfirmPassword
      }
      registerSchema.parse(formData)
      setRegisterErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {}
        // Use error.issues instead of error.errors
        if (error.issues && Array.isArray(error.issues)) {
          error.issues.forEach((err) => {
            errors[err.path[0]] = err.message
          })
        }
        setRegisterErrors(errors)
      }
      return false
    }
  }

  // Handle login form submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateLoginForm()) {
      // Process login
      console.log('Login form is valid')
    }
  }

  // Handle register form submission
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateRegisterForm()) {
      // Process registration
      console.log('Register form is valid')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex w-full">
        <div className="hidden lg:flex lg:w-1/2 relative items-end p-12 text-white overflow-hidden">
          <div className="absolute inset-0">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  currentSlide === index ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 overlay-bg"></div>
              </div>
            ))}
          </div>
          
          <div className="relative z-10 ps-22 max-w-screen-xl mb-10">
            <h1 className="text-[36px] font-normal leading-[40px] mb-4">Walk Among History</h1>
            <p className="text-[18px] font-normal leading-[28px]" style={{ color: '#FFFFFFE5' }}>
              Visit the majestic temples of Luxor
            </p>

            <div className="flex gap-2 mt-8">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-1 w-8 rounded-full transition-all duration-200",
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-background">
          <Container>
            <div className="w-full max-w-md space-y-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Logo width={44} hight={48} />
                  <span className="ml-2 text-primary" style={{ fontWeight: '500', fontSize: '24px' }}>
                    Welcome to Egyptra
                  </span>
                </div>
                <h2 className="text-3xl font-bold mt-2" style={{ fontWeight: '400', fontSize: '32px', color: '#101828' }}>
                  Start Your Egyptian Journey
                </h2>
                <p className="mt-2" style={{ color: '#282828', fontSize: '16px', lineHeight: '24px', fontWeight: '400' }}>
                  Join thousands of travelers discovering authentic Egyptian experiences
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="flex p-1 rounded-lg mb-8" style={{ backgroundColor: '#F9FAFB' }}>
                <button
                  onClick={() => toggleView('login')}
                  className={cn(
                    "flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                    isLogin ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{
                    width: '200px',
                    height: '50px',
                    border: isLogin ? '0.8px solid #E5E7EB' : '0.8px solid transparent',
                    borderRadius: '10px',
                    backgroundColor: isLogin ? '#FFFFFF' : 'transparent'
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => toggleView('register')}
                  className={cn(
                    "flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                    !isLogin ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{
                    width: '200px',
                    height: '50px',
                    border: !isLogin ? '0.8px solid #E5E7EB' : '0.8px solid transparent',
                    borderRadius: '10px',
                    backgroundColor: !isLogin ? '#FFFFFF' : 'transparent'
                  }}
                >
                  Register
                </button>
              </div>

              {isLogin ? (
                /* LOGIN FORM */
                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="email" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Email Address</Label>
                    <div className="relative" style={{ height: '48px' }}>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
                      <Input
                        id="email"
                        placeholder="Mohamedahmed@gmail.com"
                        className="pl-10 h-11"
                        style={{ 
                          width: '100%', 
                          maxWidth: '448px',
                          height: '48px', 
                          backgroundColor: '#F9FAFB', 
                          border: loginErrors.email ? '1px solid #ef4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          paddingLeft: '44px',
                          color: '#717182',
                          fontSize: '12px'
                        }}
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>
                    {loginErrors.email && (
                      <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{loginErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Password</Label>
                    <div className="relative" style={{ height: '48px' }}>
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-11"
                        style={{ 
                          width: '100%', 
                          maxWidth: '448px',
                          height: '48px', 
                          backgroundColor: '#F9FAFB', 
                          border: loginErrors.password ? '1px solid #ef4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          paddingLeft: '44px',
                          paddingRight: '44px',
                          color: '#717182',
                          fontSize: '12px'
                        }}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                        style={{ color: '#717182' }}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {loginErrors.password && (
                      <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{loginErrors.password}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full h-11 text-base">
                    Sign In to Your Account
                  </Button>
                </form>
              ) : (
                /* REGISTER FORM */
                <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="username" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>User Name</Label>
                    <div className="relative" style={{ height: '48px' }}>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
                      <Input
                        id="username"
                        placeholder="ahmed153"
                        className="pl-10 h-11"
                        style={{ 
                          width: '100%', 
                          maxWidth: '448px',
                          height: '48px', 
                          backgroundColor: '#F9FAFB', 
                          border: registerErrors.username ? '1px solid #ef4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          paddingLeft: '44px',
                          color: '#717182',
                          fontSize: '12px'
                        }}
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                      />
                    </div>
                    {registerErrors.username && (
                      <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{registerErrors.username}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-email" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Email Address</Label>
                    <div className="relative" style={{ height: '48px' }}>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
                      <Input
                        id="reg-email"
                        placeholder="you@example.com"
                        className="pl-10 h-11"
                        style={{ 
                          width: '100%', 
                          maxWidth: '448px',
                          height: '48px', 
                          backgroundColor: '#F9FAFB', 
                          border: registerErrors.email ? '1px solid #ef4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          paddingLeft: '44px',
                          color: '#717182',
                          fontSize: '12px'
                        }}
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                      />
                    </div>
                    {registerErrors.email && (
                      <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{registerErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-password" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Password</Label>
                    <div className="relative" style={{ height: '48px' }}>
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
                      <Input
                        id="reg-password"
                        type="password"
                        placeholder="Create a strong password"
                        className="pl-10 pr-10 h-11"
                        style={{ 
                          width: '100%', 
                          maxWidth: '448px',
                          height: '48px', 
                          backgroundColor: '#F9FAFB', 
                          border: registerErrors.password ? '1px solid #ef4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          paddingLeft: '44px',
                          paddingRight: '44px',
                          color: '#717182',
                          fontSize: '12px'
                        }}
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                        style={{ color: '#717182' }}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {registerErrors.password && (
                      <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{registerErrors.password}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Confirm Password</Label>
                    <div className="relative" style={{ height: '48px' }}>
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 h-11"
                        style={{ 
                          width: '100%', 
                          maxWidth: '448px',
                          height: '48px', 
                          backgroundColor: '#F9FAFB', 
                          border: registerErrors.confirmPassword ? '1px solid #ef4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          paddingLeft: '44px',
                          paddingRight: '44px',
                          color: '#717182',
                          fontSize: '12px'
                        }}
                        value={registerConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                        style={{ color: '#717182' }}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {registerErrors.confirmPassword && (
                      <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{registerErrors.confirmPassword}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                    >
                      I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-11 text-base">
                    Create Your Account
                  </Button>
                </form>
              )}

       

            </div>
          </Container>
        </div>
      </main>
    </div>
  )
}