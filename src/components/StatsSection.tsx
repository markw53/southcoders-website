// components/stats-section.tsx
"use client";

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Stat } from '@/../types/types';

interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const { inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <section className="bg-muted/50 py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-none bg-transparent">
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <stat.icon className="h-12 w-12 mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
}