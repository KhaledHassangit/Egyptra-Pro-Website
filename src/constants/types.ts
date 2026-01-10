
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
    username: string;
    role: string;
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
