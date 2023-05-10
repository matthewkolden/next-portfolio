import Image from 'next/image'

export default function IntroHeader() {
  return (
    <header className="px-6" id="about">
      <div className="max-w-4xl mx-auto my-64 flex flex-col-reverse md:flex-row gap-14 font-poppins">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
            <span className="text-lg text-[#776cbd] font-robotomono">
              Hi, my name is
            </span>
            <br />
            Matthew Kolden.
            <br />
            I&apos;m a Software Developer,
          </h1>
          <p className="text-lg mb-6">
            with experience creating MERN stack apps. I&apos;m a graduate of the
            University of Washington Bothell and the General Assembly Software
            Engineering Immersive Bootcamp. I&apos;m eager to apply my skills to
            exciting projects and collaborate with awesome people. Let&apos;s
            connect!
          </p>
          <a
            href="/KoldenMatthew_Resume.pdf"
            download="KoldenMatthew_Resume.pdf"
            className="font-robotomono bg-[#776cbd] hover:bg-[#9289ca] text-white px-6 py-3 text-lg rounded-sm font-semibold"
          >
            Heres my resume
          </a>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:top-1.5 before:block before:absolute before:bg-[#776cbd] relative z-0">
          <Image
            src="/profile.jpg"
            width="600"
            height="600"
            alt="Matt profile"
            className="z-10 relative"
          />
        </span>
      </div>
    </header>
  )
}
