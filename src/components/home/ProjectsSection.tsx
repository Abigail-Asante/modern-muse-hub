import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Wheat, Building2, Laptop, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProjects } from '@/hooks/useDataStore';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Zap,
  Wheat,
  Building2,
  Laptop,
};

export function ProjectsSection() {
  const { projects } = useProjects();
  const displayProjects = projects.slice(0, 4);

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

        {displayProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {displayProjects.map((project, index) => {
              const IconComponent = iconMap[project.icon] || Lightbulb;
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group card-elevated overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                        <IconComponent className="w-4 h-4" />
                        {project.title}
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
                    <Link to={`/what-we-do/${project.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
