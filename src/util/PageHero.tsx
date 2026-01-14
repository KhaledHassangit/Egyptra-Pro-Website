import { PageHeroProps } from '@/constants/types'
import Container from '@/util/Container'
import Link from 'next/link'

const PageHero = ({ title, currentPage, currentPageUrl }: PageHeroProps) => {
  return (
    <section 
      className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] text-white overflow-hidden"
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

      <Container className="relative z-10 flex flex-col items-start justify-start gap-2 sm:gap-3 pt-6 sm:pt-8 md:pt-10 text-left">
        <h1 
          className="font-medium leading-[1.2]"
          style={{ 
            fontSize: 'clamp(24px, 5vw, 32px)',
            maxWidth: '100%'
          }}
        >
          {title}
        </h1>
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
      </Container>
    </section>
  )
}

export default PageHero