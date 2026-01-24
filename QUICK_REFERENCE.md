# API Integration - Quick Reference

## Quick Start Examples

### 1. Fetching Tours by Location

```typescript
import { fetchToursByLocation, mapApiTourToCardFormat } from '@/services/tourService';

// In a client component
const [tours, setTours] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const getTours = async () => {
    try {
      const response = await fetchToursByLocation('hurghada', 1, 6);
      const mapped = response.data.map(mapApiTourToCardFormat);
      setTours(mapped);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  getTours();
}, []);

return (
  <>
    {loading && <Spinner />}
    {tours.map(tour => (
      <TourCard 
        key={tour.id}
        imagePath={tour.imagePath}
        city={tour.city}
        title={tour.title}
        price={tour.price}
        rating={tour.rating}
      />
    ))}
  </>
);
```

### 2. Fetching Tours by Category

```typescript
import { fetchToursByCategory } from '@/services/tourService';

const [activities, setActivities] = useState([]);
const [category, setCategory] = useState('safari');

useEffect(() => {
  const getActivities = async () => {
    const response = await fetchToursByCategory(category, 1, 6);
    setActivities(response.data);
  };
  getActivities();
}, [category]);
```

### 3. Server-Side Rendering (Homepage)

```typescript
// src/app/page.tsx - Server Component
import { fetchMultipleTours } from '@/services/tourService';

export default async function Home() {
  const toursData = await fetchMultipleTours([
    { type: 'location', value: 'cairo', limit: 6 },
    { type: 'category', value: 'historical', limit: 6 },
    { type: 'location', value: 'hurghada', limit: 6 }
  ]).catch(() => ({}));

  return (
    <div>
      <PopularTourSection initialData={toursData.location_cairo} />
      {/* Other sections */}
    </div>
  );
}
```

### 4. Single Tour Detail Page

```typescript
// src/app/[slug]/page.tsx
import { fetchTourBySlug } from '@/services/tourService';

export default async function TourDetail({ params }) {
  const tour = await fetchTourBySlug(params.slug);

  return (
    <div>
      <h1>{tour.title}</h1>
      <Image src={tour.primaryPhoto?.url} alt={tour.title} />
      <p>{tour.description}</p>
      <p>Price: ${tour.adultPrice}</p>
      {tour.isOnSale && <span>Sale: {tour.salePercentage}% off</span>}
      {/* More content */}
    </div>
  );
}
```

---

## API Endpoints

### List Endpoints (No Authentication Required)

**By Location:**
```
GET /api/v1/tours?location={location}&page={page}&limit={limit}
```

**By Category:**
```
GET /api/v1/tours?category={category}&page={page}&limit={limit}
```

**By Multiple Filters:**
```
GET /api/v1/tours?location={location}&category={category}&page={page}&limit={limit}
```

### Pagination

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- Response includes: `totalPages`, `currentPage`, `totalItems`

---

## Response Data Structure

### Tour Object

```typescript
{
  // Identifiers
  id: string;
  slug: string;
  
  // Basic Info
  title: string;
  description: string;
  shortDesc: string | null;
  
  // Duration & Difficulty
  duration: string;           // e.g., "4 hours", "2 days"
  difficulty: string;         // "Easy", "Moderate", "Hard"
  maxGroupSize: number;       // Maximum group size
  
  // Pricing
  adultPrice: string | number;
  childPrice: string | number | null;
  infantPrice: string | number | null;
  isOnSale: boolean;
  salePercentage: number | null;
  
  // Classification
  category: string;           // Activity type
  location: string;           // Short code: "hurghada", "cairo"
  destination: string;        // Display name: "Hurghada", "Cairo"
  
  // Metadata
  isActive: boolean;
  isPopular: boolean;
  badge: string | null;       // e.g., "Best Seller", "New"
  guideLanguages: string[];   // ["English", "German", "Russian"]
  
  // Content
  highlights: string[];       // Key highlights
  inclusions: string[];       // What's included
  
  // Ratings
  averageRating: string | number;  // 0-5
  reviewsCount: number;
  
  // Media
  primaryPhoto?: {
    id: string;
    url: string;
    isPrimary: boolean;
  };
  photos?: Photo[];
  videos?: Video[];
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
}
```

---

## Supported Values

### Locations (location parameter)
```
cairo
luxor
hurghada
sharm_el_sheikh
el_gouna
marsa_alam
soma_bay
maadi_bay
salh_hasheed
```

### Categories (category parameter)
```
safari
boat_tour
diving
snorkeling
historical
city_tour
cultural
multi_day
adventure
```

---

## Error Handling Examples

### Network Error
```typescript
try {
  const tours = await fetchToursByLocation('cairo');
} catch (error) {
  console.error('Failed to fetch tours:', error);
  // Show error toast/message to user
}
```

### Empty Results
```typescript
if (response.data.length === 0) {
  return <EmptyState message="No tours available" />;
}
```

### Loading State
```typescript
{isLoading && <LoadingSpinner />}
{!isLoading && tours.length === 0 && <EmptyState />}
{!isLoading && tours.length > 0 && <TourList tours={tours} />}
```

---

## Component Props Reference

### TourCard Component
```typescript
interface TourCardProps {
  imagePath: string;      // Image URL
  city: string;          // Display name (e.g., "Cairo")
  title: string;         // Tour title
  price: string;         // Formatted price (e.g., "$50")
  rating: string;        // Rating with count (e.g., "4.8 (320)")
  duration?: string;     // Duration (optional)
  groupSize?: string;    // Group size (optional)
  location?: string;     // Location code (optional)
  variant?: "default" | "detailed";
  className?: string;
}
```

### Usage Example
```typescript
<TourCard
  imagePath={tour.primaryPhoto?.url || '/default.jpg'}
  city={tour.destination}
  title={tour.title}
  price={`$${calculatePrice(tour)}`}
  rating={`${tour.averageRating} (${tour.reviewsCount})`}
  duration={tour.duration}
  variant="default"
/>
```

---

## Data Transformation Helpers

### Map API Tour to Display Format
```typescript
import { mapApiTourToCardFormat } from '@/services/tourService';

const apiTour = response.data[0];
const displayTour = mapApiTourToCardFormat(apiTour);

// Result includes:
// - price: formatted with $
// - rating: with review count
// - isOnSale: calculated
// - imagePath: primary photo URL
```

### Custom Price Calculation
```typescript
function getDisplayPrice(tour: ApiTour): string {
  const price = Number(tour.adultPrice);
  
  if (tour.isOnSale && tour.salePercentage) {
    const discounted = price * (1 - tour.salePercentage / 100);
    return `$${discounted.toFixed(2)}`;
  }
  
  return `$${price}`;
}
```

---

## Common Patterns

### Fetch on Mount
```typescript
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchToursByLocation(location);
      setTours(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, [location]); // Re-fetch when location changes
```

### Conditional Rendering
```typescript
{isLoading ? (
  <Spinner />
) : error ? (
  <ErrorAlert message={error} />
) : tours.length === 0 ? (
  <EmptyState />
) : (
  <TourGrid tours={tours} />
)}
```

### Search/Filter Pattern
```typescript
const [category, setCategory] = useState('safari');

const handleCategoryChange = async (newCategory: string) => {
  setLoading(true);
  const data = await fetchToursByCategory(newCategory);
  setTours(data.data);
  setLoading(false);
};
```

---

## Environment Configuration

### Base URL
The base URL is configured in `src/api/server-api.ts`:
```typescript
const BASE_URL = 'https://egyptrapro-nestjs-production.up.railway.app';
```

### To Change Environment (Development/Staging)
```typescript
// src/api/server-api.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 
  'https://egyptrapro-nestjs-production.up.railway.app';
```

Add to `.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

---

## Debugging Tips

### Enable Network Logging
```typescript
async function request(options) {
  console.log('→ Request:', options.endpoint);
  const response = await fetch(...);
  console.log('← Response:', response.status);
  return response;
}
```

### Check API Response in Browser
```typescript
// DevTools Console
fetch('https://egyptrapro-nestjs-production.up.railway.app/api/v1/tours?location=cairo')
  .then(r => r.json())
  .then(data => console.table(data.data))
```

### Inspect Tour Data
```typescript
const [tours, setTours] = useState([]);

useEffect(() => {
  fetchToursByLocation('hurghada').then(res => {
    console.log('Raw Response:', res);
    console.log('Tours:', res.data);
    console.log('First Tour:', res.data[0]);
  });
}, []);
```

---

## Performance Tips

### 1. Batch Requests
```typescript
// Good: Single request for multiple data sets
const data = await fetchMultipleTours([
  { type: 'location', value: 'cairo', limit: 6 },
  { type: 'location', value: 'hurghada', limit: 6 }
]);

// Avoid: Multiple separate requests
const cairo = await fetchToursByLocation('cairo', 1, 6);
const hurghada = await fetchToursByLocation('hurghada', 1, 6);
```

### 2. Pagination
```typescript
// Load 6 items at a time, not all
const response = await fetchToursByLocation(location, 1, 6);

// For "load more" pattern
const page = Math.ceil(tours.length / 6) + 1;
const more = await fetchToursByLocation(location, page, 6);
setTours([...tours, ...more.data]);
```

### 3. Memoization
```typescript
const mappedTours = useMemo(
  () => response?.data.map(mapApiTourToCardFormat) || [],
  [response]
);
```

---

## Testing Checklist

- [ ] Fetch tours by location works
- [ ] Fetch tours by category works
- [ ] Images display correctly
- [ ] Pricing displays correctly (with discounts)
- [ ] Ratings display correctly
- [ ] Loading states work
- [ ] Error handling works
- [ ] Empty states work
- [ ] Responsive on mobile
- [ ] Tab switching works without page reload
- [ ] No console errors

---

**Last Updated**: January 24, 2026
