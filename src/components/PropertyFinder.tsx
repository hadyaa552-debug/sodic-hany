import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const PropertyFinder = () => {
  const [region, setRegion] = useState('North Coast');
  const [category, setCategory] = useState('Residential');
  const [finish, setFinish] = useState('Finished');
  const [budget, setBudget] = useState('22M - 30M EGP');

  const onExplore = () => {
    const params = new URLSearchParams({
      region,
      category,
      finish,
      budget,
    });
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="property-finder" className="relative overflow-hidden px-6 py-12 md:px-16 md:py-16">
      <img src="./images/listings/listing-1.webp" alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
      <div className="absolute inset-0 bg-black/70" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Tell us what you're looking for!</p>
        <h2 className="mt-3 font-heading text-4xl font-bold text-white md:text-5xl">Find Your Perfect Property</h2>

        <div className="mt-8 max-w-5xl text-2xl leading-relaxed text-white md:text-[38px]">
          <span>I'm looking for a property in </span>
          <span className="relative inline-flex items-center border-b border-white pb-0.5">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-white outline-none"
            >
              <option className="text-black">North Coast</option>
              <option className="text-black">East Cairo</option>
              <option className="text-black">West Cairo</option>
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-white" />
          </span>
          <span> and interested in a </span>
          <span className="relative inline-flex items-center border-b border-white pb-0.5">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-white outline-none"
            >
              <option className="text-black">Residential</option>
              <option className="text-black">Commercial</option>
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-white" />
          </span>
          <span> I'm planning to buy a </span>
          <span className="relative inline-flex items-center border-b border-white pb-0.5">
            <select
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-white outline-none"
            >
              <option className="text-black">Finished</option>
              <option className="text-black">Semi-Finished</option>
              <option className="text-black">Core &amp; Shell</option>
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-white" />
          </span>
          <span> unit with a budget of </span>
          <span className="relative inline-flex items-center border-b border-white pb-0.5">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-white outline-none"
            >
              <option className="text-black">22M - 30M EGP</option>
              <option className="text-black">30M - 50M EGP</option>
              <option className="text-black">50M+ EGP</option>
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-white" />
          </span>
        </div>

        <button
          type="button"
          onClick={onExplore}
          className="mt-8 inline-flex items-center border border-white/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black"
        >
          Explore Properties
        </button>
      </div>
    </section>
  );
};

export default PropertyFinder;
