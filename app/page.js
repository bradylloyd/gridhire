export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-600 rounded-md"></div>
            <span className="text-lg font-bold text-gray-900">GridHire</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Browse Jobs</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">For Employers</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Sign In</a>
            <a href="#" className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Post a Job</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            500,000 trades jobs unfilled in 2026
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
            The job board built<br />for the trades.
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-xl">
            HVAC, Electrical, and Plumbing professionals find their next role here. Verified credentials. Zero noise.
          </p>
          <div className="flex items-center gap-3 max-w-xl">
            <div className="flex-1 flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-green-500 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input
                type="text"
                placeholder="Job title, trade, or keyword..."
                className="flex-1 text-sm text-gray-800 outline-none placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-green-500 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <input
                type="text"
                placeholder="City or state..."
                className="text-sm text-gray-800 outline-none placeholder-gray-400 w-32"
              />
            </div>
            <button className="bg-green-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex items-center gap-12">
          {[
            { num: "1,200+", label: "Active listings" },
            { num: "8,400+", label: "Verified tradespeople" },
            { num: "340+", label: "Employers hiring" },
            { num: "3", label: "Trades covered" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-gray-900">{s.num}</div>
              <div className="text-sm text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters + Jobs */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Latest openings</h2>
            <div className="flex items-center gap-2">
              {["All", "HVAC", "Electrical", "Plumbing"].map((tag) => (
                <button key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {[
              { title: "HVAC Service Technician", company: "AirPro Services", location: "Nashville, TN", type: "Full-time", salary: "$28–$38/hr", trade: "HVAC", urgent: true, verified: true },
              { title: "Journeyman Electrician", company: "Volt Electric Co.", location: "Austin, TX", type: "Full-time", salary: "$35–$48/hr", trade: "Electrical", urgent: false, verified: true },
              { title: "Plumbing Foreman", company: "PipeLine Pro", location: "Charlotte, NC", type: "Full-time", salary: "$42–$55/hr", trade: "Plumbing", urgent: false, verified: true },
              { title: "HVAC Install Lead", company: "CoolAir Systems", location: "Phoenix, AZ", type: "Contract", salary: "$32–$44/hr", trade: "HVAC", urgent: true, verified: false },
              { title: "Apprentice Electrician", company: "Spark Solutions", location: "Denver, CO", type: "Full-time", salary: "$18–$24/hr", trade: "Electrical", urgent: false, verified: true },
              { title: "Commercial Plumber", company: "FlowRight Inc.", location: "Atlanta, GA", type: "Full-time", salary: "$38–$50/hr", trade: "Plumbing", urgent: false, verified: true },
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between py-5 hover:bg-gray-50 px-3 -mx-3 rounded-lg cursor-pointer transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-xs group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
                    {job.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{job.title}</span>
                      {job.urgent && (
                        <span className="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded-md font-medium">Urgent</span>
                      )}
                      {job.verified && (
                        <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-md font-medium">Verified</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{job.company} · {job.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-gray-400">{job.type}</span>
                  <span className="font-semibold text-gray-900">{job.salary}</span>
                  <span className="bg-gray-100 text-gray-500 px-2.5 py-1 rounded-md">{job.trade}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="text-sm text-green-600 font-medium border border-green-200 px-6 py-2.5 rounded-lg hover:bg-green-50 transition-colors">
              View all listings →
            </button>
          </div>
        </div>
      </section>

      {/* Why GridHire */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-10">Why employers choose GridHire</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Verified credentials", body: "Every candidate's licenses and certifications are displayed upfront. No more chasing paperwork." },
              { title: "Trade-specific only", body: "No office jobs, no noise. Every applicant on GridHire is looking for trades work." },
              { title: "Built for small shops", body: "Straightforward pricing designed for contractors and small businesses — not enterprise budgets." },
            ].map((f, i) => (
              <div key={i}>
                <div className="w-8 h-8 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-2">{f.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to hire?</h2>
            <p className="text-gray-500 text-sm">Post your first job free. Reach verified tradespeople today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-600 border border-gray-200 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              Learn more
            </button>
            <button className="text-sm bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Post a job — free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-600 rounded-md"></div>
            <span className="text-sm font-bold text-gray-900">GridHire</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">Browse Jobs</a>
            <a href="#" className="hover:text-gray-600">Post a Job</a>
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
          <span className="text-xs text-gray-400">© 2026 GridHire</span>
        </div>
      </footer>

    </div>
  );
}