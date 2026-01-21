// components/MobileFilterSheet.tsx
"use client"

import { Filter, ChevronDown, ChevronUp, Star, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible'
import { CustomDropdown } from './CustomDropdown'
import { MobileFilterSheetProps } from '@/constants/types'



export const MobileFilterSheet = ({ 
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
}: MobileFilterSheetProps) => {
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
                {quickFilters.map((filter) => (
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
                {ratingOptions.map((rating) => (
                  <label key={rating.id} className="flex items-center gap-3 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="minRating"
                      checked={selectedFilters.minRating === rating.id}
                      onChange={() => handleFilterChange('minRating', rating.id)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{rating.label}</span>
                    {rating.stars && rating.stars > 0 && (
                      <div className="flex gap-0.5 ml-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < rating.stars! ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
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