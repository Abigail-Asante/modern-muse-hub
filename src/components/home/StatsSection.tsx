import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Wheat, Users, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: 4,
    suffix: 'M+',
    label: 'People with Reliable Electricity',
    description: 'Benefiting from Power Compact initiatives',
  },
  {
    icon: Wheat,
    value: 2,
    suffix: 'M+',
    label: 'Farmers Supported',
    description: 'With modern agricultural technologies',
  },
  {
    icon: Users,
    value: 5,
    suffix: 'M+',
    label: 'Lives Impacted',
    description: 'Through job creation and infrastructure',
  },
  {
    icon: DollarSign,
    value: 1,
    suffix: 'B+',
    label: 'USD Invested',
    description: 'In the Ghanaian economy over 20 years',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-stats text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-4"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold"
          >
            Delivering <span className="text-secondary">Progress</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl sm:text-5xl font-serif font-bold mb-2 text-secondary">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
              <p className="text-white/60 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
