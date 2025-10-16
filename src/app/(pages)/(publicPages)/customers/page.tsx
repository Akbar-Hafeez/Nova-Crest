import ClientFaqs from '@/components/main-ui-components/clientPage/clientFaqs/clientFaqs'
import ClientsSection from '@/components/main-ui-components/clientPage/clientSection'
import CtaBannerClient from '@/components/main-ui-components/clientPage/CTAbanner/CtaBanner'
import DevSection from '@/components/main-ui-components/LandingPage/DeveloperBanner/Developer'
import React from 'react'

export default function page() {
  return(

  <>
  <ClientsSection/>
  <DevSection/>
  <ClientFaqs  />
  <CtaBannerClient/>
  </>
  )
}
