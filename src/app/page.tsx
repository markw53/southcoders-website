// app/page.tsx
import { Metadata } from 'next'
import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { siteConfig, services, stats, team } from '@/config/site'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

function HeroSection() {
  const heroRef = useRef(null)
  const controls = useAnimation()
  const { inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={heroRef}
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

function ServicesSection() {
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
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
  )
}

function StatsSection() {
  const statsRef = useRef(null)
  const controls = useAnimation()
  const { inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={statsRef}
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
  )
}

function TeamSection() {
  const ref = useRef(null)
  const controls = useAnimation()
  const { inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
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
            <Card key={member.name} className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.section>
  )
}

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