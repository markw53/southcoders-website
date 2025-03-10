// pages/services.tsx
import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { services } from '@/config/services'

function ServiceCards() {
  return (
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
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container text-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how we can help your business grow with our professional 
            web development services.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const heroControls = useAnimation()
  const servicesControls = useAnimation()
  const ctaControls = useAnimation()

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true })
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true })

  // Animation effects
  useEffect(() => {
    if (heroInView) {
      heroControls.start({ opacity: 1, y: 0 })
    }
  }, [heroControls, heroInView])

  useEffect(() => {
    if (servicesInView) {
      servicesControls.start({ opacity: 1, y: 0 })
    }
  }, [servicesControls, servicesInView])

  useEffect(() => {
    if (ctaInView) {
      ctaControls.start({ opacity: 1, y: 0 })
    }
  }, [ctaControls, ctaInView])

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroControls}
        transition={{ duration: 1 }}
      >
        <section className="container py-12 md:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              We offer a comprehensive range of digital services to help your 
              business succeed online. From web development to digital marketing, 
              we&apos;ve got all your digital needs covered.
            </p>
          </div>
        </section>
      </motion.section>

      {/* Services Section */}
      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={servicesControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ServiceCards />
      </motion.div>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CallToAction />
      </motion.section>
    </div>
  )
}