import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Transparency, compassion, creativity, and critical thinking are the quadfecta
          that helps my team achieve great heights.
        </p>
        <p className="mt-4">
        Before, when I was in college, I always imagined that project management was just a bunch of tedious processes
         to drive projects from start to end. I thought that it was enough to know the basics, and then all should be good.
        </p>
        <p className="mt-4">
          But this isn’t how great project managers work at all.
        </p>
        <p className="mt-4">
        Immediately after graduating college, I started working as a developer. 
        At that point, I felt like there should be more to it which led me to 
        begin searching for answers that brought me the following objectives:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Understand the culture of the team and their existing process by observing and communicating',
            'Discuss project plans together with the team',
            'Encourage my team to be transparent and have their voices heard',
            'Be a leader who knows when to decline requirements and support them with facts conferred with the team',
            'Enhance the current process based on observation during the project life cycle',
            'Trust my team and prepare them to become leaders and not just followers',
            'Drive growth by motivating my team to explore outside of their comfort zone',
            'Accept my weaknesses by taking constructive criticism to improve myself',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        I improved the existing processes of the teams I’ve worked with by being someone they can trust. 
        Project management is not just about the processes needed to make a project successful; 
        not just about satisfying the stakeholders by saying “YES” to everything in defiance of logic and in exchange for the teams’ morale. 
        It is more than that, and that’s where I stand with my team.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Want to know more about me?{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
