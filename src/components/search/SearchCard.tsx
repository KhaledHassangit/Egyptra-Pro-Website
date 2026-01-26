import { useState } from "react";
import { Search, Ship, Mountain, Bike, Building2, ChevronUp, Tag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SearchCard = () => {
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);
  const [sortValue, setSortValue] = useState("popular");

  const popularSearches = ["Hurghada", "Luxor", "Cairo", "Sharm El Sheikh", "Desert Safari"];
  
  const thingsToDo = [
    { icon: Ship, label: "Snorkeling" },
    { icon: Bike, label: "Quad Safari" },
    { icon: Ship, label: "Boat Trips" },
    { icon: Building2, label: "City Tours" },
    { icon: Mountain, label: "Desert" },
  ];

  const categories = ["Activity", "Boat Tour", "Historical", "Multi Day", "Safari"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className={cn(
        "bg-white  p-6 md:p-8 flex flex-col gap-6 relative",
        isAdvancedFiltersOpen ? "rounded-t-2xl" : "rounded-2xl"
      )}>
        {/* Search Bar */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search destinations, activities, or experiences..."
              className="pl-12 h-12 md:h-14 rounded-xl text-sm md:text-base"
            />
          </div>
          <Button className="h-12 md:h-14 px-6 md:px-8 rounded-xl text-sm md:text-base font-medium">
            Search
          </Button>
        </div>

        {/* Popular Searches */}
        <div className="flex flex-col gap-3">
          <span className="text-muted-foreground text-left text-sm font-medium">Popular searches:</span>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors text-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Things To Do */}
        <div className="flex flex-col gap-3">
          <span className="text-foreground text-sm  text-left font-bold">Things To Do</span>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {thingsToDo.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:border-primary hover:text-primary transition-colors text-foreground"
              >
                <item.icon size={16} />
                {item.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="h-px bg-border w-full" />

        {/* Advanced Filters Toggle */}
        <Button
          variant="ghost"
          onClick={() => setIsAdvancedFiltersOpen(!isAdvancedFiltersOpen)}
          className="flex text-left items-center gap-2 text-primary font-medium text-sm h-fit p-0 hover:bg-transparent"
        >
          Advanced Filters
          <ChevronUp
            size={16}
            className={cn(
              "transition-transform duration-200 ease-out",
              isAdvancedFiltersOpen ? "" : "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* Advanced Filters Content with smooth animation */}
      <div 
        className={cn(
          "bg-white shadow-md rounded-b-2xl overflow-hidden transition-all duration-400 ease-in-out",
          isAdvancedFiltersOpen ? "max-h-[800px] opacity-100 mt-[-1px]" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-6 md:p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Price Range */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <Tag size={16} />
                Price Range
              </div>
              <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full rounded-full" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-1">
                  <span className="text-xs text-muted-foreground">Min Price</span>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input type="number" defaultValue="0" className="pl-7 h-10" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-xs text-muted-foreground">Max Price</span>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input type="number" defaultValue="500" className="pl-7 h-10" />
                  </div>
                </div>
              </div>
              <div className="h-px bg-border w-full md:hidden" />
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-foreground font-semibold text-sm">Categories</h3>
              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center gap-3">
                    <Checkbox
                      id={category}
                    />
                    <label
                      htmlFor={category}
                      className="text-sm font-medium leading-none cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-foreground font-semibold text-sm">Sort By</h3>
                <ChevronUp
                  size={16}
                  className="text-muted-foreground"
                />
              </div>
              <Select value={sortValue} onValueChange={setSortValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
              <div className="h-px bg-border w-full" />
            </div>
          </div>

          <div className="h-px bg-border w-full" />

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="h-12 px-6 text-foreground hover:text-foreground"
            >
              Clear All
            </Button>
            <Button className="h-12 px-8 flex-1 md:flex-none font-medium">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;