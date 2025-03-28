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
          Transparency, compassion, creativity, and critical thinking define my approach to project management.
          My mission is to lead teams toward excellence, balancing efficiency with innovation.
        </p>
        <p className="mt-4">
          When I was in college, I assumed project management was just a series of processes to push projects from start to finish.
          I thought knowing the basics would be enough.
        </p>
        <p className="mt-4">
          But great project management is so much more than that.
        </p>
        <p className="mt-4">
          After graduating, I started as a developer.
          I quickly realized there was more to leading projects than just following protocols.
          This realization sparked my curiosity and led me to these guiding principles:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            { boldText: "Understand team culture & processes", description: "Observe, communicate, and learn before implementing changes." },
            { boldText: "Collaborate on project planning", description: "Engage the team in shaping the roadmap for success." },
            { boldText: "Encourage transparency & inclusion", description: "Ensure every voice is heard and valued." },
            { boldText: "Make informed leadership decisions", description: "Challenge unrealistic requirements with data-driven insights." },
            { boldText: "Refine processes continuously", description: "Improve workflows through iterative enhancements." },
            { boldText: "Build trust & leadership", description: "Empower team members to grow as leaders, not just contributors." },
            { boldText: "Push boundaries", description: "Inspire teams to explore beyond their comfort zones." },
            { boldText: "Embrace constructive feedback", description: "Use critiques as fuel for personal and professional growth." },
          ].map((item, index) => (
            <li key={index} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">
                <strong>{item.boldText}</strong> – {item.description}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        Project management isn’t just about structure or keeping stakeholders happy by saying “yes” to everything.
        It’s about fostering trust, balancing priorities, and making informed decisions that benefit both the project and the team.
        That’s the philosophy I bring to every project I lead.
        </p>
        <p className="mt-10">
          <Link
            href="#get-connected"
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
