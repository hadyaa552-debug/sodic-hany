import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section id="community-section" className="bg-white px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-heading text-4xl font-bold leading-tight text-black md:text-5xl"
          >
            Developing Diverse, Sustainable,
            <br />
            Future-Ready Communities
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-5 text-sm leading-relaxed text-gray-700 md:text-base"
          >
            <p>
              SODIC is a leading real estate developer in Egypt with over three decades of proven success in real
              estate development across West Cairo, East Cairo, and the North Coast.
            </p>
            <p>
              Guided by a customer-first approach, we create sustainable, mixed-use communities that set new
              benchmarks of quality. Today, these communities are home to over 30,000 residents.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white"
            >
              <Plus size={14} />
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-14"
      >
        <img
          src="./sections/community/sodic-west.webp"
          alt="SODIC community aerial view"
          className="h-auto w-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default CommunitySection;
