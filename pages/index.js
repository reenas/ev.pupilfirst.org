import Head from "next/head";

function ApplyToCourse() {
  return (
    <div className="flex">
      <a
        className="block w-full md:w-auto text-center px-10 py-4 bg-gray-900 text-primary-500 border border-primary-500 font-bold rounded shadow-lg hover:shadow-xl hover:bg-primary-500 hover:text-gray-900 transition duration-250 ease-in-out"
        href="https://apply.pupilfirst.org"
      >
        Apply for Fellowship
      </a>
    </div>
  );
}


function HeroCharacter({ caption, imgSrc }) {
  return (
    <div className="flex-shrink-0">
      <img src={imgSrc} alt={caption} className={"bg-contain w-40 lg:w-auto mx-auto"} />
      <p className="text-3xl lg:text-4xl text-black border-black mb-4">
        {caption}
      </p>
    </div>
  )
}

function ImageWithDescription({ name, caption, imgSrc }) {
  return (
    <div>
      <div className="rounded-lg border-4 border-secondary-500 w-5/6 md:w-auto ">
        <img src={imgSrc} alt={caption} className="block object-contain rounded-lg" />
      </div>
      <h4 className={"text-lg text-primary-500 pt-2"}>{name}</h4>
      <p className={"text-white leading-tight pt-1"}>
        {caption}
      </p>
    </div>
  )
}

function StatsWithTitleAndDescription({ title, description }) {
  return (
    <div className="text-center">
      <div className="font-semibold text-2xl">
        {title}
      </div>
      <div className="text-sm">
        {description}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>CoronaSafe Programming Course</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <meta property="og:title" content="CoronaSafe Engineering Fellowship" />
        <meta property="og:description" content="National programme to identify the top 30 indian students in software engineering for an industry-led training to become full-stack developers and volunteer as the national engineering leadership cadre for public service." />
        <meta property="og:image" content="coronasafe-engineering-fellowship.png" />
        <meta property="og:url" content="https://fullstack.pupilfirst.org/" />
        <meta name="twitter:card" content="coronasafe-engineering-fellowship.png" />
        <meta property="og:site_name" content="Coronasafe Engineering Fellowship" />
        <meta name="National programme to identify the top 30 indian students in software engineering for an industry-led training to become full-stack developers and volunteer as the national engineering leadership cadre for public service." />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-11P76BRB6N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-11P76BRB6N');
              `,
          }}
        />
      </Head>
      <main className="bg-gray-900 mx-auto">
        <section className="hero__bg-pattern bg-gray-900 pb-20">
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <img className="block w-36 md:w-44" src="logos/pupilfirst-logo.svg" />
              <img className="hidden w-20 md:w-24" src="logos/aicte-logo.png" />
            </div>
          </header>
          <div className="max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto text-white pt-2 pb-12 px-4 xl:px-0">
            <div className="w-full md:w-8/12">
              <h1 className="hero__title-gradient text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold lg:pt-16">
                  <span className="font-light block">Introduction to </span>
                  <span>Electric Vehicles<span className="text-2xl ml-2">(EV101)</span></span>
                </h1>
              <p className="max-w-2xl text-sm md:text-base lg:text-lg pt-2 lg:pt-4 lg:pr-12">Introduction to Electric Vehicles (EV101) is a national programme to identify the top 100 Indian undergraduate students who are interested to learn and  build a career in Electric Vehicles.</p>
              <div className="inline-block rounded bg-secondary-900 text-secondary-300 py-1 px-3 mt-4 font-medium text-sm ">
                <p>
                  Upto Top 100 students who qualify for the program get a 100% scholarship!
                </p>
              </div>
              <div className="pt-8">
                <a
                  className="inline-block w-full md:w-64 p-3 text-center bg-gradient-to-r from-primary-500 to-secondary-400 text-gray-900 border border-primary-500 font-semibold rounded-md shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 hover:text-primary-500 transition"
                  href="#">Apply Now</a>
              </div>
            </div>
            <div className="hidden md:w-4/12">
              <picture>
                <source srcSet="hero/cef-hero-image.webp" type="image/webp" />
                <source srcSet="hero/cef-hero-image.png" type="image/png" />
                <img src="hero/cef-hero-image.png" alt="CoronaSafe Engineering Fellowship Icon" />
              </picture>
            </div>
          </div>
        </section>
        <section className="mx-4 xl:mx-0 pb-10 md:pb-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden max-w-6xl 2xl:max-w-7xl mx-auto p-4 lg:p-10">
            <div className="flex space-y-4 md:space-y-0 md:space-x-12 flex-col md:flex-row justify-between items-start">
              <div className="md:w-10/12 text-white">
                <h2 className="text-xl md:text-2xl text-tertiary-300">Supported by Micelio, Electric mobility ecosystem leader in India.</h2>
                <p className="mt-2 text-lg">The ikigai of Micelio is to enable an ecosystem that will allow clean mobility start-ups to thrive and deliver practical carbon reduction outcomes in day to day world applications.</p>
                <p className="mt-3">Learn More at: <a className="text-secondary-400 font-semibold" target="_blank" href="https://www.micelio.com">https://www.micelio.com</a>/</p>
              </div>
              <div className="md:w-2/12 flex-shrink-0">
                <p className="text-white font-semibold text-sm">Industry Partner</p>
                <div className="bg-white rounded-md p-2 mt-1">
                  <img className="object-contain" src="logos/micelio-logo.png" alt="Micelio - The network that drives you" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 relative border-t border-gray-700">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 px-4 xl:px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <div className="heading-with-leftborder">
                      <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-snug ml-4 lg:ml-44 pl-4">Everything you<br /> need to know</h2>
                    </div>
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-8 lg:ml-44">
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">What is this program?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">Industry-led introductory course in Electric Vehicles (EV) for undergraduate students pursuing engineering degrees in India.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Why?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">To give undergraduate students an overview of the Electric Vehicle ecosystem to help them decide if they wish to build a career in it.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Who is this for?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">Students who are at least 18 years old and no older than 25 years old pursuing engineering undergraduate degree in India</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">When?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">April 2, 2021 - April 26, 2021</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Effort?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">25 hours of highly enjoyable study & tasks over the course of 3 weeks.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Format?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">Self-paced learning via task around text and video tutorials</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Mentorship?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">AMAs with industry veterans and a dedicated Q&amp;A forum.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Certificate?</h3>
                      <p className="ml-8 pt-1 text-lg text-white">Yes. Upon successful completion of the program, students will  receive a certificate.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Cost</h3>
                      <p className="ml-8 pt-1 text-lg text-white">Free</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="sticky top-0 pt-12">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden shadow-lg">
                      <div className="flex space-x-2 px-6 py-3 border-b border-gray-600">
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      </div>
                      <div className="flex p-4 lg:p-6">
                        <span className="text-primary-500 text-xl">&#10142;</span>
                        <div className="pl-3">
                          <p className="text-white">Are you a student developer who wants to learn advanced, industry-oriented programming skills and join the National Engineering Leadership Cadre for Public Service?</p>
                          <div className="pt-4">
                            <a
                              className="block px-10 py-3 text-center bg-gradient-to-r from-primary-500 to-secondary-400 text-gray-900 border border-primary-500 font-semibold rounded-md shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 hover:text-primary-500 transition"
                              href="#">Apply Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-b border-gray-700 mx-auto relative overflow-hidden shadow-lg">
          <div className=" max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Prepared by <br />Industry Experts</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-xl text-white">
                  <p className="mt-4">The course is hosted online on the Pupilfirst platform and has been jointly authored by Mr. Swapnil Mankame and Dr. Saurabh Markandeya who have deep industry experience in the Electric Vehicles domain.</p>
                </div>
              </div>
              <svg className="absolute right-0 top-1/4 object-center" width="120" height="400" fill="none" viewBox="0 0 120 400">
                <defs>
                  <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-700" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="120" height="400" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
              </svg>
              <div className="max-w-4xl mx-auto relative z-10 pl-4 lg:pl-0">
                <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-12 py-12 lg:pb-20">
                  <ImageWithDescription name="Mr. Swapnil Mankame"
                    caption={<>
                      CEO, Founder at <br />Mankame Automotive</>}
                    imgSrc="people/mekin-maheshwari.jpg"
                  />
                  <ImageWithDescription name="Dr. Saurabh Markandeya"
                    caption={<>
                      Co-CEO at <br/> The SHADO Group &amp;Co-founder at AdarinET</>}
                    imgSrc="people/girish-mathrubootham.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 relative overflow-hidden">
          <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
            <div className="relative h-full max-w-7xl mx-auto">
              <div className="absolute left-0 top-0 h-80 w-80 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 79.6"><path d="M70.2 19.9v59.7H110V39.8H90.1V19.9zm19.9 0H110V0H90.1zM0 19.9v59.7h39.8V39.8H19.9V19.9zm19.9 0h19.9V0H19.9z" fill="#28292d" /></svg>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="max-w-4xl mx-auto text-white pt-10 lg:pt-20">
                <div className="max-w-4xl px-12 py-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden shadow-lg">
                    <h3 className="text-4xl max-w-lg leading-tight">Ask Me Anything (AMA) Session with experts working in the EV Domain</h3>
                    <p className="pt-6">You will hear experiences and stories of  people in the EV industry around their career in the domain, opportunities, skill requirement and how
                      the industry works today. The best things about these AMAs are the free-wheeling question and answer session where you talk with the speakers about the most pressing questions in your mind.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">What are the topics covered in the programme?</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="grid grid-cols-12 gap-6 mt-10">
                  <div className="relative col-span-2 p-4 rounded-lg border border-secondary-400">
                    <p className="flex h-full text-2xl font-bold text-secondary-400 items-center absolute inset-0 transform -rotate-90">EV 101</p>
                  </div>
                  <div className="col-span-10 grid gap-y-8">
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">1</p>
                      <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                        <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">2</p>
                      <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                        <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">3</p>
                      <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                        <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">4</p>
                      <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                        <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Beginner to advanced courses</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl mt-4">
                  <p className="text-white lg:text-lg">This course is designed as a primer course for an intermediate course and advanced course that will pave the pathway a student can take to become a part of the Electric vehicle industry.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary-400 rounded-lg p-5">
                    <p className="text-secondary-400 text-2xl font-bold">EV 101</p>
                    <p className="text-white leading-snug mt-1">Beginner - Introduction to Electric Vehicles</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-primary-400 rounded-lg p-5">
                    <p className="text-primary-400 text-2xl font-bold">EV 201</p>
                    <p className="text-white leading-snug mt-1">Beginner - Introduction to Electric Vehicles</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-tertiary-400 rounded-lg p-5">
                    <p className="text-tertiary-400 text-2xl font-bold">EV 301</p>
                    <p className="text-white leading-snug mt-1">Beginner - Introduction to Electric Vehicles</p>
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <img className="object-cover rounded-md " src="course-path/ev-course-path.png" />
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl mt-4">
                  <p className="text-white lg:text-lg">While the EV 101, the introductory course will serve as the foundation, check the infographic below to understand what skills will be gained in the Intermediate course on Electric Vehicles (EV 201).</p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0 mt-8">
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <div className="flex h-2/5">
                      <div className="relative grid place-items-center p-3 md:px-12 rounded-lg border border-secondary-400">
                        <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-400 items-center absolute inset-0 transform -rotate-90">EV 101</p>
                      </div>
                    </div>
                    <div className="h-10"></div>
                    <div className="flex h-3/5">
                      <div className="relative grid place-items-center p-3 md:px-12 rounded-lg border border-primary-400">
                        <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-primary-400 items-center absolute inset-0 transform -rotate-90">EV 201</p>
                      </div>
                    </div>
                  </div>
                  <div className="block relative w-12 md:w-24 p-4 bg-gray-800 ">
                    <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-400 items-center sticky top-0">
                      <span className="block transform -rotate-90">Skills</span>
                    </p>
                    <div className="flex items-center justify-center absolute inset-0 h-full">
                      <svg className="" width="2" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line className="path" x1="0" y1="0" x2="0" y2="100%" stroke="white"/>
                      </svg>
                    </div>
                    <div className="absolute inset-0">
                      <div className="w-4 h-2/5"></div>
                      <div className="grid grid-cols-6 gap-1 md:gap-2 h-10 w-12 md:w-24 md:h-10 -mt-4">
                        <div className="bg-gray-300"></div>
                        <div className="bg-gray-300"></div>
                        <div className="bg-gray-300"></div>
                        <div className="bg-gray-300"></div>
                        <div className="bg-gray-300"></div>
                        <div className="bg-gray-300"></div>
                      </div>
                      <div className="w-4 h-3/5"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col h-2/5 space-y-4 pb-5">
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">1</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                          <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">2</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                          <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">3</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                          <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">4</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-secondary-900 border border-secondary-400">
                          <p className="text-sm md:text-lg font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col h-3/5 space-y-4 pt-5">
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">1</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-primary-900 border border-primary-400">
                          <p className="text-sm md:text-lg font-semibold text-primary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">2</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-primary-900 border border-primary-400">
                          <p className="text-sm md:text-lg font-semibold text-primary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">3</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-primary-900 border border-primary-400">
                          <p className="text-sm md:text-lg font-semibold text-primary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">4</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-primary-900 border border-primary-400">
                          <p className="text-sm md:text-lg font-semibold text-primary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">5</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-primary-900 border border-primary-400">
                          <p className="text-sm md:text-lg font-semibold text-primary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">6</p>
                        <div className="flex-1 px-4 md:px-8 py-4 md:py-6 rounded-lg bg-primary-900 border border-primary-400">
                          <p className="text-sm md:text-lg font-semibold text-primary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Free</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">This program is created by a team of over a dozen people from across multiple companies, with support and funding from Micelio Mobility.</p>
                  <p>This enables us to offer full scholarships for up to  top 100 selected students who qualify for the programme.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Join a Community with a small group of students from across the country</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">Students in the programme  will have access to a Community on the Pupilfirst platform for discussions with the industry experts and with other students. Through these rich community interactions, you’ll also get to build relationships early on with a peer group who’ll go on to become industry leaders in the future.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Qualify as a Teaching Assistant.</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">If you are among the top performers in this course, you’ll stand a chance to engage future batches as a Teaching Assistant (TA). As a TA, you’ll be working closely with the industry experts and the Pupilfirst to meaningfully deliver learning for students in future batches.</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Schedule</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden divide-y divide-gray-700 mt-4">
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-400 lg:text-right">March 10, 2020</p>
                    <p className="col-span-9 ml-8 text-gray-200">- Application Opens</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-400 lg:text-right">March 21, 2021</p>
                    <p className="col-span-9 ml-8 text-gray-200">- Applications window ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-400 lg:text-right">March 26, 2021</p>
                    <p className="col-span-9 ml-8 text-gray-200">- Announcement of selected students </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-400 lg:text-right">April 02, 2021</p>
                    <p className="col-span-9 ml-8 text-white">- Program Begins</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-400 lg:text-right">April 23, 2021</p>
                    <p className="col-span-9 ml-8 text-white">- Program Ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-400 lg:text-right">April 26, 2021</p>
                    <p className="col-span-9 ml-8 text-white">- Course Conclusion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Qualify as a Teaching Assistant.</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">If you are among the top performers in this course, you’ll stand a chance to engage future batches as a Teaching Assistant (TA). As a TA, you’ll be working closely with the industry experts and the Pupilfirst to meaningfully deliver learning for students in future batches.</p>
                </div>
                <div className="pt-10 lg:pt-16">
                  <h4 className="text-primary-500 text-xl lg:text-3xl font-bold">Questions?</h4>
                  <p className="text-white pt-2">Email us at
                    <a href="mailto:ev@pupilfirst.org" className={"text-primary-400 underline pl-2 tracking-wide font-medium"}>ev@pupilfirst.org</a>
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                <div className="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-400 border border-primary-400 p-6 lg:p-12">
                  <h4 className="text-xl lg:text-5xl font-extrabold text-center">Apply now for <br />EV Open Program</h4>
                  <div className="mt-4 flex justify-center">
                    <a className="block text-center px-10 font-semibold py-3 bg-gray-900 text-primary-400 border border-primary-400 rounded-lg shadow-md hover:shadow-xl hover:bg-primary-300 hover:text-gray-900 transition"
                      href="#">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </div >
  );
}
