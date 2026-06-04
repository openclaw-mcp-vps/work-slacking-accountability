export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Anonymous &amp; Honest
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop pretending you&apos;re productive.<br />
          <span className="text-[#58a6ff]">Actually become it.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          WorkSlack is the anonymous peer accountability platform for remote workers. Set real goals, share progress with strangers who get it, and finally stop slacking.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Accountability — $15/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No name required. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">100%</div>
            <div className="text-xs text-[#8b949e] mt-1">Anonymous by default</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-xs text-[#8b949e] mt-1">Peer goal sync</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">3x</div>
            <div className="text-xs text-[#8b949e] mt-1">More goals completed</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Anonymous session — no email needed</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Unlimited daily goals &amp; check-ins</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Real-time peer accountability feed</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Weekly productivity streak reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Cancel anytime, no questions asked</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is this actually anonymous?</h3>
            <p className="text-sm text-[#8b949e]">We use anonymous session tokens — no email, no name, no social login. Your identity is never stored or linked to your activity.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who will see my goals?</h3>
            <p className="text-sm text-[#8b949e]">Other anonymous members in your accountability group. No one knows who you are — just that you committed to a goal and whether you hit it.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no fees or penalties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} WorkSlack. Built for remote workers who keep it real.
      </footer>
    </main>
  );
}
