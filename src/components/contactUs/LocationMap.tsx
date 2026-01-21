"use client"
import { Button } from '@/components/ui/button'
import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

const LocationMap = () => {
  const [mapKey, setMapKey] = useState(0)

  const resetMap = () => {
    setMapKey(prev => prev + 1)
  }

  // Zoom قريب + Marker واضح
  const mapSrc = `
    https://www.google.com/maps?q=27.2137243,33.8405514&z=16&output=embed
  `

  return (
    <div className="flex-1 bg-white rounded-[10px] shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden relative">
      
      {/* Reset Button */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button
          onClick={resetMap}
          size="sm"
          className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 shadow-md h-[36px] px-3 flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset Location</span>
        </Button>
      </div>

      {/* Map */}
      <iframe
        key={mapKey}
        src={mapSrc}
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      />
    </div>
  )
}

export default LocationMap
