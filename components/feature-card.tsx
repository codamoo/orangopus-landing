import { type LucideIcon, Code, Users, Lightbulb } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: "Code" | "Users" | "Lightbulb"
}

const iconMap: Record<FeatureCardProps["icon"], LucideIcon> = {
  Code,
  Users,
  Lightbulb,
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon]

  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 hover:bg-space-700">
      <div className="mb-4 p-3 bg rounded-full">
        <Icon className="h-8 w-8 text-black" />
      </div>
      <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

