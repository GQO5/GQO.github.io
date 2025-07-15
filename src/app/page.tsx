"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BookOpen,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  MapPin,
  Play,
  Calendar,
  Zap,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projects, papers } from "@/data"
 const basePath = process.env.NODE_ENV === 'production' ? '/GQO.github.io' : '';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "mechatronics": return <Cpu className="h-4 w-4 mr-2" />
      case "robotics": return <Cpu className="h-4 w-4 mr-2" />
      case "electronics": return <Zap className="h-4 w-4 mr-2" />
      case "automotive": return <Wrench className="h-4 w-4 mr-2" />
      case "engineering": return <Wrench className="h-4 w-4 mr-2" />
      case "web": return <Code2 className="h-4 w-4 mr-2" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cpu className="h-6 w-6" />
            <span className="font-bold text-xl">Guillermo Quiroga</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#papers" className="hover:text-primary transition-colors">
              Papers
            </Link>
            {/* <Link href="#certifications" className="hover:text-primary transition-colors">
              Certifications
            </Link> */}
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src={`${basePath}/images/me.png`}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mechatronics Engineer
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Passionate about creating innovative solutions through the integration of mechanical, electronic, and software systems. 
              Specialized in robotics, automation, embedded systems, and advanced manufacturing.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin className="h-4 w-4" />
              <span>Copenhagen, Denmark</span>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A collection of projects spanning mechatronics, robotics, electronics, and automotive engineering, 
              showcasing system integration, automation, and innovative problem-solving.
            </p>

            {/* Category Filter */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                size="sm"
              >
                All Projects
              </Button>
              <Button
                variant={selectedCategory === "mechatronics" ? "default" : "outline"}
                onClick={() => setSelectedCategory("mechatronics")}
                size="sm"
              >
                {getCategoryIcon("mechatronics")}
                Mechatronics
              </Button>
              <Button
                variant={selectedCategory === "robotics" ? "default" : "outline"}
                onClick={() => setSelectedCategory("robotics")}
                size="sm"
              >
                {getCategoryIcon("robotics")}
                Robotics
              </Button>
              <Button
                variant={selectedCategory === "electronics" ? "default" : "outline"}
                onClick={() => setSelectedCategory("electronics")}
                size="sm"
              >
                {getCategoryIcon("electronics")}
                Electronics
              </Button>
              <Button
                variant={selectedCategory === "automotive" ? "default" : "outline"}
                onClick={() => setSelectedCategory("automotive")}
                size="sm"
              >
                {getCategoryIcon("automotive")}
                Automotive
              </Button>
              <Button
                variant={selectedCategory === "engineering" ? "default" : "outline"}
                onClick={() => setSelectedCategory("engineering")}
                size="sm"
              >
                {getCategoryIcon("engineering")}
                Engineering Design
              </Button>
              <Button
                variant={selectedCategory === "web" ? "default" : "outline"}
                onClick={() => setSelectedCategory("web")}
                size="sm"
              >
                {getCategoryIcon("web")}
                Web Development
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex}>
                            <Image
                              src={image}
                              alt={`${project.title} - Image ${imageIndex + 1}`}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </>
                      )}
                    </Carousel>
                    <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">{project.type}</Badge>
                    <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">{project.year}</Badge>
                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {project.images.map((_, dotIndex) => (
                          <div key={dotIndex} className="w-2 h-2 rounded-full bg-white/60" />
                        ))}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-lg">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                          <DialogDescription className="text-base">{project.description}</DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                          {/* Image Carousel */}
                          <div className="w-full">
                            <Carousel className="w-full">
                              <CarouselContent>
                                {project.images.map((image, imageIndex) => (
                                  <CarouselItem key={imageIndex}>
                                    <Image
                                      src={image}
                                      alt={`${project.title} - Image ${imageIndex + 1}`}
                                      width={600}
                                      height={400}
                                      className="w-full max-h-96 object-contain rounded-lg"
                                    />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious className="left-2" />
                              <CarouselNext className="right-2" />
                            </Carousel>
                          </div>

                          {/* Project Info */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                Project Details
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <strong>Duration:</strong> {project.duration}
                                </div>
                                <div>
                                  <strong>Team:</strong> {project.team}
                                </div>
                                <div>
                                  <strong>Year:</strong> {project.year}
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Zap className="h-4 w-4 mr-2" />
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Technical Specifications (if available) */}
                          {project.specifications && (
                            <div>
                              <h4 className="font-semibold mb-3">Technical Specifications</h4>
                              <div className="grid md:grid-cols-2 gap-2 text-sm">
                                {Object.entries(project.specifications).map(([key, value]) => (
                                  <div key={key} className="flex justify-between p-2 bg-muted rounded">
                                    <span className="font-medium">{key}:</span>
                                    <span>{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Features */}
                          <div>
                            <h4 className="font-semibold mb-3">Key Features</h4>
                            <ul className="grid md:grid-cols-2 gap-2 text-sm">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Challenges & Solutions */}
                          <div>
                            <h4 className="font-semibold mb-2">Challenges & Solutions</h4>
                            <p className="text-sm text-muted-foreground">{project.challenges}</p>
                          </div>

                          {/* Outcome */}
                          <div>
                            <h4 className="font-semibold mb-2">Outcome & Impact</h4>
                            <p className="text-sm text-muted-foreground">{project.outcome}</p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 pt-4 border-t">
                            {project.video && (
                              <Button asChild>
                                <Link href={project.video}>
                                  <Play className="h-4 w-4 mr-2" />
                                  Watch Demo
                                </Link>
                              </Button>
                            )}
                            {project.github && (
                              <Button variant="outline" asChild>
                                <Link href={project.github}>
                                  <Github className="h-4 w-4 mr-2" />
                                  View Code
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {project.category === "web" && (
                      <>
                        <Button size="sm" asChild>
                          <Link href={project.demo || "#"} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section id="papers" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Papers</h2>
            <p className="text-muted-foreground">
              Published research contributions in machine learning, software engineering, and emerging technologies.
            </p>
          </div>
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 leading-tight">{paper.title}</h3>
                      <p className="text-muted-foreground mb-2 text-sm">{paper.authors}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{paper.journal}</span>
                        <span>•</span>
                        <span>{paper.date}</span>
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-xl leading-tight pr-8">{paper.title}</DialogTitle>
                              <DialogDescription className="text-base">
                                {paper.journal} • {paper.date}
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6">
                              {/* Authors */}
                              <div>
                                <h4 className="font-semibold mb-2">Authors</h4>
                                <p className="text-sm text-muted-foreground">{paper.authors}</p>
                              </div>

                              {/* Abstract */}
                              <div>
                                <h4 className="font-semibold mb-2">Abstract</h4>
                                <p className="text-sm leading-relaxed">{paper.abstract}</p>
                              </div>

                              {/* Keywords */}
                              <div>
                                <h4 className="font-semibold mb-3">Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                  {paper.keywords.map((keyword, keywordIndex) => (
                                    <Badge key={keywordIndex} variant="secondary" className="text-xs">
                                      {keyword}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Key Results */}
                              <div>
                                <h4 className="font-semibold mb-2">Key Results</h4>
                                <div className="bg-muted p-4 rounded-lg">
                                  <p className="text-sm font-medium text-primary">{paper.results}</p>
                                </div>
                              </div>

                              {/* Publication Details */}
                              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                                <div>
                                  <h5 className="font-medium text-sm mb-1">Journal</h5>
                                  <p className="text-sm text-muted-foreground">{paper.journal}</p>
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm mb-1">Publication Date</h5>
                                  <p className="text-sm text-muted-foreground">{paper.date}</p>
                                </div>
                              </div>

                              {/* Action Button */}
                              <div className="pt-4 border-t">
                                <Button asChild>
                                  <Link href={paper.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Read Full Paper
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" asChild>
                          <Link href={paper.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Read Paper
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section id="certifications" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground">
              Professional certifications that validate my expertise in cloud technologies and software development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Issued: {cert.date}</span>
                        <span>•</span>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I&apos;m interested in new opportunities and collaborations. Feel free to reach out if you&apos;d like to
            discuss a project or just say hello.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {/* <Button asChild>
              <Link href="mailto:gqostartup@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Me
              </Link>
            </Button> */}
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com/in/gqo">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/GQO5">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Guillermo Quiroga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}