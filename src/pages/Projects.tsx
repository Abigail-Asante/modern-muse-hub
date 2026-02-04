import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Lightbulb, Wheat, Building2, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects } from '@/hooks/useDataStore';

// Icon mapping
const iconMap = {
  Lightbulb,
  Wheat,
  Building2,
  Laptop,
};

const Projects = () => {
  const { projects, loading } = useProjects();

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <section className="bg-muted/30 py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">What We Do</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MiDA implements strategic development programs designed to reduce poverty through economic growth in key sectors of the Ghanaian economy.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading projects...</p>
              </div>
            ) : projects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => {
                  const IconComponent = iconMap[project.icon] || Lightbulb;
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border flex flex-col"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <IconComponent className="w-16 h-16 text-muted-foreground" />
                          </div>
                        )}
                        <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center z-20 bg-white shadow-lg ${project.color.replace('bg-', 'text-').replace('/10', '')}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                          {project.description}
                        </p>

                        <Link to={`/what-we-do/${project.slug}`}>
                          <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:translate-x-1 transition-transform">
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
