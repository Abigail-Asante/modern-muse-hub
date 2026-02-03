import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Wheat, Building2, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import agricultureImg from '@/assets/agriculture-project.jpg';
import powerImg from '@/assets/power-project.jpg';
import digitalHubImg from '@/assets/digital-hub.jpg';
import infrastructureImg from '@/assets/infrastructure-project.jpg';

const projects = [
  {
    id: 1,
    title: 'Ghana Power Compact',
    description: 'Increasing access to reliable electricity to support economic growth and improve quality of life for millions.',
    image: powerImg,
    icon: Zap,
    category: 'Energy',
    link: '/what-we-do/power-compact',
  },
  {
    id: 2,
    title: 'Agricultural Productivity',
    description: 'Supporting farmers with modern technologies, irrigation systems, and access to markets.',
    image: agricultureImg,
    icon: Wheat,
    category: 'Agriculture',
    link: '/what-we-do/agriculture',
  },
  {
    id: 3,
    title: 'Economic Enclaves',
    description: 'Developing 110,000 acres into economic zones for increased production and job creation.',
    image: infrastructureImg,
    icon: Building2,
    category: 'Infrastructure',
    link: '/what-we-do/economic-enclaves',
  },
  {
    id: 4,
    title: 'Digital Youth Hubs',
    description: 'Centers of excellence for capacity building, incubation, and youth-led startups.',
    image: digitalHubImg,
    icon: Laptop,
    category: 'Youth Empowerment',
    link: '/what-we-do/digital-youth-hubs',
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4"
            >
              Our Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground"
            >
              Transforming <span className="text-primary">Ghana</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/what-we-do">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-elevated overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    <project.icon className="w-4 h-4" />
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Link to={project.link}>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
