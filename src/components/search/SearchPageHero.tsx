import Container from "@/util/Container";
import SearchCard from "./SearchCard";

const SearchPageHero = () => {
    return (
        <section className="relative w-full">
            <div
                className="relative w-full text-white overflow-hidden"
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

                <Container className="relative z-10 flex flex-col items-center  text-center gap-4 md:gap-6 pt-6 md:pt-10 px-4 pb-8">
                    <h1 className="font-medium text-[28px] md:text-[40px] leading-[1.2]">
                        Discover Egypt's Wonders
                    </h1>
                    <p className="text-[16px] md:text-[18px] font-normal text-white/90 max-w-md">
                        Find and book the most amazing tours and activities across Egypt
                    </p>
                    
                    <SearchCard/>
                </Container>
            </div>
        </section>
    );
};

export default SearchPageHero;