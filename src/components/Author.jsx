
import Image from 'next/image';
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author.png'

function TwitterIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="outside-work"
      aria-labelledby="outside-work-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="outside-work-title">
              Outside work
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">JC de Borja –</span> Hey
              there, I hope you enjoyed reading through my resume.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            Hey!
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            You&lsquo;re probably still reading through this message because you&lsquo;re curious 
            about who I am. Well... here are more things about me, but I need to 
            cut this short. Because... you know... marketing... I need to get in a call 
            with you, so you can ask me all those questions in person! 
            So let&lsquo;s start! I&lsquo;m a person who is very passionate about the things I do in 
            life.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            I am a project manager right now because I love leading people to their 
            success. I&lsquo;m also currently an International Student, taking IT Security and Infrastructure here in Canada.
            Outside of the career world, I do a lot of stuff; I travel, play musical 
            instruments, sing, draw, program custom apps, I&lsquo;m a race car driver, handyman, photographer (You should check my instagram for cool pics!) and much more. 
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            I believe that there is so much to live that you should turn every day into an adventure. 
            Do you wanna to be a part of my adventure? What are you waiting for? If you call now you&lsquo;ll get a chance to hear more cool stuff! But wait! There&lsquo;s more!
            If you hire me, you won&lsquo;t just get my positive vibe and energy(well, not like this in person, this is too much), you&lsquo;ll also hire someone who&lsquo;s smart,
            strategic, resourceful, and proactive!
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            So what are you waiting for? Click on the &ldquo;Get Connected&rdquo; tab now!
            </p>
            <p className="mt-8">
              <Link
                href="https://www.instagram.com/kai._.0008/" target="_blank" rel="noreferrer"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span className="ml-4">Do you like cool photos? Check out my Instagram!</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
