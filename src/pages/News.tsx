import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for news articles
const newsArticles = [
    {
        id: 1,
        title: 'MiDA to drive Grow24 with proven MCC models',
        excerpt: 'The Millennium Development Authority (MiDA) is poised to play a central role in Ghana\'s agricultural transformation by leveraging proven models from the Millennium Challenge Corporation (MCC).',
        date: 'July 6, 2025',
        category: 'Agriculture',
        image: 'https://images.unsplash.com/photo-1625246333195-58197bd47d26?q=80&w=2071&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'We\'ll implement outcomes of economic dialogue – MiDA Boss',
        excerpt: 'MiDA commits to implementing key outcomes from recent economic dialogues to accelerate development and ensure sustainable economic growth across key sectors.',
        date: 'March 5, 2025',
        category: 'Leadership',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'MiDA welcomes new acting Chief Executive Officer',
        excerpt: 'Alex Mould assumes leadership of the Millennium Development Authority with a vision for transformation and a renewed focus on delivering impactful projects.',
        date: 'February 18, 2025',
        category: 'Announcements',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Ghana prepares for new MCC engagement',
        excerpt: 'Preparations underway for new strategic partnership discussions with the Millennium Challenge Corporation to focus on regional integration and climate resilience.',
        date: 'November 12, 2024',
        category: 'Partnerships',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Completion of Kasoa Bulk Supply Point',
        excerpt: 'The newly commissioned Kasoa Bulk Supply Point is set to improve power reliability for over 300,000 residents and businesses in the Central Region.',
        date: 'October 24, 2024',
        category: 'Infrastructure',
        image: 'https://images.unsplash.com/photo-1473341304170-5799a226591d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Women in Energy Conference Highlights',
        excerpt: 'MiDA hosts successful conference celebrating women\'s contributions to the energy sector and launching new mentorship programs for aspiring female engineers.',
        date: 'September 15, 2024',
        category: 'Events',
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop'
    }
];

const News = () => {
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
                            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
                                Press Room
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Latest News & Updates</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Explore stories of impact, official announcements, and the latest developments from our projects transforming Ghana.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsArticles.map((article, index) => (
                                <motion.article
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border flex flex-col h-full"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-primary text-xs font-bold">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                            <Calendar className="w-4 h-4" />
                                            {article.date}
                                        </div>

                                        <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="mt-auto">
                                            <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                                Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <Button variant="outline" size="lg" className="min-w-[200px]">
                                Load More News
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default News;
