// pages/about.tsx
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ClockIcon, UserIcon, CheckIcon } from '@heroicons/react/24/outline'

// Stats data
const stats = [
  {
    icon: ClockIcon,
    value: "3+",
    label: "Years Experience"
  },
  {
    icon: UserIcon,
    value: "1+",
    label: "Happy Clients"
  },
  {
    icon: CheckIcon,
    value: "1+",
    label: "Projects Completed"
  }
]

// Team data
const team = [
  {
    name: "Mark Workman",
    role: "Founder & CEO",
    image: "/path-to-image.jpg"
  },
  {
    name: "Mark Workman",
    role: "Frontend Developer",
    image: "/path-to-image.jpg"
  },
  {
    name: "Mark Workman",
    role: "Backend Developer",
    image: "/path-to-image.jpg"
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Team Section */}
      <TeamSection />
    </>
  )
}

function HeroSection() {
  const controls = useAnimation()
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={inViewRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <section className="container py-12 md:py-24 px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re a team of passionate developers, designers, and digital craftsmen 
              dedicated to creating exceptional web experiences.
            </p>
          </div>
        </div>
      </section>
    </motion.section>
  )
}

function MissionSection() {
  const controls = useAnimation()
  const { ref: missionRef, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={missionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, delay: 0.2 }}
      className="container py-16 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
        <p className="text-lg text-muted-foreground">
          At ByteWard Solutions, we believe in transforming digital ideas into reality. 
          Our mission is to help businesses thrive in the digital age by creating 
          innovative, user-friendly, and scalable web solutions that drive real results.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Work With Us</Link>
        </Button>
      </div>
    </motion.section>
  )
}

function StatsSection() {
  return (
    <section className="container py-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent>
              <stat.icon className="w-12 h-12 mx-auto text-primary" />
              <p className="mt-4 text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="container py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="space-y-4">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-48 h-48 rounded-full mx-auto"
              />
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}