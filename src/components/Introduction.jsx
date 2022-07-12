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
          Before, when I was in college, I always imagined that project management
          is just a bunch of boring processes to drive projects from start to end.
          I thought that you should just know what the basics are and all should be good.
        </p>
        <p className="mt-4">
          But it turns out this isn’t how great great project managers work at all.
        </p>
        <p className="mt-4">
          Immediately after graduating college, I started working as a developer.
          At that point I felt like there should be more to this. And that’s the time when I
          started searching for answers which lead me to the following objectives:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Learn the culture of the team and their current process by observing and communicating',
            'Discuss project plans together with the team',
            'Encourage my team to be transparent and have their voice be heard',
            'Be a leader who knows when to decline requirements and back them with facts discussed with the team',
            'Improve the current process based on what was observed during the project life cycle',
            'Trust my team and train them as leaders and not just as followers',
            'Drive growth by inspiring my team to explore outside of their comfort zone',
            'To accept my flaws by taking constructive criticism from the team to improve myself',
            'To NEVER become a YES MAN!',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          I was able to improve the existing processes of the teams I've worked with by being someone who the team can trust.
          Project management is not just about the processes that are needed to make a project successful; not just about satisfying the stakeholders
          by saying “YES” to everything in defiance of logic and in exchange of the teams’ morale. It is more than that! And that's where I stand together
          with my team.
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
