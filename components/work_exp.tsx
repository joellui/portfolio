import { BriefcaseBusiness, Grid } from "lucide-react";
import Image from "next/image";
import data from "../public/job_list.json";
import Link from "next/link";

interface Job {
    id: number;
    Company_name: string;
    Company_logo: string;
    Company_location: string;
    Company_website: string;
    Company_description: string[];
    Job_title: string;
    Job_type: string;
    Job_Start_date: string;
    Job_End_date: string;
}

export default function WorkExp() {

    return (
        <div>
            <BriefcaseBusiness className="inline-block m-2" />
            <h3 className="inline-block">Work Experiance</h3>

            {data.map((job: Job, i: number) => (
                <div className="grid grid-cols-9 gap-3 mt-7" key={i}>
                    <div className=" col-span-2 row-span-3">
                        <Image src={job.Company_logo} width={100} height={100} alt={job.Company_name + "_logo"} className="m-2 p-2" />
                    </div>
                    <div className="col-span-7 grid gap-2 grid-cols-2">
                        <Link href={job.Company_website} className="mx-3 hover:underline">{job.Company_name}</Link>
                        <div className="text-right font-thin mx-3">{job.Company_location}</div>
                    </div>
                    <div className="col-span-7 grid gap-2 grid-cols-2 font-thin text-sm">
                        <div className="mx-3">{job.Job_title + " " + job.Job_type}</div>
                        <div className="text-right mx-3">{job.Job_Start_date + " - " + job.Job_End_date}</div>
                    </div>

                    <div className=" col-span-7 font-thin mx-3 text-sm">
                        <ul className="list-disc">
                            {job.Company_description.map((item: string, i: number) => (
                                <li key={i}> {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}

        </div>
    );
}