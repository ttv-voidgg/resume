import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import ip from '@/images/resources/ip.png'
import iation from '@/images/resources/ion.png'
import cx from '@/images/resources/cx.png'
import webriver from '@/images/resources/webriver.png'
import wo from '@/images/resources/wo.png'
import ssip from '@/images/resources/ssip.png'

const resources = [
  {
    title: 'ConvrtX',
    description:
      'Project Manager',
    year: '2022',
    country: 'Toronto, Canada',
    type: 'Full-time (Remote)',
    image: function Cx() {
      return (
        <div className="relative inset-0 flex items-center justify-center">
          <Image src={cx} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'webriver',
    description:
      'Project Manager',
    year: '2013 - 2022',
    country: 'Las Pinas City, Philippines',
    type: 'Freelance',
    image: function Webriver() {
      return (
        <div className="relative inset-0 flex items-center justify-center">
          <Image src={webriver} alt="" unoptimized />
        </div>
      )
    },
  },  
  {
    title: 'iation',
    description:
      'Project Manager',
    year: '2020',
    country: 'Oregon, USA',
    type: 'Full-time (Remote)',
    image: function Iation() {
      return (
        <div className="relative inset-0 flex items-center justify-center">
          <Image src={iation} alt="" unoptimized />
        </div>
      )
    },
  }, 
  {
    title: 'Interactive Partners',
    description:
      'Account Manager',
    year: '2019 - 2020',
    country: 'Sydney, Australia',
    type: 'Full-time (Remote)',
    image: function Ip() {
      return (
        <div className="relative inset-0 flex items-center justify-center">
          <Image src={ip} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Wideout Workforces Inc.,',
    description:
      'Senior Web Developer',
    year: '2013 - 2014',
    country: 'Taguig, Philippines',
    type: 'Full-time',
    image: function Wo() {
      return (
        <div className="relative inset-0 flex items-center justify-center">
          <Image src={wo} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'SSIP Asia Inc.,',
    description:
      'Junior Software Developer',
    year: '2012 - 2013',
    country: 'Makati, Philippines',
    type: 'Full-time',
    image: function Ssip() {
      return (
        <div className="relative inset-0 flex items-center justify-center">
          <Image src={ssip} alt="" unoptimized />
        </div>
      )
    },
  },           
]

export function Resources() {
  return (
    <section
      id="work-history"
      aria-labelledby="work-history-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="work-history-title">
          Work History
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          The teams who I’ve worked and grew with
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        I have never used the word I or my, but we or our. It’s more of a team than an individual effort to finish a project with flying colours.
        The teams mentioned below have supported and motivated me to give my best, making me the person I am today.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="auto-rows-min grid grid-cols-1 items-center px-3 sm:grid-cols-2 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative overflow-hidden rounded-2xl mb-2">
                <resource.image />
              </div>
              <div className="text-center sm:text-left sm:pl-5 lg:pl-0 lg:text-center">
                <h3 className="text-3xl font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="text-md text-slate-600">
                  {resource.description}
                </p>
                <p className="text-sm leading-tight text-slate-400">
                  {resource.year}
                </p>
                <p className="mt-2 text-sm leading-tight text-slate-400">
                  {resource.country}
                </p>
                <p className="text-sm leading-tight text-slate-400">
                  {resource.type}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
