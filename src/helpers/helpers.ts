import { Review } from "@/constants/types";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
export const createSampleReview = (): Review => ({
    id: 'sample',
    rating: 5,
    title: 'Sample Title',
    content: 'Sample content for the review card that will be replaced with a skeleton during loading.',
    authorName: 'Sample Author',
    authorLocation: 'Sample Location',
    createdAt: new Date().toISOString(),
    userId: '',
    tourId: '',
    updatedAt: new Date().toISOString(),
    user: {
        id: 'sample-user',
        email: 'sample@example.com',
        firstName: 'Sample',
        lastName: 'User'
    },
    tour: {
        id: 0,
        imagePath: '/sample.jpg',
        city: 'Sample City',
        title: 'Sample Tour',
        price: '$0',
        rating: '5.0',
        duration: '0 days',
        category: 'Sample',
        variant: 'simple'
    }
});
