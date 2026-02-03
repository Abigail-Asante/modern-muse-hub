import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Partnership with US Millennium Challenge Corporation',
  'Over 20 years of development impact',
  'Focus on sustainable economic growth',
  'Transparent and accountable governance',
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              About MiDA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Driving Sustainable{' '}
              <span className="text-primary">Economic Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Millennium Development Authority (MiDA) is a Government of Ghana organization 
              established by an Act of Parliament. We oversee, manage and implement programmes 
              under the Compact Agreement signed with the Millennium Challenge Corporation of 
              the United States of America.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="default" size="lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Shape */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
                
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white">
                  <span className="text-7xl sm:text-8xl font-serif font-bold mb-4">20+</span>
                  <span className="text-xl sm:text-2xl font-medium">Years of Impact</span>
                  <div className="mt-6 w-16 h-1 bg-secondary rounded-full" />
                  <p className="mt-6 text-white/80 max-w-xs">
                    Transforming Ghana through strategic development partnerships
                  </p>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-2xl font-serif font-bold text-foreground">$1B+</span>
                    <p className="text-sm text-muted-foreground">Total Investment</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
