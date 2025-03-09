// pages/contact.tsx
import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { services, budgetRanges } from '@/config/site'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      budget: '',
      message: '',
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: "We'll get back to you as soon as possible.",
        })
        form.reset()
      } else {
        toast({
          title: 'Error sending message',
          description: result.error || 'Please try again or contact us directly.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Error sending message',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Service and Budget fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Required</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Similar implementation for budget field */}
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function FAQ() {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">FAQ</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">How long does a typical project take?</h4>
            <p className="text-sm text-muted-foreground">
              Project timelines vary based on complexity. A simple website might take 4-6 weeks,
              while larger applications can take 3-6 months.
            </p>
          </div>
          {/* Add more FAQ items */}
        </div>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const faqRef = useRef(null)
  
  const heroControls = useAnimation()
  const formControls = useAnimation()
  const faqControls = useAnimation()
  
  const heroInView = useInView(heroRef, { once: true })
  const formInView = useInView(formRef, { once: true })
  const faqInView = useInView(faqRef, { once: true })

  // Animation effects
  useEffect(() => {
    if (heroInView) heroControls.start({ opacity: 1, y: 0 })
  }, [heroControls, heroInView])

  useEffect(() => {
    if (formInView) formControls.start({ opacity: 1, x: 0 })
  }, [formControls, formInView])

  useEffect(() => {
    if (faqInView) faqControls.start({ opacity: 1, x: 0 })
  }, [faqControls, faqInView])

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
            <h1 className="text-4xl font-bold tracking-tight mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? We're here to help bring your vision to life.
            </p>
          </div>
        </section>
      </motion.section>

      {/* Form and FAQ Section */}
      <section className="container pb-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formControls}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, x: 50 }}
            animate={faqControls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FAQ />
          </motion.div>
        </div>
      </section>
    </div>
  )
}