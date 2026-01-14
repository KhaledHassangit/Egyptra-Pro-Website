"use client"
import { TourCard } from '@/components/shared/TourCard'
import TrustNumbers from '@/components/whyUs/TrustNumbers'
import Container from '@/util/Container'
import { SearchBar } from '@/util/SearchBar'
import SectionHeader from '@/util/SectionHeader'
import PageHero from '@/util/PageHero'
import { Filter, ChevronDown, ChevronUp, Star, Check, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible'

// Sample data for tours with unique IDs
const toursData = [
  {
    id: 1,
    imagePath: "/images/1.jpg",
    city: "Cairo",
    title: "Hurghada: Dolphin watching boat tour with snorkeling",
    price: "$254",
    rating: "4.2 (1200)",
    duration: "3 Hours",
    category: "Historical",
    variant: "detailed" as const
  },
  {
    id: 2,
    imagePath: "/images/2.jpg",
    city: "Luxor",
    title: "Valley of the Kings: Ancient Egyptian Tombs Tour",
    price: "$189",
    rating: "4.7 (850)",
    duration: "5 Hours",
    category: "Historical",
    variant: "detailed" as const
  },
  {
    id: 3,
    imagePath: "/images/3.jpg",
    city: "Giza",
    title: "Pyramids of Giza and Sphinx Full Day Tour",
    price: "$320",
    rating: "4.9 (2100)",
    duration: "8 Hours",
    category: "Historical",
    variant: "detailed" as const
  },
]

// Enhanced Custom Dropdown Component
const CustomDropdown = ({ 
  value, 
  onValueChange, 
  options, 
  placeholder 
}: { 
  value: string, 
  onValueChange: (value: string) => void, 
  options: { value: string, label: string }[], 
  placeholder: string 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
  
  const selectedOption = options.find(option => option.value === value)
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="p-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none transition-colors hover:bg-gray-100 ${
                  value === option.value ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-900"
                }`}
                onClick={() => {
                  onValueChange(option.value)
                  setIsOpen(false)
                }}
              >
                {option.label}
                {value === option.value && (
                  <Check className="ml-auto h-4 w-4 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile Filter Sheet Component with IMPROVED animation
const MobileFilterSheet = ({ 
  isOpen, 
  onClose, 
  selectedFilters, 
  handleFilterChange, 
  applyFilters, 
  resetFilters,
  quickFilters,
  ratingOptions,
  sortOptions,
  destinationOptions,
  quickFilterOpen,
  setQuickFilterOpen,
  sortByOpen,
  setSortByOpen,
  priceRangeOpen,
  setPriceRangeOpen,
  ratingOpen,
  setRatingOpen,
  destinationOpen,
  setDestinationOpen,
  isDraggingMin,
  setIsDraggingMin,
  isDraggingMax,
  setIsDraggingMax
}: any) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle range slider
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current) return
      
      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      const value = Math.round((percentage / 100) * 1000)

      if (isDraggingMin) {
        const newMin = Math.min(value, selectedFilters.priceMax - 50)
        handleFilterChange('priceMin', newMin)
      } else if (isDraggingMax) {
        const newMax = Math.max(value, selectedFilters.priceMin + 50)
        handleFilterChange('priceMax', newMax)
      }
    }

    const handleMouseUp = () => {
      setIsDraggingMin(false)
      setIsDraggingMax(false)
    }

    if (isDraggingMin || isDraggingMax) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDraggingMin, isDraggingMax, selectedFilters.priceMin, selectedFilters.priceMax, handleFilterChange, setIsDraggingMin, setIsDraggingMax])

  return (
    <>
      {/* Backdrop with improved animation */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Filter Sheet with MUCH IMPROVED animation */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto will-change-transform ${
          isOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        } transition-all duration-500 ease-out`}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          {/* Quick Filters */}
          <Collapsible open={quickFilterOpen} onOpenChange={setQuickFilterOpen}>
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer py-2">
                <h3 className="text-base font-semibold text-gray-900">Quick Filters</h3>
                {quickFilterOpen ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3 transition-all duration-300 ease-in-out">
              <div className="grid grid-cols-2 gap-2">
                {quickFilters.map((filter: any) => (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterChange('quickFilter', filter.id)}
                    className={`py-2 px-3 rounded-full text-xs font-medium transition-all duration-200 transform active:scale-95 ${
                      selectedFilters.quickFilter === filter.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Sort By */}
          <Collapsible open={sortByOpen} onOpenChange={setSortByOpen}>
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer py-2">
                <h3 className="text-base font-semibold text-gray-900">Sort By</h3>
                {sortByOpen ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3 transition-all duration-300 ease-in-out">
              <CustomDropdown
                value={selectedFilters.sortBy}
                onValueChange={(value) => handleFilterChange('sortBy', value)}
                options={sortOptions}
                placeholder="Select sort option"
              />
            </CollapsibleContent>
          </Collapsible>
          
          {/* Price Range */}
          <Collapsible open={priceRangeOpen} onOpenChange={setPriceRangeOpen}>
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer py-2">
                <h3 className="text-base font-semibold text-gray-900">Price Range</h3>
                {priceRangeOpen ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3 transition-all duration-300 ease-in-out">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative flex-1">
                    <Input
                      type="number"
                      value={selectedFilters.priceMin}
                      onChange={(e) => handleFilterChange('priceMin', parseInt(e.target.value) || 0)}
                      className="pr-8 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                  </div>
                  <span className="text-gray-500">-</span>
                  <div className="relative flex-1">
                    <Input
                      type="number"
                      value={selectedFilters.priceMax}
                      onChange={(e) => handleFilterChange('priceMax', parseInt(e.target.value) || 0)}
                      className="pr-8 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                  </div>
                </div>
                
                {/* Interactive Range Slider */}
                <div className="relative mt-6 mb-2 h-6" ref={sliderRef}>
                  <div className="absolute w-full h-[6px] bg-gray-200 rounded-full top-1/2 transform -translate-y-1/2">
                    <div 
                      className="absolute h-full bg-blue-600 rounded-full transition-all duration-200"
                      style={{
                        left: `${(selectedFilters.priceMin / 1000) * 100}%`,
                        width: `${((selectedFilters.priceMax - selectedFilters.priceMin) / 1000) * 100}%`
                      }}
                    />
                  </div>
                  <div 
                    className={`absolute w-4 h-4 bg-blue-600 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-md cursor-pointer z-10 ${isDraggingMin ? 'scale-125' : ''} transition-transform`}
                    style={{ left: `${(selectedFilters.priceMin / 1000) * 100}%` }}
                    onMouseDown={() => setIsDraggingMin(true)}
                  />
                  <div 
                    className={`absolute w-4 h-4 bg-blue-600 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-md cursor-pointer z-10 ${isDraggingMax ? 'scale-125' : ''} transition-transform`}
                    style={{ left: `${(selectedFilters.priceMax / 1000) * 100}%` }}
                    onMouseDown={() => setIsDraggingMax(true)}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0€</span>
                  <span>1000€</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Minimum Rating */}
          <Collapsible open={ratingOpen} onOpenChange={setRatingOpen}>
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer py-2">
                <h3 className="text-base font-semibold text-gray-900">Minimum Rating</h3>
                {ratingOpen ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3 transition-all duration-300 ease-in-out">
              <div className="space-y-3">
                {ratingOptions.map((rating: any) => (
                  <label key={rating.id} className="flex items-center gap-3 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="minRating"
                      checked={selectedFilters.minRating === rating.id}
                      onChange={() => handleFilterChange('minRating', rating.id)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{rating.label}</span>
                    {rating.stars > 0 && (
                      <div className="flex gap-0.5 ml-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < rating.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Destination */}
          <Collapsible open={destinationOpen} onOpenChange={setDestinationOpen}>
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer py-2">
                <h3 className="text-base font-semibold text-gray-900">Destination</h3>
                {destinationOpen ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3 transition-all duration-300 ease-in-out">
              <CustomDropdown
                value={selectedFilters.destination}
                onValueChange={(value) => handleFilterChange('destination', value)}
                options={destinationOptions}
                placeholder="Select destination"
              />
            </CollapsibleContent>
          </Collapsible>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
            <Button 
              onClick={() => {
                applyFilters()
                onClose()
              }}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 transform active:scale-95"
            >
              Apply Filters
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                resetFilters()
                onClose()
              }}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 transform active:scale-95"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

const CategoryPage = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [quickFilterOpen, setQuickFilterOpen] = useState(true)
  const [sortByOpen, setSortByOpen] = useState(true)
  const [priceRangeOpen, setPriceRangeOpen] = useState(true)
  const [ratingOpen, setRatingOpen] = useState(true)
  const [destinationOpen, setDestinationOpen] = useState(true)
  
  const [selectedFilters, setSelectedFilters] = useState({
    quickFilter: "all-tours",
    sortBy: "popularity",
    priceMin: 0,
    priceMax: 1000,
    minRating: "any",
    destination: "any-destination"
  })

  // Range slider states
  const [isDraggingMin, setIsDraggingMin] = useState(false)
  const [isDraggingMax, setIsDraggingMax] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleFilterChange = (filterType: string, value: any) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleSearch = (query: string) => {
    console.log("Searching for:", query)
    // Implement search functionality
  }

  const applyFilters = () => {
    console.log("Applying filters:", selectedFilters)
    // Implement filter application logic
  }

  const resetFilters = () => {
    setSelectedFilters({
      quickFilter: "all-tours",
      sortBy: "popularity",
      priceMin: 0,
      priceMax: 1000,
      minRating: "any",
      destination: "any-destination"
    })
  }

  // Handle range slider
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current) return
      
      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      const value = Math.round((percentage / 100) * 1000)

      if (isDraggingMin) {
        const newMin = Math.min(value, selectedFilters.priceMax - 50)
        setSelectedFilters(prev => ({ ...prev, priceMin: newMin }))
      } else if (isDraggingMax) {
        const newMax = Math.max(value, selectedFilters.priceMin + 50)
        setSelectedFilters(prev => ({ ...prev, priceMax: newMax }))
      }
    }

    const handleMouseUp = () => {
      setIsDraggingMin(false)
      setIsDraggingMax(false)
    }

    if (isDraggingMin || isDraggingMax) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDraggingMin, isDraggingMax, selectedFilters.priceMin, selectedFilters.priceMax])

  const quickFilters = [
    { id: "all-tours", label: "All Tours" },
    { id: "under-50", label: "Under €50" },
    { id: "top-rated", label: "Top Rated" },
    { id: "best-seller", label: "Best Seller" }
  ]

  const ratingOptions = [
    { id: "any", label: "Any Rating", stars: 0 },
    { id: "5-plus", label: "5+ Stars", stars: 5 },
    { id: "4-plus", label: "4+ Stars", stars: 4 },
    { id: "3-plus", label: "3+ Stars", stars: 3 }
  ]

  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "price-low-high", label: "Price: Low to High" },
    { value: "price-high-low", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
    { value: "duration", label: "Duration" }
  ]

  const destinationOptions = [
    { value: "any-destination", label: "Any Destination" },
    { value: "cairo", label: "Cairo" },
    { value: "luxor", label: "Luxor" },
    { value: "giza", label: "Giza" },
    { value: "hurghada", label: "Hurghada" },
    { value: "sharm-el-sheikh", label: "Sharm El Sheikh" }
  ]

  return (
    <>
      {/* Page Hero Section */}
      <PageHero 
        title="DESERT SAFARI ADVENTURES IN EGYPT" 
        currentPage="Safari" 
        currentPageUrl="/category/safari" 
      />
      
      {/* Trust Numbers Section */}
      <TrustNumbers />
      
      {/* Main Content Area */}
      <section className="py-8 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Section - Desktop */}
            <div className="hidden lg:block w-full lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
                {/* Quick Filters */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <Collapsible open={quickFilterOpen} onOpenChange={setQuickFilterOpen}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-900">Quick Filters</h3>
                        {quickFilterOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 transition-all duration-300 ease-in-out">
                      <div className="grid grid-cols-2 gap-2">
                        {quickFilters.map((filter) => (
                          <button
                            key={filter.id}
                            onClick={() => handleFilterChange('quickFilter', filter.id)}
                            className={`py-2 px-4 rounded-[30px] text-sm font-medium transition-all ${
                              selectedFilters.quickFilter === filter.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Sort By */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <Collapsible open={sortByOpen} onOpenChange={setSortByOpen}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-900">Sort By</h3>
                        {sortByOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 transition-all duration-300 ease-in-out">
                      <CustomDropdown
                        value={selectedFilters.sortBy}
                        onValueChange={(value) => handleFilterChange('sortBy', value)}
                        options={sortOptions}
                        placeholder="Select sort option"
                      />
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Price Range */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <Collapsible open={priceRangeOpen} onOpenChange={setPriceRangeOpen}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
                        {priceRangeOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 transition-all duration-300 ease-in-out">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="relative flex-1">
                            <Input
                              type="number"
                              value={selectedFilters.priceMin}
                              onChange={(e) => handleFilterChange('priceMin', parseInt(e.target.value) || 0)}
                              className="pr-8 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                          </div>
                          <span className="text-gray-500">-</span>
                          <div className="relative flex-1">
                            <Input
                              type="number"
                              value={selectedFilters.priceMax}
                              onChange={(e) => handleFilterChange('priceMax', parseInt(e.target.value) || 0)}
                              className="pr-8 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                          </div>
                        </div>
                        
                        {/* Interactive Range Slider */}
                        <div className="relative mt-6 mb-2 h-6" ref={sliderRef}>
                          <div className="absolute w-full h-[6px] bg-gray-200 rounded-full top-1/2 transform -translate-y-1/2">
                            <div 
                              className="absolute h-full bg-blue-600 rounded-full"
                              style={{
                                left: `${(selectedFilters.priceMin / 1000) * 100}%`,
                                width: `${((selectedFilters.priceMax - selectedFilters.priceMin) / 1000) * 100}%`
                              }}
                            />
                          </div>
                          <div 
                            className={`absolute w-4 h-4 bg-blue-600 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-md cursor-pointer z-10 ${isDraggingMin ? 'scale-125' : ''} transition-transform`}
                            style={{ left: `${(selectedFilters.priceMin / 1000) * 100}%` }}
                            onMouseDown={() => setIsDraggingMin(true)}
                          />
                          <div 
                            className={`absolute w-4 h-4 bg-blue-600 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-md cursor-pointer z-10 ${isDraggingMax ? 'scale-125' : ''} transition-transform`}
                            style={{ left: `${(selectedFilters.priceMax / 1000) * 100}%` }}
                            onMouseDown={() => setIsDraggingMax(true)}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>0€</span>
                          <span>1000€</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Minimum Rating */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <Collapsible open={ratingOpen} onOpenChange={setRatingOpen}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-900">Minimum Rating</h3>
                        {ratingOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 transition-all duration-300 ease-in-out">
                      <div className="space-y-3">
                        {ratingOptions.map((rating) => (
                          <label key={rating.id} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="minRating"
                              checked={selectedFilters.minRating === rating.id}
                              onChange={() => handleFilterChange('minRating', rating.id)}
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{rating.label}</span>
                            {rating.stars > 0 && (
                              <div className="flex gap-0.5 ml-auto">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={14}
                                    className={i < rating.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                  />
                                ))}
                              </div>
                            )}
                          </label>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Destination */}
                <div className="mb-4">
                  <Collapsible open={destinationOpen} onOpenChange={setDestinationOpen}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-900">Destination</h3>
                        {destinationOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 transition-all duration-300 ease-in-out">
                      <CustomDropdown
                        value={selectedFilters.destination}
                        onValueChange={(value) => handleFilterChange('destination', value)}
                        options={destinationOptions}
                        placeholder="Select destination"
                      />
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col gap-2 mt-8">
                  <Button 
                    onClick={applyFilters}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Apply Filters
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={resetFilters}
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Tours Section */}
            <div className="w-full lg:w-3/4">
              {/* Mobile Filter Toggle */}
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="text-lg font-semibold text-gray-900">Showing {toursData.length} tours</h3>
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-200 transform active:scale-95"
                >
                  <Filter size={18} className="text-gray-600" />
                  <span className="text-gray-700">Filters</span>
                </button>
              </div>
              
              {/* Section Header */}
              <div className="mb-8">
                <SectionHeader 
                  title="DESERT SAFARI ADVENTURES IN EGYPT" 
                  description="Discover our most loved tours and unforgettable experiences in Egypt" 
                />
              </div>
              
              {/* Tours Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {toursData.map((tour) => (
                  <div key={tour.id} className="transform transition-all duration-300 hover:scale-105">
                    <TourCard
                      imagePath={tour.imagePath}
                      city={tour.city}
                      title={tour.title}
                      price={tour.price}
                      rating={tour.rating}
                      duration={tour.duration}
                      variant={tour.variant}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Mobile Filter Sheet with IMPROVED animation */}
      <MobileFilterSheet
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
        quickFilters={quickFilters}
        ratingOptions={ratingOptions}
        sortOptions={sortOptions}
        destinationOptions={destinationOptions}
        quickFilterOpen={quickFilterOpen}
        setQuickFilterOpen={setQuickFilterOpen}
        sortByOpen={sortByOpen}
        setSortByOpen={setSortByOpen}
        priceRangeOpen={priceRangeOpen}
        setPriceRangeOpen={setPriceRangeOpen}
        ratingOpen={ratingOpen}
        setRatingOpen={setRatingOpen}
        destinationOpen={destinationOpen}
        setDestinationOpen={setDestinationOpen}
        isDraggingMin={isDraggingMin}
        setIsDraggingMin={setIsDraggingMin}
        isDraggingMax={isDraggingMax}
        setIsDraggingMax={setIsDraggingMax}
      />
    </>
  )
}

export default CategoryPage