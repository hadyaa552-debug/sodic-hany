import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Green Spaces',
    description: 'Designing walkable neighborhoods that prioritize greenery, wellbeing, and cleaner air.',
    image: './sections/sustainability/community.webp',
  },
  {
    title: 'Water Conservation',
    description: 'Implementing efficient irrigation and water-conscious systems to preserve resources.',
    image: './sections/sustainability/caesar.webp',
  },
  {
    title: 'Energy Efficiency',
    description: 'Building smarter communities with sustainable infrastructure and reduced energy demand.',
    image: './sections/sustainability/ednc.webp',
  },
];

const SustainabilitySection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-12 md:px-16 md:py-16">
      <img
        src="./sections/sustainability/asset.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/85">Sustainability</p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            Shaping Resilient Communities for a Greener Tomorrow
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/85 md:text-base">
            At SODIC, sustainability is central to every development. We shape communities that are inclusive,
            future-ready, and designed to elevate quality of life for generations.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
            Through responsible design, efficient resource planning, and long-term stewardship, we create places that
            balance progress with lasting environmental and social impact.
          </p>
        </motion.div>

        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {cards.map((card) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="min-w-[78%] snap-start sm:min-w-[420px]"
            >
              <div className="relative h-[460px] overflow-hidden">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="card-glass p-4">
                    <h3 className="font-heading text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{card.description}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
