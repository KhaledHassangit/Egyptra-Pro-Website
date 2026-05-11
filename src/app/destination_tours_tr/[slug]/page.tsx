import { redirect } from 'next/navigation'

interface DestinationAliasPageProps {
  params: {
    slug: string
  }
}

export default function DestinationAliasPage({ params }: DestinationAliasPageProps) {
  const slug = params.slug?.toLowerCase() ?? ''
  redirect(`/destination-tours?location=${slug}`)
}
