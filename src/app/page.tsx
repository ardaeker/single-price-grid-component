import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#E6EFF5] p-8">
      <section className="grid w-full overflow-hidden rounded-[.3125rem] shadow-[0px_15px_30px_0px_rgba(0,81,171,0.15)] md:max-w-[39.6875rem] md:grid-cols-2 md:rounded-lg">
        <div className="bg-white px-6 pb-8 pt-7 md:col-span-2 md:p-10">
          <h1 className="text-xl font-bold leading-[1.4375rem] -tracking-[0.25px] text-[#2AB3B1] md:text-2xl md:leading-7 md:-tracking-[0.3px]">
            Join our community
          </h1>
          <p className="mt-6 text-[.9375rem] font-bold leading-5 -tracking-[0.187px] text-[#C0DF33] md:text-lg md:leading-[1.3125rem] md:-tracking-[0.225px]">
            30-day, hassle-free money back guarantee
          </p>
          <p className="mt-4 text-sm leading-[1.625rem] -tracking-[0.175px] md:mt-[.6875rem] md:text-base md:leading-[1.625rem] md:-tracking-[0.2px]">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="bg-[#2AB3B1] p-6 sm:p-10 sm:pb-[2.4375rem]">
          <h2 className="text-lg font-bold leading-[1.3125rem] -tracking-[0.225px] text-white">
            Monthly Subscription
          </h2>

          <div className="mt-[1.125rem]">
            <span className="sr-only">$29 per month</span>
            <div className="flex items-center gap-x-[.6875rem]" aria-hidden>
              <span className="text-[2rem] font-bold leading-[2.3125rem] -tracking-[0.4px] text-white">
                $29
              </span>
              <span className="text-base leading-[1.625rem] -tracking-[0.2px] text-white/50">
                per month
              </span>
            </div>
          </div>

          <p className="mt-1 text-base leading-[1.625rem] -tracking-[0.2px] text-white">
            Full access for less than $1 a day
          </p>

          <Link
            href="#"
            className="mt-[1.625rem] flex items-center justify-center rounded-[.3125rem] bg-[#C0DF33] p-[.875rem] pt-[.9375rem] text-base font-bold leading-[1.1875rem] -tracking-[0.2px] text-white shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#C0DF33]/80"
          >
            Sign Up
          </Link>
        </div>
        <div className="bg-[#4ABFBD] p-6 sm:p-10">
          <h2 className="text-lg font-bold leading-[1.3125rem] -tracking-[0.225px] text-white">
            Why Us
          </h2>
          <ul className="mt-[1.125rem] text-sm -tracking-[0.175px] text-white/75">
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
