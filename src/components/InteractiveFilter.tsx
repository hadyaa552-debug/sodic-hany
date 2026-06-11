import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useMemo, useState } from 'react';

type Region = 'North Coast' | 'East Cairo' | 'West Cairo';

interface Project {
  name: string;
  description: string;
}

const REGION_BG: Record<Region, string> = {
  'North Coast': './sections/regions/north-coast.webp',
  'East Cairo': './sections/regions/east-cairo.webp',
  'West Cairo': './sections/regions/west-cairo.webp',
};

const PROJECTS: Record<Region, Project[]> = {
  'North Coast': [
    {
      name: 'Caesar',
      description:
        "Caesar is home to one of Egypt's most stunning bays with over 1.2 km of pristine beachfront. Built on terraced levels for uninterrupted views of the Mediterranean and designed with simplicity at its heart.",
    },
    { name: 'June', description: 'June offers elevated seaside living with contemporary coastal architecture and curated leisure experiences.' },
    { name: 'Ogami', description: 'Ogami blends minimal luxury with exceptional sea views and private resort-inspired residences.' },
  ],
  'East Cairo': [
    { name: 'Eastvale', description: 'Eastvale redefines connected urban living through green open spaces and contemporary architecture.' },
    { name: 'East', description: 'East delivers a balanced lifestyle with integrated amenities, smart planning, and premium residences.' },
    { name: 'V Residence', description: 'V Residence is crafted for refined modern living in one of East Cairo’s most connected communities.' },
  ],
  'West Cairo': [
    { name: 'Estate', description: 'Estate presents a premium address with sweeping landscapes and a tailored family-centric master plan.' },
    { name: 'Estate Residence', description: 'Estate Residence combines timeless architecture with upscale finishes and tranquil surroundings.' },
    { name: 'New Zayed', description: 'New Zayed introduces future-ready neighborhoods with strategic location and enduring investment value.' },
  ],
};

const InteractiveFilter = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('North Coast');
  const [activeProject, setActiveProject] = useState<string>(PROJECTS['North Coast'][0].name);

  const projects = useMemo(() => PROJECTS[activeRegion], [activeRegion]);
  const currentProject = projects.find((project) => project.name === activeProject) ?? projects[0];

  const selectRegion = (region: Region) => {
    setActiveRegion(region);
    setActiveProject(PROJECTS[region][0].name);
  };

  return (
    <section id="interactive-filter" className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeRegion}
          src={REGION_BG[activeRegion]}
          alt={activeRegion}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0.25, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-8 pt-24 md:px-8">
        <div className="flex flex-col gap-2">
          {(['North Coast', 'East Cairo', 'West Cairo'] as Region[]).map((region) => {
            const isActive = region === activeRegion;
            return (
              <button
                key={region}
                type="button"
                onClick={() => selectRegion(region)}
                className={`w-fit rounded-sm px-5 py-1.5 text-xs font-semibold shadow-sm transition-colors ${
                  isActive
                    ? 'bg-white text-black'
                    : 'border border-white/50 bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 md:items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeRegion}-${currentProject.name}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="max-w-md"
            >
              <h3 className="font-heading text-5xl font-light text-white md:text-6xl">{currentProject.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{currentProject.description}</p>
              <a
                href="#available-units"
                className="mt-6 inline-flex items-center gap-2 border border-white/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
              >
                <Plus size={14} />
                Discover
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="justify-self-start md:justify-self-end">
            <div className="flex flex-col items-start gap-3 rounded-sm border border-white/20 bg-black/50 p-5 backdrop-blur-md md:items-end">
              {projects.map((project) => {
                const isActive = project.name === currentProject.name;
                return (
                  <button
                    key={project.name}
                    type="button"
                    onClick={() => setActiveProject(project.name)}
                    className={`relative w-full text-left text-base transition-colors md:text-right ${
                      isActive
                        ? 'pl-3 font-bold text-white before:absolute before:left-0 before:top-1/2 before:h-6 before:w-0.5 before:-translate-y-1/2 before:bg-white md:pl-0 md:pr-3 md:before:left-auto md:before:right-0'
                        : 'font-medium text-white/80 hover:text-white'
                    }`}
                  >
                    {project.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFilter;
