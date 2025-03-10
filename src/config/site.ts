// config/site.ts
import {
    CodeIcon,
    LayoutIcon,
    ShoppingCartIcon,
    SmartphoneIcon,
    FileTextIcon,
    SearchIcon,
    BarChartIcon,
    ShieldIcon,
    ClockIcon,
    UserIcon,
    CheckIcon,
  } from 'lucide-react'
  
  export const siteConfig = {
    name: "Your Company Name",
    description: "Your company description",
    url: "https://your-domain.com",
    ogImage: "https://your-domain.com/og.jpg",
    links: {
      twitter: "https://twitter.com/yourusername",
      github: "https://github.com/yourusername",
    },
  }
  
  export const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices.",
      icon: CodeIcon
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces that users love.",
      icon: LayoutIcon
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores that drive sales and growth.",
      icon: ShoppingCartIcon
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications.",
      icon: SmartphoneIcon
    },
    {
      title: "CMS Development",
      description: "Content management systems for easy content updates.",
      icon: FileTextIcon
    },
    {
      title: "SEO Optimization",
      description: "Improve your visibility and drive organic traffic.",
      icon: SearchIcon
    },
    {
      title: "Digital Analytics",
      description: "Data-driven insights to improve your digital presence.",
      icon: BarChartIcon
    },
    {
      title: "Security Services",
      description: "Protect your web applications and user data.",
      icon: ShieldIcon
    },
  ]
  
  export const budgetRanges = [
    { title: "Under £1,000" },
    { title: "£1,000 - £5,000" },
    { title: "£5,000 - £10,000" },
    { title: "£10,000 - £25,000" },
  ]
  
  export const stats = [
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
    },
  ]
  
  export const team = [
    {
      name: "Terry Ward",
      role: "Founder & CEO",
      image: "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5IZTzDDAvt1ns6dULejNrKFhcSBzAmyaXiQ0Y"
    },
    {
      name: "Terry Ward",
      role: "Frontend Developer",
      image: "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5IZTzDDAvt1ns6dULejNrKFhcSBzAmyaXiQ0Y"
    },
    {
      name: "Terry Ward",
      role: "Backend Developer",
      image: "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5IZTzDDAvt1ns6dULejNrKFhcSBzAmyaXiQ0Y"
    },
  ]