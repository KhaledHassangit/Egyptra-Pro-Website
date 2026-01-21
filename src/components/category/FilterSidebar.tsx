// components/category/FilterSidebar.tsx
"use client"

import { ChevronDown, ChevronUp, Star } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible'
import { CustomDropdown } from './CustomDropdown'
import { FilterSidebarProps } from '@/constants/types'


export const FilterSidebar = ({
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
}: FilterSidebarProps) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
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
  )
}