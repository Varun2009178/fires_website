"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
  {
    name: "Varun Nukala",
    role: "ML & Technical Lead",
    bio: "Trains the models, tunes the algorithms, debugs satellite data at 2am.",
  },
  {
    name: "Nick Chen",
    role: "Systems & Strategy",
    bio: "System architecture, deployment, making sure fire agencies can actually use what we build.",
  },
];

const timelineData = [
  {
    title: "Gathering the data",
    description: "Satellite imagery combined with real-time weather and vegetation health data.",
    video: "/conrad_vids/recording_1.mov",
    step: "01",
  },
  {
    title: "Running predictions",
    description: "ML model analyzes thermal patterns against historical fire behavior.",
    video: "/conrad_vids/recording_2.mov",
    step: "02",
  },
  {
    title: "Delivering warnings",
    description: "High-risk areas flagged with clear alerts to agencies and residents.",
    video: "/conrad_vids/recording_3.mov",
    step: "03",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-lg">
              <Image src="/fires_logo.png" alt="FIRES" fill className="object-contain" />
            </div>
            <span className="font-semibold text-lg">FIRES</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#model" className="hover:text-foreground transition-colors">The model</a>
            <a href="#team" className="hover:text-foreground transition-colors">Team</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4">Forest Ignition & Risk Evaluation System</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What if we could see fires before they start?
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              FIRES uses satellite imagery, weather data, and machine learning to predict where wildfires
              are most likely to ignite giving communities time to prepare instead of react.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#how">See how it works</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://youtu.be/L7ZsfeYUwg0" target="_blank" rel="noopener noreferrer">
                  Watch video
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border/40">
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Current fire response systems typically activate after ignition occurs. We are
              developing a system that analyzes satellite data and weather patterns to identify
              high-risk areas before fires begin.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach combines satellite imagery with weather data and processes it through
              a machine learning model to provide early warnings when conditions indicate elevated
              fire risk. This leverages existing data sources to create actionable intelligence.
            </p>
          </div>
        </section>

        <section id="how" className="py-16 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-12">How it works</h2>

          <div className="space-y-20">
            {timelineData.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col md:flex-row gap-10 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <video
                      src={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="model" className="py-16 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-4">The model</h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            We trained a deep learning system on 40,000 satellite images from the Canadian Wildlife
            Ministry. The model achieved 96.2% validation accuracy in classifying wildfire risk.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">Feature extraction</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  MobileNet CNN extracts visual features from 350×350px satellite imagery, including
                  vegetation density, land texture, and thermal patterns. The architecture is
                  lightweight enough for real-time analysis while maintaining accuracy.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Classification</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We evaluated three classifiers: Multilayer Perceptron (MLP), K-Nearest Neighbors,
                  and Random Forest. The optimized MLP achieved 96.2% validation accuracy, providing
                  the best balance of precision and recall for wildfire detection.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Performance</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">96.2%</p>
                    <p className="text-xs text-muted-foreground">MLP accuracy</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">40k</p>
                    <p className="text-xs text-muted-foreground">training images</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">350px</p>
                    <p className="text-xs text-muted-foreground">resolution</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Why it matters</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most systems rely on weather and historical data. Our approach also incorporates
                  visual patterns from satellite imagery, including dry vegetation, thermal anomalies,
                  and land cover changes, providing a more complete assessment of fire risk.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-border/40 bg-muted/20">
                <div className="relative aspect-video">
                  <Image
                    src="/wireframe_model.png"
                    alt="FIRES technical architecture"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><span className="text-foreground font-medium">Data:</span> Canadian Wildlife Ministry satellite imagery</p>
                <p><span className="text-foreground font-medium">Split:</span> 70% training, 15% validation, 15% test</p>
                <p><span className="text-foreground font-medium">Stack:</span> TensorFlow, scikit-learn, NumPy, Pandas</p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="py-16 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-12">About us</h2>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="rounded-xl overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/team_photo_conrad.png"
                    alt="Varun Nukala and Nick Chen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We are two students working on early wildfire detection. We began this project
                after gaining access to satellite data and recognizing an opportunity to apply
                machine learning to fire risk prediction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The model is trained and validated, the data pipeline is operational, and we have
                developed wireframes for the user interface. We continue to refine and expand
                the system based on testing and feedback.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="space-y-1">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border/40">
          <div className="max-w-2xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              FIRES stands for Forest Ignition and Risk Evaluation System. The design uses orange
              to convey urgency without causing alarm, and maintains simplicity to ensure usability
              during critical situations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our communication approach prioritizes clarity and data presentation. We focus on
              presenting model outputs transparently, allowing users to make informed decisions
              based on the information provided.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16 border-t border-border/40">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground mb-6">
              For questions about FIRES or collaboration opportunities, please contact us.
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm">varun.k.nukala@gmail.com</p>
              <p className="font-mono text-sm">nickchen28.finance@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="max-w-5xl mx-auto px-6 text-sm text-muted-foreground">
          <p>FIRES Forest Ignition and Risk Evaluation System</p>
        </div>
      </footer>
    </div>
  );
}
