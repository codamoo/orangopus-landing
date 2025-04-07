"use client"

import { useState, useEffect } from "react"
import { GitHubRepoCard } from "@/components/github-repo-card"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

export function GitHubReposSection() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        setIsLoading(true)
        const response = await fetch('https://api.github.com/orgs/orangopus/repos?sort=updated&per_page=6')
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError('Could not load repositories. Please try again later.')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // Language colors mapping
  const languageColors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Go: "#00ADD8",
    Rust: "#dea584",
    // Add more languages as needed
  }

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-red-400">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <GitHubRepoCard
              key={repo.id}
              name={repo.name}
              description={repo.description || "No description available"}
              url={repo.html_url}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
              language={repo.language || "Unknown"}
              languageColor={languageColors[repo.language as keyof typeof languageColors] || "#ff913d"}
            />
          ))}
        </div>
      )}
    </div>
  )
}
