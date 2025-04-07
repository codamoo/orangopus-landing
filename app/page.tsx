import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { SpaceBackground } from "@/components/space-background"
import { GitHubReposSection } from "@/components/github-repos-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-space-900 text-white overflow-hidden">
      <SpaceBackground />
      <header className="px-4 lg:px-6 h-20 flex justify-center z-50 relative">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="logo.png"
            alt="Orangopus Logo"
            width={140}
            height={60}
            className="p-1"
          />
        </Link>
      </header>
      <main className="flex-1 relative">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                  Explore the Universe of Creativity
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-gray-300 md:text-2xl/relaxed lg:text-3xl/relaxed xl:text-4xl/relaxed">
                  Launch your ideas into an open-source cosmos of innovation and inclusivity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://discord.gg/ngPeN4zPUt">
                <Button
                  size="lg"
                  className="button-brand hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="#labs">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-orange-400 hover:bg-orange-400/10 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Labs
                </Button>
              </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
              Our Cosmic Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Open-Source Galaxy"
                description="Contribute to and benefit from a vast universe of freely shared knowledge and creativity."
                icon="Code"
              />
              <FeatureCard
                title="Inclusive Nebula"
                description="Join a diverse community where every voice and idea is valued, regardless of background."
                icon="Users"
              />
              <FeatureCard
                title="Innovation Supernova"
                description="Ignite your creativity and watch your ideas explode into groundbreaking projects."
                icon="Lightbulb"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 px-4 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(https://orangopus.org/img/spacebg.png)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-transparent"></div>
          <div className="container mx-auto relative z-10 text-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
                Our Cosmic Journey
              </h2>
              <p className="text-xl text-gray-300">
                Orangopus was born from a vision to create an open-source, non-profit platform where creativity knows
                no bounds. We're dedicated to fostering a universe of inclusivity and innovation, where creators from
                all backgrounds can develop their ideas, guided by mentorship and empowered by open-source technology.
              </p>
            </div>
          </div>
        </section>
        <section id="labs" className="w-full py-12 md:py-24 lg:py-32 px-4 relative overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
              Cosmic Labs
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Explore our experimental projects and open-source repositories. These cosmic experiments represent our latest innovations and contributions to the open-source universe.
            </p>
            <GitHubReposSection />
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
              Send a Cosmic Signal
            </h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <input
                  className="w-full p-3 bg-space-800 border border-space-700 rounded-full text-white focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="w-full p-3 bg-space-800 border border-space-700 rounded-full text-white focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="w-full p-3 bg-space-800 border border-space-700 rounded-card text-white focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Your Message"
                  rows={4}
                  required
                ></textarea>
                <Button className="w-full button-brand hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Transmit Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 border-t border-space-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Orangopus. All rights reserved across the galaxy.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:text-orange-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-orange-400 transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

