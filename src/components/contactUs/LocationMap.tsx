"use client"
import { Button } from '@/components/ui/button'
import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

const LocationMap = () => {
  const [mapKey, setMapKey] = useState(0);

  const resetMap = () => {
    setMapKey(prev => prev + 1);
  };

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d7069497.183318556!2d37.17010510000001!3d30.096966500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16!4m6!3e6!4m0!4m3!3m2!1d27.2137243!2d33.840551399999995!5e0!3m2!1sen!2seg!4v1768304014749!5m2!1sen!2seg&hl=en";

  return (
    <div className="flex-1 bg-white rounded-[10px] shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden relative">
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
      
      <div className="relative w-full h-full">
        <iframe
          key={mapKey}
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location in Hurghada"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

export default LocationMap;