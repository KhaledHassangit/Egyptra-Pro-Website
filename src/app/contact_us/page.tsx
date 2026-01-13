import ContactForm from '@/components/contactUs/ContactForm'
import LocationMap from '@/components/contactUs/LocationMap'
import OfficeHours from '@/components/contactUs/OfficeHours'
import Container from '@/util/Container'
import PageHero from '@/util/PageHero'

const ContactUsPage = () => {

  return (
    <section>
      <PageHero title="Send us a Message" currentPageUrl='contact_us' currentPage='Contact Us'/>
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 py-12">
          {/*  Form */}
          <ContactForm />
          
          {/*  Location and Office Hours */}
          <div className="flex-1 flex flex-col gap-6 h-[auto]">

            {/* Location  */}
            <LocationMap />

            {/* Office Hours  */}
            <OfficeHours />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactUsPage;