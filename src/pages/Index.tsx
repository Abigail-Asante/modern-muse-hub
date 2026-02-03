import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { NewsSection } from '@/components/home/NewsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <NewsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
