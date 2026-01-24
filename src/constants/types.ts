/* eslint-disable @typescript-eslint/no-explicit-any */

export interface LoginFormProps {
    email: string;
    password: string;
    errors: Record<string, string>;
    showPassword: boolean;
    isLoading: boolean;
    onEmailChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onTogglePassword: () => void;
    onSubmit: (e: React.FormEvent) => void;
    onClearError: (field: string) => void;
}
export interface RegisterFormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    errors: Record<string, string>;
    showPassword: boolean;
    showConfirmPassword: boolean;
    isLoading: boolean;
    onNameChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onConfirmPasswordChange: (value: string) => void;
    onTogglePassword: () => void;
    onToggleConfirmPassword: () => void;
    onSubmit: (e: React.FormEvent) => void;
    onClearError: (field: string) => void;
}


export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    avatar?: string | null;
    roleId?: string;
    createdAt?: string;
    updatedAt?: string;
    role?: string | {
        id: string;
        name: string;
        description: string;
        permissions: Array<{
            id: string;
            name: string;
            description: string;
        }>;
    };
}

export interface AuthResponse {
    access_token: string;
    user: User;
}

export interface AuthState {
    user: User | null;
    token: string | null;
}


export interface AuthLayoutProps {
    children: React.ReactNode;
}
export interface Testimonial {
    id: number
    rating: number
    title: string
    content: string
    author: string
    location: string
    date: string
}


export interface ExclusiveDealsSectionProps {
    backgroundImage?: string;
}

export interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}

export interface LoadingButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    children: React.ReactNode;
    onClick?: () => void;
}


export interface PageHeroProps {
    title: string
    currentPage: string
    currentPageUrl?: string
}

export interface SearchBarProps {
    placeholder?: string;
    buttonText?: string;
    className?: string;
    onSearch?: (query: string) => void;
}
export interface SectionHeaderProps {
    title: string;
    description: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export interface SectionCarouselProps {
    title?: string
    description?: string
    children: React.ReactNode
    className?: string
    headerClassName?: string
    carouselClassName?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    opts?: any
}

export interface TourCardProps {
    imagePath: string;
    city: string;
    title: string;
    price: string;
    rating: string;
    duration?: string;
    groupSize?: string;
    location?: string;
    variant?: "default" | "detailed";
    className?: string;
}

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    inquiryType: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    message: string;
}

export interface ComparisonItem {
    icon: boolean;
    text: string;
}


// types/category.ts
export interface Tour {
    id: number
    imagePath: string
    city: string
    title: string
    price: string
    rating: string
    duration: string
    category: string
    variant: "detailed" | "simple"
}

export interface FilterState {
    quickFilter: string
    sortBy: string
    priceMin: number
    priceMax: number
    minRating: string
    destination: string
}

export interface FilterOption {
    id: string
    label: string
    stars?: number
}

export interface SortOption {
    value: string
    label: string
}


export interface MobileFilterSheetProps {
    isOpen: boolean
    onClose: () => void
    selectedFilters: any
    handleFilterChange: (filterType: string, value: any) => void
    applyFilters: () => void
    resetFilters: () => void
    quickFilters: FilterOption[]
    ratingOptions: FilterOption[]
    sortOptions: SortOption[]
    destinationOptions: SortOption[]
    quickFilterOpen: boolean
    setQuickFilterOpen: (open: boolean) => void
    sortByOpen: boolean
    setSortByOpen: (open: boolean) => void
    priceRangeOpen: boolean
    setPriceRangeOpen: (open: boolean) => void
    ratingOpen: boolean
    setRatingOpen: (open: boolean) => void
    destinationOpen: boolean
    setDestinationOpen: (open: boolean) => void
    isDraggingMin: boolean
    setIsDraggingMin: (dragging: boolean) => void
    isDraggingMax: boolean
    setIsDraggingMax: (dragging: boolean) => void
}
export interface CustomDropdownProps {
    value: string
    onValueChange: (value: string) => void
    options: { value: string, label: string }[]
    placeholder: string
}

export interface FilterSidebarProps {
    selectedFilters: FilterState
    handleFilterChange: (filterType: string, value: any) => void
    applyFilters: () => void
    resetFilters: () => void
    quickFilters: FilterOption[]
    ratingOptions: FilterOption[]
    sortOptions: SortOption[]
    destinationOptions: SortOption[]
    quickFilterOpen: boolean
    setQuickFilterOpen: (open: boolean) => void
    sortByOpen: boolean
    setSortByOpen: (open: boolean) => void
    priceRangeOpen: boolean
    setPriceRangeOpen: (open: boolean) => void
    ratingOpen: boolean
    setRatingOpen: (open: boolean) => void
    destinationOpen: boolean
    setDestinationOpen: (open: boolean) => void
    isDraggingMin: boolean
    setIsDraggingMin: (dragging: boolean) => void
    isDraggingMax: boolean
    setIsDraggingMax: (dragging: boolean) => void
}


// Define types based on the API response
export interface User {
    id: string;
    firstName: string;
    lastName: string;
}



export interface Review {
    id: string;
    rating: number;
    title: string;
    content: string;
    authorName: string;
    authorLocation: string;
    userId: string;
    tourId: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    tour: Tour;
}

export interface ReviewsMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}

export interface ReviewsResponse {
  success: boolean;
  message: string;
  data: {
    data: Review[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

export interface NavigationButtonsProps {
    canScrollPrev: boolean;
    canScrollNext: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}


export interface ReviewsCarouselProps {
    testimonials: Review[];
    isLoading: boolean;
    api: any;
    setApi: (api: any) => void;
}

// API Types
// API Types

export interface ApiPhoto {
    id: string;
    url: string;
    isPrimary: boolean;
}

export interface ApiVideo {
    id: string;
    url: string;
}

export interface ApiTour {
    id: string;
    title: string;
    slug: string;
    description: string;
    shortDesc: string | null;
    duration: string;
    maxGroupSize: number;
    difficulty: string;
    isOnSale: boolean;
    salePercentage: number | null;
    isActive: boolean;
    adultPrice: string | number;
    childPrice: string | number | null;
    infantPrice: string | number | null;
    guideLanguages: string[];
    badge: string | null;
    highlights: string[];
    inclusions: string[];
    isPopular: boolean;
    location: string;
    averageRating: string | number;
    reviewsCount: number;
    // Based on user JSON, these are strings in the response, not objects/IDs
    destination: string; 
    category: string; 
    
    createdAt: string;
    updatedAt: string;
    
    photos: ApiPhoto[];
    primaryPhoto: ApiPhoto | null;
    videos?: ApiVideo[];
}

export interface ToursResponse {
    data: ApiTour[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
}

export interface GetToursParams {
    location?: string;
    category?: string;
    page?: number;
    limit?: number;
}


// lib/api.ts (add these interfaces)

export interface TourPhoto {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface TourVideo {
  id: string;
  url: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDesc: string | null;
  duration: string;
  maxGroupSize: number;
  difficulty: string;
  isOnSale: boolean;
  salePercentage: number | null;
  isActive: boolean;
  adultPrice: string | number;
  childPrice: number | null;
  infantPrice: number | null;
  guideLanguages: string[];
  badge: string | null;
  highlights: string[];
  inclusions: string[];
  isPopular: boolean;
  location: string;
  averageRating: string | number;
  reviewsCount: number;
  category: string;
  destination: string;
  createdAt: string;
  updatedAt: string;
  photos: TourPhoto[];
  primaryPhoto: TourPhoto | null;
  videos?: TourVideo[];
}

export interface PaginatedResponse<T> {
  data: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}