"use client";

import { Search } from "lucide-react";
import Container from "@/util/Container";
import { SearchBarProps } from "@/constants/types";
import { Button } from "@/components/ui/button";

export function SearchBar({ 
  placeholder = "What do you want to do?", 
  buttonText = "Search",
  className = "",
  onSearch
}: SearchBarProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <Container className={`mt-6 relative z-10 mb-12 ${className}`}>
      <form 
        onSubmit={handleSearch} 
        className="bg-white border border-[#D1D5DC] h-auto min-h-[50px] sm:h-[50px] rounded-[14px] shadow-md flex flex-col sm:flex-row items-center max-w-3xl mx-auto overflow-hidden"
      >
        <div className="flex items-center w-full sm:flex-1 h-full">
          <Search className="text-[#99A1AF] ml-4 flex-shrink-0" size={20} />
          <input
            type="text"
            name="query"
            placeholder={placeholder} 
            className="flex-1 outline-none text-[#0A0A0A80] h-full pl-3 py-3 sm:py-0"
          />
        </div>
        <Button 
          type="submit" 
          className="bg-primary text-white w-full sm:w-[110px] h-[50px] rounded-b-[14px] sm:rounded-r-[14px] sm:rounded-bl-none font-medium hover:bg-blue-700 transition flex items-center justify-center flex-shrink-0"
        >
          {buttonText}
        </Button>
      </form>
    </Container>
  );
}