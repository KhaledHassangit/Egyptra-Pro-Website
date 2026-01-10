"use client";

import { Search } from "lucide-react";
import Container from "@/util/Container";
import { SearchBarProps } from "@/constants/types";



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
    <Container className={`-mt-6 relative z-10 mb-12 ${className}`}>
      <form onSubmit={handleSearch} className="bg-white p-2 rounded-lg shadow-lg flex items-center gap-2 max-w-3xl mx-auto border border-gray-100">
        <Search className="text-gray-400 ml-3" size={20} />
        <input
          type="text"
          name="query"
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-700 p-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </form>
    </Container>
  );
}