import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

const jobs = [
    {
        role: "Associate Software Engineer",
        company: "Asite Solution Pvt. Ltd.",
        logo: "/company.svg",
        duration: "June 2023 - Present",
        description:
            "Responsible for developing & managing Form Builder features & Interface and developing custom Google Blockly for run-time scripting during form creation. Also maintaining legacy AngularJS codebase and migrating it to Angular 17 with new features and user interface",
        link: "https://techinnovators.com",
        images: [],
    },
    {
        role: "Front-End Developer Intern",
        company: "Asite Solution Pvt. Ltd.",
        logo: "/company.svg",
        duration: "Jan 2023 - April 2023",
        description:
            "Led a team of 9 other interns in successfully developing of Application Tracking System(ATS), where HR can track applicant’s Resume, Interviewer & interview Rounds & their respective status of any candidate, can also notify candidate their interview schedule & Round status through Email services.",
        link: "https://startupventures.com",
        images: [
            "/devvault.png",
            "/devvault.png",
        ],
    },
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2" />
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description}</p>
                                {/* Job Images */}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}