import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const news = [
  {
    id: 1,
    title: 'MiDA to drive Grow24 with proven MCC models',
    excerpt: 'The Millennium Development Authority (MiDA) is poised to play a central role in Ghana\'s agricultural transformation...',
    date: 'July 6, 2025',
    category: 'Agriculture',
  },
  {
    id: 2,
    title: 'We\'ll implement outcomes of economic dialogue – MiDA Boss',
    excerpt: 'MiDA commits to implementing key outcomes from recent economic dialogues to accelerate development...',
    date: 'March 5, 2025',
    category: 'Leadership',
  },
  {
    id: 3,
    title: 'MiDA welcomes new acting Chief Executive Officer',
    excerpt: 'Alex Mould assumes leadership of the Millennium Development Authority with a vision for transformation...',
    date: 'February 18, 2025',
    category: 'Announcements',
  },
  {
    id: 4,
    title: 'Ghana prepares for new MCC engagement',
    excerpt: 'Preparations underway for new strategic partnership discussions with the Millennium Challenge Corporation...',
    date: 'November 12, 2024',
    category: 'Partnerships',
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary-foreground text-sm font-semibold mb-4"
            >
              Stay Updated
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground"
            >
              Latest <span className="text-primary">News</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" size="lg">
              View All News
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-elevated p-6 flex flex-col"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold mb-4 w-fit">
                {item.category}
              </span>
              <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                {item.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </span>
                <Button variant="link" className="p-0 h-auto text-primary text-sm">
                  Read <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
