import Image from 'next/image';


import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import ielts from '@/images/screencasts/ielts.png'
import google from '@/images/screencasts/google-cert.png'
import wes from '@/images/screencasts/wes.png'
import { GridPattern } from '@/components/GridPattern'

const videos = [
  {
    title: 'Google Project Management Certification',
    description:
      'Credential ID: W6S8XJ5J5K3S',
    image: google,
    url: 'https://www.coursera.org/account/accomplishments/certificate/W6S8XJ5J5K3S',
    target: '_blank',
    referrer: 'noreferrer',
    status: 'Course 4 of 6',
  },  
  {
    title: 'IELTS Certification',
    description:
      'Report #: 22PH004208DEJ001G',
    image: ielts,
    url: '#certifications',
    target: '',
    referrer: '',
    status: 'Very Good User 8.0/9.0',    
  },
  {
    title: 'World Education Services',
    description:
      'Reference #: 4496917IMM',
    image: wes,
    url: '#certifications',
    target: '',
    referrer: '',
    status: 'Bachelor’s degree',    
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="relative scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 bg-slate-100"
    >


      <div className="relative isolate overflow-hidden pb-28">
        <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]  ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance text-5xl !leading-[5rem] font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              2nd Runner Up 2025 North Forge Ramp Up Weekend
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 mb-5">
                Repurposed an existing app that I&apos;ve developed, which led to rapid and efficient deployment and resulted to a working MVP. A proof that with proper OOP implementation, software can be stripped out and be implemented in various use cases, with consideration to its scope.
              </p>

              <p className="text-pretty text-lg italic text-gray-500 sm:text-xl/8">
                <strong>Labour Power Team 2025:</strong> Melind Bhroat, Jamie O&apos;niell, Juan Carlos de Borja, Landon Pinette, Alex Juma
              </p>
            </div>
            <img
                alt=""
                src="/labour-power.jpg"
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>

      <Container>
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
        <SectionHeading number="2" id="certifications-title">
          Certifications & Professional Development
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          I’m constantly learning—whether for my career or personal growth. 
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          While not everything needs a certificate, here are a few that highlight my expertise:
        </p>
      </Container>

      <Container size="md" className="mt-16 relative">
        <ol
          role="list"
          className="grid grid-cols-1 text-center gap-y-10 gap-x-8 md:grid-cols-3"
        >
          {videos.map((video) => (
            <li key={video.title} className="">
              <a href={video.url} target={video.target} rel={video.referrer}>
                <div
                  className="relative  items-center justify-center rounded-2xl p-1 shadow-lg max-w-xs mx-auto"
                  style={{
                    backgroundImage:
                      'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                  }}
                >
                  <div className="overflow-hidden rounded-xl shadow-sm">
                    <Image src={video.image} alt="" className="w-full" unoptimized />
                  </div>
                </div>
                <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900">
                  {video.title}
                </h3>
                <p className="text-sm md:text-xs lg:text-sm text-slate-600">{video.description}</p>
                <p className="text-xs text-slate-400">{video.status}</p>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
