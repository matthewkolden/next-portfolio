import Image from 'next/image'

export default function IntroHeader() {
  return (
    <header className="px-6" id="about">
      <div className="max-w-4xl mx-auto my-64 flex flex-col-reverse md:flex-row gap-14 font-poppins">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            <span className="text-lg text-red-400 font-robotomono">Hi, my name is</span><br />
            Matthew Kolden.
            <br />
            I'm a Software Developer.
          </h1>
          <p className="text-lg mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <a href="#" className="font-robotomono bg-red-400 text-white px-6 py-3 text-lg rounded-sm font-semibold">Here's my resume</a>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:top-1.5 before:block before:absolute before:bg-red-400 relative z-0">
          <Image src="/profile.jpg"
                 width="600"
                 height="600"
                 alt="Matt profile"
                 className="z-10 relative" />
        </span>
      </div>
    </header>
  );
}