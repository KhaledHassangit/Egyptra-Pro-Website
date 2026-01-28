import Container from "@/util/Container";
import PageHero from "@/util/PageHero";
import { Faq } from "@/components/shared/faq";

export default function FaqPage() {


  return (
    <section>
      <PageHero currentPageUrl="faq" currentPage="FAQ" title="FAQ" />
      <Container className="py-16">
        <Faq />
      </Container>
    </section>
  );
}