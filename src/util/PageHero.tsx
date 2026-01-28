import { PageHeroProps } from '@/constants/types'
import Container from '@/util/Container'
import Link from "@/components/shared/link";

interface ExtendedPageHeroProps extends PageHeroProps {
  breadcrumbItems?: { name: string; url?: string }[];
}

const PageHero = ({ 
  title, 
  currentPage, 
  currentPageUrl, 
  breadcrumbItems 
}: ExtendedPageHeroProps) => {
  return (
    <section 
      className="relative w-full h-[100px] sm:h-[120px] md:h-[140px] text-white overflow-hidden"
      style={{
        backgroundImage: `url('/images/1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className="absolute inset-0 z-0" 
        style={{ backgroundColor: '#0373DECC' }}
      />

      <Container className="relative flex flex-col items-start justify-start gap-2 sm:gap-3 pt-6 sm:pt-8 md:pt-10 text-left">
        <h1 
          className="font-medium leading-[1.2]"
          style={{ 
            fontSize: 'clamp(24px, 5vw, 32px)',
            maxWidth: '100%'
          }}
        >
          {title}
        </h1>
        
        {/* Use breadcrumbItems if provided, otherwise fall back to the original breadcrumb */}
        {breadcrumbItems ? (
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
            {breadcrumbItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.url ? (
                  <Link 
                    href={item.url}
                    className="transition-all duration-300 hover:underline hover:text-opacity-80"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span>{item.name}</span>
                )}
                {index < breadcrumbItems.length - 1 && <span>/</span>}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
            <Link 
              href="/" 
              className="transition-all duration-300 hover:underline hover:text-opacity-80"
            >
              Home
            </Link>
            <span>/</span>
            {currentPageUrl ? (
              <Link 
                href={currentPageUrl}
                className="transition-all duration-300 hover:underline hover:text-opacity-80"
              >
                {currentPage}
              </Link>
            ) : (
              <span>{currentPage}</span>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}

export default PageHero