import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Real-Estate Platform",
        description: "A full-stack Real Estate solution with React, Node.js, and MongoDB",
        tech: "MERN",
        link: "https://estate-mern-iuv2.onrender.com/",
    },
    {
        title: "Applicant tracker",
        description: "Applicant tracking system to keep track of job applications and interviews rounds schedule & status",
        tech: "Angular",
        link: "https://estate-mern-iuv2.onrender.com/",
    },
    {
        title: "Video Streaming",
        description: "An Video Streaming app where user can upload and watch videos",
        tech: "MERN",
        link: "https://github.com/LencyBhalodiya/videoStreamingApp",
    },
    {
        title: "Chrome Extension",
        description: "Extension which blocks social media and video streaming website",
        tech: "JavaScript",
        link: "https://github.com/LencyBhalodiya/javascript_extension",
    },
]

const techColors = {
    "MERN": "bg-blue-500",
    "Angular": "bg-red-500",
    "JavaScript": "bg-yellow-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        target="_blank"
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}