import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import { SectionHeading } from '@/components/SectionHeading'

export function FreeChapters() {
  return (
    <section
      id="get-connected"
      aria-label="Get connected"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-center gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
          <h2 className="inline-flex items-center rounded-full py-1 px-4 text-white ring-1 ring-inset ring-white mb-8" id="contact-title">
            <span className="font-mono text-sm" aria-hidden="true">04</span><span className="ml-3 h-3.5 w-px bg-white/20">
            </span><span className="ml-3 text-base font-medium tracking-tight">Get Connected!</span>
          </h2>          
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Know more about me!
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              I’m always open for job opportunities, projects, and most especially new life experiences! 
            </p>
          </div>
          <div className="lg:pl-16 z-10 lg:mt-14">
            <a href="tel:+639277770744">
              <div className="mb-2 max-w-xl bg-white text-slate-700 text-lg sm:text-xl rounded-full px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +6392 - 7777 - 0744
              </div>
            </a>
            <a href="mailto:juancarlos.deborja@gmail.com">
              <div className="mb-2 max-w-xl bg-white text-slate-700 text-lg sm:text-xl rounded-full px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              juancarlos.deborja@gmail.com
              </div>
            </a>
            <a href="https://koalendar.com/e/meet-with-eejay" target="_blank">
              <div className="mb-2 max-w-xl bg-white text-slate-700 text-lg sm:text-xl rounded-full px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book a meeting
              </div>
            </a>             
            <a href="https://www.linkedin.com/in/eejay-de-borja-80696651/" target="_blank">
              <div className="mb-2 max-w-xl bg-white text-slate-700 text-lg sm:text-xl rounded-full px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mr-2 inline-block" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Linkedin Profile
              </div>
            </a>                            
          </div>
        </Container>
      </div>
    </section>
  )
}
