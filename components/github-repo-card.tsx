import { Star, GitFork, Code } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface GitHubRepoCardProps {
  name: string
  description: string
  url: string
  stars: number
  forks: number
  language: string
  languageColor?: string
}

export function GitHubRepoCard({
  name,
  description,
  url,
  stars,
  forks,
  language,
  languageColor = "#ff913d"
}: GitHubRepoCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 hover:bg-space-700 border-space-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
          <Code className="h-5 w-5 text-orange-400" />
          {name}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full mr-1" style={{ backgroundColor: languageColor }}></span>
            {language}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <Star className="h-4 w-4" />
            {stars}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <GitFork className="h-4 w-4" />
            {forks}
          </span>
        </div>
        <Link 
          href={url} 
          target="_blank" 
          className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
        >
          View Repository
        </Link>
      </CardFooter>
    </Card>
  )
}
