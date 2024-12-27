import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["Angular", "ReactJS", "AngularJS", "TypeScript", "JavaScript", "NodeJS", "Storybook", "C++", "C", "SQL", "RxJs", "TailwindCSS", "NextJS", "MongoDB", "PostgreSQL", "Git", "GitHub", "Docker", "Linux", "HTML", "CSS"]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}