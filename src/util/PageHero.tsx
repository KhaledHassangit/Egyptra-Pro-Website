// components/PageHero.tsx
import Container from '@/util/Container'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  currentPage: string
  currentPageUrl?: string
}

const PageHero = ({ title, currentPage, currentPageUrl }: PageHeroProps) => {
  return (
    <section 
      className="relative w-full h-[150px]  text-white overflow-hidden"
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

      <Container className="relative  z-10 flex flex-col items-start justify-start gap-2 pt-8 text-left">
        <h1 className="font-medium text-[32px] leading-[1.2]">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-[18px] font-medium">
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