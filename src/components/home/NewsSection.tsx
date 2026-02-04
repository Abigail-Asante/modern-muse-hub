import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useNews } from '@/hooks/useDataStore';

export function NewsSection() {
  const { news } = useNews();
  const displayNews = news.slice(0, 4);

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
            <Link to="/media/news">
              <Button variant="outline" size="lg">
                View All News
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {displayNews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No news articles yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayNews.map((item, index) => (
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
        )}
      </div>
    </section>
  );
}
