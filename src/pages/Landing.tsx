import Hero from '../components/Hero';
import CommunitySection from '../components/CommunitySection';
import InteractiveFilter from '../components/InteractiveFilter';
import AvailableUnits from '../components/AvailableUnits';
import LeadForm from '../components/LeadForm';
import LeadFormClosing from '../components/LeadFormClosing';
import SustainabilitySection from '../components/SustainabilitySection';
import PropertyFinder from '../components/PropertyFinder';

const Landing = () => {
  return (
    <main>
      <Hero />
      <AvailableUnits />
      <LeadForm />
      <CommunitySection />
      <InteractiveFilter />
      <SustainabilitySection />
      <PropertyFinder />
      <LeadFormClosing />
    </main>
  );
};

export default Landing;
