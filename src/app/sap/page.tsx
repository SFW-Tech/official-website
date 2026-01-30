import React from 'react'
import { Metadata } from 'next'
import Herosection from '../components/sappage/Herosection'
import Content from '../components/sappage/Content'

export const metadata: Metadata = {
  title: "SAP Implementation & Consulting",
  description: "Softworks Technologies provides expert SAP implementation, consulting, and support services to help businesses optimize their enterprise operations and drive digital transformation.",
  keywords: [
    "SAP Implementation Coimbatore",
    "SAP Consulting Services",
    "SAP Support and Maintenance",
    "Enterprise Resource Planning",
    "SAP Integration Solutions",
    "Softworks Technologies SAP"
  ],
};

function page() {
  return (
    <div>
      <Herosection />
      <Content />
    </div>
  )
}

export default page