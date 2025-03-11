// app/page.tsx
"use client";

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { siteConfig, services, stats, team } from '@/config/site'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import Link from 'next/link'
import TeamSection from '@/components/TeamSection'

function HeroSection() {
  const sectionRef = useRef(null)
  const controls = useAnimation()
  const { inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <section className="container py-12 md:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            Welcome to {siteConfig.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
      </section>
    </motion.section>
  )
}

// ... (rest of the code remains the same)

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
    </main>
  )
}