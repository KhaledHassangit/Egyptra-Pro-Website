"use client"

import { TourCard } from '@/components/shared/TourCard'
import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'
import PageHero from '@/util/PageHero'
import { Filter } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { MobileFilterSheet } from '@/components/category/MobileFilterSheet'
import { FilterSidebar } from '@/components/category/FilterSidebar'
import { Tour, FilterState, FilterOption, SortOption } from '@/constants/types'
import { destinationOptions, quickFilters, ratingOptions, sortOptions, toursData } from '@/constants/data'

const CategoryPage = () => {
  
  const [showFilters, setShowFilters] = useState(false)
  const [quickFilterOpen, setQuickFilterOpen] = useState(true)
  const [sortByOpen, setSortByOpen] = useState(true)
  const [priceRangeOpen, setPriceRangeOpen] = useState(true)
  const [ratingOpen, setRatingOpen] = useState(true)
  const [destinationOpen, setDestinationOpen] = useState(true)
  
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
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


  return (
    <>
      {/* Page Hero Section */}
      <PageHero 
        title="Desert Safari Adventures in Egypt" 
        currentPage="Safari" 
        currentPageUrl="/category/safari" 
      />
      
      {/* Main Content Area */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Section - Desktop */}
            <div className="hidden lg:block w-full lg:w-1/4">
              <FilterSidebar
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
                {toursData.map((tour) => (
                  <div key={tour.id} className="transform transition-all duration-400 hover:scale-105 mx-auto">
                    <TourCard
                      imagePath={tour.imagePath}
                      city={tour.city}
                      title={tour.title}
                      price={tour.price}
                      rating={tour.rating}
                      duration={tour.duration}
                      variant="detailed"
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