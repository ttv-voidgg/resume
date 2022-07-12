import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Project Management': {
    'Google Project Management Professional Certified': '',
    'Agile and Waterfall Methodologies': '',
    'Change management': '',
    'Creating user stories, project architecture, and wireframes': '',
    'Tools: Jira, Monday, Asana, Confluence,': '',
  },
  'Automation': {
    'Company process automation': '',
    'Agile CRM': '',
    'ITFT': '',
    'Resultflow': '',
  },
  'Web Programming': {
    'HTML5 / CSS3 / XML': '',
    'Javascript frameworks: Jquery / Node / React / Next': '',
    'CSS frameworks: Tailwind / Bootstrap': '',
    'Git / Vercel': '',
    'Linux / Apache / MySQL / PHP': '',
    'Codeigniter': '',
    'WordPress / WooCommerce / OpenCart': '',
  },
  'API': {
    'Facebook / Twitter / Twitch / Youtube': '',
    'Google Maps / Analytics / AdSense / AdWords / Webmaster Tools': '',
    'Paypal / Stripe': '',
  },
  'Digital Arts': {
    'Adobe Creative Suite': '',
    '3ds Max / Maya / Blender': '',
    'Photography / Videography': '',
  },  
}

export function TableOfContents() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="skills-title">
          Skills
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 1)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
