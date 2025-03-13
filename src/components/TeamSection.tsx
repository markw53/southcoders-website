// components/team-section.tsx
"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { TeamMember } from '@/../types/types';

interface TeamSectionProps {
  team: TeamMember[];
}

export function TeamSection({ team }: TeamSectionProps) {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const {inView } = useInView({ triggerOnce: true });

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
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <section className="container pb-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-8 md:mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={`${member.name}-${member.role}`} className="text-center">
              <CardContent className="pt-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.section>
  );
}