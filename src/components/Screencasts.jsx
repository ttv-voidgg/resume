import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/ielts.png'
import setupImage from '@/images/screencasts/google-cert.png'
import strokesImage from '@/images/screencasts/wes.png'
import { GridPattern } from '@/components/GridPattern'

const videos = [
  {
    title: 'Google PMP Certification',
    description:
      'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
    image: setupImage,
    url: ''
  },
  {
    title: 'IELTS Certification',
    description:
      'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
    image: gridsImage,
  },
  {
    title: 'WES Assessment',
    description:
      'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
    image: strokesImage,
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
          Over an hour of high quality, step-by-step video content to sharpen
          your icon design workflow.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Learn how to design your very first icons in a series of screencasts
          that will teach you everything you need to know to go from beginner to
          pro in just over an hour.
        </p>
      </Container>
      <Container size="md" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 text-center gap-y-10 gap-x-8 md:grid-cols-3"
        >
          {videos.map((video) => (
            <li key={video.title} className="">
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
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
