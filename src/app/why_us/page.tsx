'use client';

import WhyUsHero from '@/components/whyUs/WhyUsHero'
import TrustNumbers from '@/components/whyUs/TrustNumbers'
import UnbeatableAdvantages from '@/components/whyUs/UnbeatableAdvantages'
import FeatureRows from '@/components/whyUs/FeatureRows'
import FlexiblePayment from '@/components/whyUs/FlexiblePayment'
import CompareSave from '@/components/whyUs/CompareSave'
import SafetySecurity from '@/components/whyUs/SafetySecurity'

const WhyUsPage = () => {
  return (
    <main className="bg-white overflow-x-hidden">
      <WhyUsHero />
      <TrustNumbers />
      <UnbeatableAdvantages />
      <FeatureRows />
      <FlexiblePayment />
      <CompareSave />
      <SafetySecurity />
    </main>
  )
}

export default WhyUsPage