"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const values = [
  {
    title: "Mission",
    body:
      "FIRES (Fire Intelligence & Risk Evaluation System) protects communities by warning about ignition risk early enough to act.",
  },
  {
    title: "Vision",
    body:
      "A world where wildfire response is pre positioned and not reactive. Ground crews, NGOs, and residents all see the same trusted risk signal.",
  },
  {
    title: "Values",
    body:
      "Science first, transparent about model limits, accountable to the communities we serve, and built with safety over hype.",
  },
];

const judgeSnapshot = [
  { label: "What", detail: "Predict ignition risk from satellite imagery + weather" },
  { label: "How", detail: "Trained ML model scoring tiles High / Elevated / Stable" },
  { label: "Proof", detail: "Based on real satellite scenes; wireframes show UX" },
];

const timelineData = [
  {
    title: "Phase 1: Multi-Source Data Ingestion",
    description: "FIRES pulls high-resolution satellite scenes and merges them with localized weather patterns and vegetation health indices.",
    video: "/conrad_vids/recording_1.mov",
    tag: "Data Layer",
  },
  {
    title: "Phase 2: Neural Intelligence Processing",
    description: "Our core model evaluates every tile, cross-referencing thermal anomalies with historical fire behavior to predict ignition likelihood.",
    video: "/conrad_vids/recording_2.mov",
    tag: "AI Model",
  },
  {
    title: "Phase 3: Risk Output & Mitigation",
    description: "The system generates clear risk tiers and delivers actionable protocols to responders and residents in the high-risk zones.",
    video: "/conrad_vids/recording_3.mov",
    tag: "Action",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-border/50 bg-background/80 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-primary/10">
              <Image 
                src="/fires_logo.png" 
                alt="FIRES Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-lg font-semibold leading-tight">FIRES</div>
              <p className="text-xs text-muted-foreground">Fire Intelligence & Risk Evaluation System</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a className="hover:text-primary transition-colors" href="#mission">
              Mission
            </a>
            <a className="hover:text-primary transition-colors" href="#innovation">
              Innovation
            </a>
            <a className="hover:text-primary transition-colors" href="#timeline">
              Timeline
            </a>
            <a className="hover:text-primary transition-colors" href="#brand">
              Brand
            </a>
            <Button asChild size="sm">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </nav>

        <header className="pt-12 pb-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
            Built for wildfire readiness: honest, conceptual wireframe
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Predict ignition risk. Move resources early. Protect people.
            </h1>
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              FIRES blends satellite imagery, weather, and historical fire behavior to flag ignition risk before
              flames start. The visuals below are a designed representation of the intended experience, based on a working model
              tested on real satellite data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="min-w-[180px]" asChild>
                <a href="#timeline">Explore timeline model</a>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px]" asChild>
                <a href="https://youtu.be/L7ZsfeYUwg0" target="_blank" rel="noopener noreferrer">
                  Watch concept video
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {judgeSnapshot.map((item) => (
              <Card key={item.label} className="p-5 space-y-2">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                <p className="text-base font-semibold text-foreground leading-snug">{item.detail}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <Card className="p-5">
              <p className="text-sm text-muted-foreground">Model status</p>
              <p className="text-2xl font-semibold text-primary">Trained & tested</p>
              <p className="text-sm text-muted-foreground">Built on real satellite scenes</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-muted-foreground">Deployment</p>
              <p className="text-2xl font-semibold text-primary">Web link</p>
              <p className="text-sm text-muted-foreground">Accessible via direct URL for judges</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-muted-foreground">Honesty note</p>
              <p className="text-2xl font-semibold text-primary">Concept UI</p>
              <p className="text-sm text-muted-foreground">Screens illustrate intended UX</p>
            </Card>
          </div>
        </header>

        <section id="mission" className="space-y-6 pb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Mission, vision, and values</h2>
            <span className="text-sm text-muted-foreground">Why FIRES exists</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((item) => (
              <Card key={item.title} className="p-6 space-y-3">
                <p className="text-sm font-semibold text-primary">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="pb-12 border-t pt-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold">Concept Video</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See the origins and core concept of FIRES. This video demonstrates the initial vision for a wildfire intelligence layer that protects communities through space based prediction.
              </p>
              <Button asChild size="lg">
                <a href="https://youtu.be/L7ZsfeYUwg0" target="_blank" rel="noopener noreferrer">
                  Open video on YouTube
                </a>
              </Button>
            </div>
            <div className="flex-1 w-full">
              <a 
                href="https://youtu.be/L7ZsfeYUwg0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block aspect-video overflow-hidden rounded-2xl bg-muted shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform group-hover:scale-110">
                    <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white text-sm font-semibold drop-shadow-md">FIRES Concept Video — Watch Now</p>
                </div>
                <div className="h-full w-full bg-gradient-to-br from-orange-500/20 to-slate-900/40" />
              </a>
            </div>
          </div>
        </section>

        <section id="innovation" className="space-y-8 pb-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">Model of the innovation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FIRES isn&apos;t just a map. It&apos;s a multi layered intelligence engine. We built our wireframe to mirror the technical architecture:
              </p>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-foreground">Explainable AI</h3>
                  <p className="text-sm text-muted-foreground">Every risk score is backed by the specific environmental data that triggered it, so fire marshals can trust the signal.</p>
                </Card>
                <Card className="p-4 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-foreground">Resource Optimization</h3>
                  <p className="text-sm text-muted-foreground">By predicting risk *before* ignition, we enable agencies to pre position crews, saving critical response time and millions in damages.</p>
                </Card>
                <Card className="p-4 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-foreground">Scalable Architecture</h3>
                  <p className="text-sm text-muted-foreground">Built to ingest global satellite passes, the system model allows for rapid deployment to any fire prone ecosystem on Earth.</p>
                </Card>
              </div>
            </div>
            <div className="flex-1 w-full">
              <Card className="overflow-hidden bg-muted/30">
                <div className="p-3 text-center border-b bg-muted/50">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Technical System Model</span>
                </div>
                <div className="relative aspect-video">
                  <Image 
                    src="/wireframe_model.png" 
                    alt="The technical architecture and model flow of FIRES"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="timeline" className="space-y-12 pb-12 border-t pt-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Actual Timeline Model</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow the journey of a data point as it moves through the FIRES intelligence layer.
            </p>
          </div>

          <div className="space-y-24">
            {timelineData.map((step, index) => (
              <div 
                key={step.title} 
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    {step.tag}
                  </div>
                  <h3 className="text-3xl font-bold">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <Card className="overflow-hidden bg-black shadow-2xl">
                    <div className="relative aspect-video">
                      <video
                        src={step.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="brand" className="space-y-6 pb-12 border-t pt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Brand Identity</h2>
            <span className="text-sm text-muted-foreground">The FIRES Persona</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold text-primary">Name & Logo</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">FIRES</span>: Fire Intelligence & Risk Evaluation System. Our brand name is an acronym that clearly states our technical purpose. Our logo (seen in the navigation bar) combines a minimalist flame with a satellite map pin to represent "space down protection."
              </p>
            </Card>
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold text-primary">Color Scheme</h3>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our palette is built for high stress legibility:
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-8 w-8 rounded-full border bg-[#f97316]" />
                    <span className="text-[10px] font-mono uppercase">#f97316</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-8 w-8 rounded-full border bg-[#0f172a]" />
                    <span className="text-[10px] font-mono uppercase">#0f172a</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-8 w-8 rounded-full border bg-[#f9fafb]" />
                    <span className="text-[10px] font-mono uppercase">#f9fafb</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold text-primary">Voice & Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our voice is <span className="font-bold text-foreground">Scientific, Responsible, and Calm.</span> We avoid alarmism, focusing instead on data driven action. Our design uses "clean space" and clear hierarchical typography to ensure responders can find critical info in seconds.
              </p>
            </Card>
          </div>
        </section>

        <section id="contact" className="space-y-6 pb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Contact & access</h2>
            <span className="text-sm text-muted-foreground">Public link only</span>
          </div>
          <Card className="p-6 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Email</p>
                <p className="text-sm text-muted-foreground">varun.k.nukala@gmail.com | nickchen28.finance@gmail.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">What to include</p>
                <p className="text-sm text-muted-foreground">
                  Region of interest, current monitoring tools, and any satellite sources you use so we can tailor the response.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
