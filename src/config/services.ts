// config/services.ts
import {
    CodeIcon,
    LayoutIcon,
    ShoppingCartIcon,
    SmartphoneIcon,
    FileTextIcon,
    SearchIcon,
    BarChartIcon,
    ShieldIcon,
  } from 'lucide-react'
  
  export const services = [
    {
      icon: CodeIcon,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices. We create scalable solutions that grow with your business.",
      features: [
        "Custom Web Applications",
        "Frontend Development",
        "Backend Development",
        "API Integration"
      ]
    },
    {
      icon: LayoutIcon,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences. We focus on both aesthetics and functionality.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems"
      ]
    },
    // ... Add other services
  ]