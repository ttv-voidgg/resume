import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/wahab.jpg'
import avatarImage4 from '@/images/avatars/mohd.jpg'

const testimonials = [
  [
    {
      content:
        'Eejay always led by example, and I was lucky enough to work under him. I was always impressed by his ability to push us to reach our full potential.',
      author: {
        name: 'Abdul Wahab',
        role: 'UI/UX Expert',
        company: 'ConvrtX',
        image: avatarImage3,
      },
    },

  ],
  [
    {
      content:
        'He has made sure to deliver with utmost client satisfaction using industry best practices & making sure that the latest development guidelines were followed.',
      author: {
        name: 'Dr. Mohammed Raiyan',
        role: 'Head of Product Development',
        company: 'ConvrtX',
        image: avatarImage4,
      },
    },
  ],
  // [
  //   {
  //     content:
  //       'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
  //     author: {
  //       name: 'Leah Kiehn',
  //       role: 'Creative Director',
  //       image: avatarImage6,
  //     },
  //   },
  // ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
          <div className="mt-1 text-xs text-slate-400">{author.company}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from my teammates...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          I have led and worked with remote teams from the Philippines, USA, Canada, Ukraine, India, Pakistan and UAE. Here is what they have to say about me.
        </p>
      </Container>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={isExpanded ? undefined : 'hidden lg:list-item'}
                >
                  <ul role="list">
                    {column
                      .slice(0, isExpanded ? undefined : 1)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && 'hidden lg:list-item',
                            testimonialIndex === 1 && 'lg:mt-8',
                            testimonialIndex > 1 && 'mt-8'
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            {/* <Expandable.Button>Read more testimonials</Expandable.Button> */}
          </>
        )}
      </Expandable>
    </section>
  )
}
