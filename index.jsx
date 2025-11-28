import React from "react";

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to Trae handler / form backend / email service
    console.log("Form submitted");
  };
  const updatedAt = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/cindy creel headshot.jpg"
              alt="Cindy Creel headshot"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide uppercase text-slate-800">
                Cindy Creel, REALTOR®
              </p>
              <p className="text-xs text-slate-600">
                Licensed in Mississippi · Residential &amp; Coastal Properties
              </p>
            </div>
          </div>
          {/* Brokerage (equal prominence) */}
          <div className="text-right leading-tight">
            <img
              src="/c21 header.png"
              alt="CENTURY 21 logo"
              className="h-8 ml-auto"
            />
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-800">
              J. Carter &amp; Co. | Century 21
            </p>
            <p className="text-[11px] text-slate-600">
              Office: (228) 731-3881 · Each office independently owned and operated.
            </p>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/gulfcoast sunrise.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Hero Text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-300 mb-3">
              Mississippi Gulf Coast Real Estate
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Live the Gulf Coast Lifestyle
              <br />
              <span className="text-amber-300">with a Local Expert by Your Side.</span>
            </h1>
            <p className="text-sm md:text-base text-slate-100/90 mb-6 max-w-xl">
              Whether you&apos;re buying, selling, or just exploring your options, Cindy helps you
              understand the market, the neighborhoods, and your next best move on the Mississippi Gulf Coast.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-4 py-2 md:px-5 md:py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:bg-amber-200 transition"
              >
                Get Your Free Home Report
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-4 py-2 md:px-5 md:py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Learn About the Coast
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/gulfcoast susnset.jpg"
                alt="Mississippi Gulf Coast sunset"
                className="h-12 w-16 md:w-20 rounded-lg object-cover border border-white/20"
              />
              <img
                src="/gulfcoast sunrise.jpg"
                alt="Mississippi Gulf Coast sunrise"
                className="h-12 w-16 md:w-20 rounded-lg object-cover border border-white/20"
              />
              <img
                src="/os bridge smooth water.png"
                alt="Ocean Springs bridge over smooth water"
                className="h-12 w-16 md:w-20 rounded-lg object-cover border border-white/20"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-100/80">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-amber-300/20 border border-amber-300/70 flex items-center justify-center text-[10px]">
                  MS
                </span>
                <span>Serving Biloxi · Gulfport · Ocean Springs · Long Beach · Gautier · Pass Christian · Vancleave · Orange Grove</span>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="bg-white/95 text-slate-900 rounded-2xl shadow-xl p-6 md:p-7 border border-slate-100">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-2">
              Work with Cindy
            </p>
            <h2 className="text-lg font-semibold mb-3">A Clear Plan for Your Next Move</h2>
            <ul className="space-y-2 text-sm text-slate-700 mb-4">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>One-on-one guidance from first search to closing.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Local insight into schools, commutes, and coastal lifestyle.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>No-pressure consultation to talk about your goals.</span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 mb-2">
              Disclaimer: Information provided is for educational purposes only and is not a guarantee of outcomes.
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition"
            >
              Start with a Free Home Report
            </a>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="flex-1">
        {/* ABOUT CINDY */}
        <section id="about" className="py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Meet Cindy Creel</h2>
              <p className="text-sm font-medium text-amber-600 mb-4">
                REALTOR® · J. Carter &amp; Co. | Century 21 · Licensed in Mississippi
              </p>
              <p className="text-sm md:text-base text-slate-700 mb-4">
                As a dedicated Mississippi Gulf Coast REALTOR®, Cindy combines local market knowledge,
                clear communication, and a calm, organized approach so you always know what&apos;s next.
                Her goal is to keep the process as smooth and stress-free as possible while helping you
                make confident decisions.
              </p>
              <p className="text-sm md:text-base text-slate-700 mb-4">
                From Biloxi and Gulfport to Ocean Springs and beyond, Cindy understands how lifestyle,
                commute, schools, and long-term plans all come together when choosing the right home.
                Whether you&apos;re upsizing, downsizing, relocating, or investing, she takes the time
                to understand what matters most to you.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                If you&apos;re just getting started, that&apos;s okay. You don&apos;t have to have it all
                figured out yet. Cindy can help you understand today&apos;s market, explore your options,
                and outline a step-by-step plan tailored to your timeline.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">Awards</p>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li>2022 · Masters Ruby</li>
                    <li>2021 · CENTURION®</li>
                    <li>2020 · Quality Service Producer</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">Designations</p>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li>Accredited Buyer Representative (ABR)</li>
                    <li>Seller Representative Specialist (SRS)</li>
                    <li>Real Estate Negotiation Expert (RENE)</li>
                    <li>Short Sale &amp; Foreclosure Resource (SFR)</li>
                    <li>Fine Homes &amp; Estates Specialist</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mt-4">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">Personal Profile</p>
                <p className="text-xs text-slate-700">
                  Cindy has lived on the Mississippi Gulf Coast most of her life. She enjoys tennis and boating, and her team is the New Orleans Saints.
                  Before real estate, she worked in boutiques as a buyer, salesperson, and personal wardrobe consultant, and actively served on nonprofit boards focused on
                  enriching the lives of children on the Coast. Since starting her real estate career in 2005, she has remained involved with local and state associations,
                  volunteering on committees and prioritizing continuing education.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mt-4">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">Locations Served</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Biloxi</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Gautier</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Gulfport</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Long Beach</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Orange Grove</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Ocean Springs</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Pass Christian</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Vancleave</span>
                </div>
              </div>
            </div>

            {/* Cindy Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 md:p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/cindy creel headshot.jpg"
                  alt="Cindy Creel headshot"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Cindy Creel, REALTOR®
                  </p>
                  <p className="text-xs text-slate-600">
                    J. Carter &amp; Co. | Century 21
                  </p>
                  <p className="text-xs text-slate-600">Mobile: (228) 209-1655</p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <a href="tel:+12282091655" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition">
                  Call or Text Cindy
                </a>
                <a href="tel:+12287313881" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50 transition">
                  Call Office
                </a>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                &ldquo;I love helping people see what&apos;s possible on the Coast — the homes, the lifestyle,
                and the community. You don&apos;t just need a house; you need the right fit for your life.&rdquo;
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                  <p className="font-semibold text-slate-800 mb-1">Buyers</p>
                  <p className="text-[11px] text-slate-600">
                    Learn the steps, timelines, and costs before you start touring homes.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                  <p className="font-semibold text-slate-800 mb-1">Sellers</p>
                  <p className="text-[11px] text-slate-600">
                    Understand local pricing, prep tips, and what to expect when listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GULF COAST INFO */}
        <section id="coast" className="py-14 md:py-16 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Why the Mississippi Gulf Coast?
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                More than a vacation spot — the Coast offers year-round living, diverse communities,
                and a lifestyle that balances work, family, and time on the water.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-100 mb-8">
              <img
                src="/os bridge smooth water.png"
                alt="Ocean Springs bridge over smooth water"
                className="w-full h-40 md:h-52 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-7">
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">
                  Coastal Lifestyle
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Beaches, Dining &amp; Entertainment
                </h3>
                <p className="text-xs text-slate-600">
                  Enjoy easy access to beaches, local restaurants, festivals, and entertainment options
                  from Biloxi to Bay St. Louis — all within a short drive.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">
                  Everyday Life
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Schools, Commutes &amp; Community
                </h3>
                <p className="text-xs text-slate-600">
                  A mix of established neighborhoods, new developments, and small-town feel with access
                  to schools, healthcare, and major roadways.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">
                  Value &amp; Opportunity
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Affordability &amp; Long-Term Potential
                </h3>
                <p className="text-xs text-slate-600">
                  Compared to many coastal markets, the Mississippi Gulf Coast can offer attractive
                  price points, making it appealing for primary homes and investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="listings" className="py-14 md:py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Search Mississippi Gulf Coast Listings</h2>
              <p className="text-sm md:text-base text-slate-600">Explore active MLS listings across Biloxi, Gulfport, Ocean Springs and nearby communities.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 mb-7">
              <div id="idx-search" className="w-full">
                <iframe
                  src="//link.flexmls.com/1tt8q4qvg641,6"
                  frameBorder="0"
                  width="100%"
                  height="850"
                />
              </div>
            </div>

            

            <div className="mt-6 text-[10px] text-slate-600">
              <p>
                Information is provided exclusively for consumers’ personal, non‑commercial use; it may not be used for any
                purpose other than to identify prospective properties consumers may be interested in purchasing; data is
                deemed reliable but not guaranteed; listings courtesy of their respective listing brokers. Data last updated: {updatedAt}. Source: MLS United.
              </p>
            </div>
          </div>
        </section>

        {/* LEAD FORM / OFFER */}
        <section id="lead-form" className="py-16 md:py-18 bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            {/* Offer Explanation */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
                Free Custom Gulf Coast Home Report
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Get a Personalized Snapshot of Your Next Move.
              </h2>
              <p className="text-sm md:text-base text-slate-100/90 mb-4">
                Share a few details about what you&apos;re hoping to do — buy, sell, or both — and Cindy
                will send you a personalized overview of what to expect in today&apos;s Mississippi Gulf
                Coast market.
              </p>
              <ul className="space-y-2 text-sm text-slate-100/90 mb-5">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span>Recent local activity and pricing trends in your area of interest.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span>Estimated timelines and what to expect in the current market.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span>No obligation — just information to help you plan your next step.</span>
                </li>
              </ul>
              <p className="text-[11px] text-slate-200/80 mb-2">
                By submitting this form, you agree to be contacted by phone, text, or email for the
                purpose of providing your requested information. You may opt out at any time.
              </p>
              <p className="text-[11px] text-slate-300">
                This is not a guarantee of results. Market conditions can change and all information is
                based on available data at the time of preparation.
              </p>
            </div>

            {/* FORM CARD */}
            <div className="bg-white text-slate-900 rounded-2xl shadow-xl p-6 md:p-7 border border-slate-100">
              <h3 className="text-lg font-semibold mb-1">
                Request Your Free Home Report
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Complete the form below and Cindy will follow up with next steps and your custom snapshot.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="website" className="hidden" />
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-1 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    What are you interested in? <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="interest"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying on the Gulf Coast</option>
                    <option value="selling">Selling a property</option>
                    <option value="both">Buying &amp; Selling</option>
                    <option value="curious">Just curious / planning ahead</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Where are you looking / What area is your home in?
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, neighborhood, or ZIP"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Anything you&apos;d like Cindy to know?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-1 focus:ring-amber-400"
                    placeholder="Timeline, budget, must-haves, questions, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition shadow-sm"
                >
                  Request My Home Report
                </button>

                <div className="mt-2 flex items-center justify-center gap-4 text-[10px] text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Secure &amp; Private
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> No Spam
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Cancel Anytime
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 mt-2">
                  Your information will not be sold. It is used solely so that Cindy can respond to your request.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <section id="privacy" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-[11px] text-slate-600 space-y-2">
          <h3 className="text-xs font-semibold text-slate-800">Privacy Policy</h3>
          <p>
            Your information is used to respond to your request and provide real estate services. It is not sold to third parties.
            You may request deletion of your data at any time by contacting the office.
          </p>
        </div>
      </section>

      <section id="terms" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-[11px] text-slate-600 space-y-2">
          <h3 className="text-xs font-semibold text-slate-800">Terms of Use</h3>
          <p>
            Website content is provided for informational purposes. IDX data may be used for personal, non‑commercial purposes only.
            By using this site, you agree not to reproduce listing data and to verify any information independently.
          </p>
        </div>
      </section>

      <section id="accessibility" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-[11px] text-slate-600 space-y-2">
          <h3 className="text-xs font-semibold text-slate-800">Accessibility Statement</h3>
          <p>
            We strive to make the website accessible for all users. If you encounter an accessibility barrier, please contact the office
            so we can assist and improve.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-6 text-[11px] text-slate-600 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-semibold text-slate-800 text-xs">
                    J. Carter &amp; Co. | Century 21
                  </p>
                  <p>
                    2137 East Pass Road · Suite A · Gulfport, MS 39507 · Office: (228) 731-3881
                  </p>
                  <p>
                    Each office independently owned and operated.
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800 text-xs">
                    Cindy Creel, REALTOR®
                  </p>
                  <p>Licensed in Mississippi</p>
                  <div className="inline-flex items-center justify-end gap-2">
                    <p>Equal Housing Opportunity.</p>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-slate-500">
                All information deemed reliable but not guaranteed. This website is for informational purposes only and is
                not intended as legal, financial, or tax advice.
              </p>
              <p className="text-[10px] text-slate-500">
                Information is provided exclusively for consumers’ personal, non‑commercial use; it may not be used for any purpose other than to
                identify prospective properties consumers may be interested in purchasing; data is deemed reliable but not guaranteed; listings courtesy of
                their respective listing brokers. Data last updated: {updatedAt}. Source: MLS United.
              </p>
              <div className="text-[10px] text-slate-500">
                <a href="#privacy" className="underline">Privacy Policy</a> · <a href="#terms" className="underline">Terms of Use</a> · <a href="#accessibility" className="underline">Accessibility</a>
              </div>
            </div>
          </footer>
    </div>
  );
};

export default Index;
