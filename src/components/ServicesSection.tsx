// components/services-section.tsx
"use client";

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Service } from '@/../types/types';
import Link from 'next/link';

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
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
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <section className="container pb-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full" asChild>
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.section>
  );
}