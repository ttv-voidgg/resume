import Image from 'next/image';


import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import ielts from '@/images/screencasts/ielts.png'
import google from '@/images/screencasts/google-cert.png'
import wes from '@/images/screencasts/wes.png'
import { GridPattern } from '@/components/GridPattern'

const videos = [
  {
    title: 'Google PMP Certification',
    description:
      'Credential ID: W6S8XJ5J5K3S',
    image: google,
    url: 'https://www.coursera.org/account/accomplishments/certificate/W6S8XJ5J5K3S',
    target: '_blank',
    referrer: 'noreferrer',
    status: 'Course 2 of 6',
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
      <Container>
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
        <SectionHeading number="2" id="certifications-title">
          Certifications and Assessments
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Always seeking for avenues of growth.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        I like researching new stuff not just for my career but also for myself outside the industry; 
        as you read through this site, I might be currently learning something new. 
        Of course, not everything needs to be on paper, such as certificates, but here are some.
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
