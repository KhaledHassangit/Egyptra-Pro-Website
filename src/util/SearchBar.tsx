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
        className="bg-white h-[55px] shadow-lg flex items-center max-w-3xl mx-auto border border-gray-100 overflow-hidden"
      >
        <Search className="text-gray-400 ml-4 flex-shrink-0" size={20} />
        <input
          type="text"
          name="query"
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-700 h-full pl-3 rounded-l-[14px]"
        />
        <Button 
          type="submit" 
          className="bg-blue-600 text-white px-8 h-full rounded-r-[14px] font-medium hover:bg-blue-700 transition flex items-center justify-center flex-shrink-0"
        >
          {buttonText}
        </Button>
      </form>
    </Container>
  );
}