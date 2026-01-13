const OfficeHours = () => {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-8">
      <h3 className="text-2nd-primary font-bold mb-4">Office Hours</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[#4A5565] font-normal text-sm leading-[24px]">Monday - Friday</span>
          <span className="text-2nd-primary font-bold text-sm leading-[24px]">9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#4A5565] font-normal text-sm leading-[24px]">Saturday</span>
          <span className="text-2nd-primary font-bold text-sm  leading-[24px]">10:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#4A5565] font-normal text-sm leading-[24px]">Sunday</span>
          <span className="text-2nd-primary font-bold text-sm  leading-[24px]">10:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
  )
}

export default OfficeHours;