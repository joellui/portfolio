import { TracingBeam } from "./ui/tracing-beam";
import activityList from "../public/activity_list.json";
import Timeline from "@mui/lab/Timeline"
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineItemClasses, timelineOppositeContentClasses } from "@mui/lab";
import { Link } from "lucide-react";


interface Activity {
    id: number;
    Organisation: string;
    Artical_title: string;
    Artical_link: string | null;
    Artical_Summary: string;
    date_published: string;
}


export function ActivityList() {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >

            {activityList.map((act: Activity, i: number, arr: Activity[]) => (
                <TimelineItem key={i} className="mt-2">
                    <TimelineOppositeContent className="text-sm opacity-50">
                        {act.date_published}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        {i < arr.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent className="grid grid-cols-9 gap-2">

                        <div className="col-span-5">
                            <h5>{act.Artical_title}</h5>
                        </div>
                        <div className="col-span-4 text-right text-sm opacity-50">
                            <span>{act.Organisation}</span>
                        </div>
                        <div className="col-span-9 text-sm">
                            <p>{act.Artical_Summary}</p>
                            {act.Artical_link && (
                                <a href={act.Artical_link} className="hover:underline inline-block text-blue-500">
                                    Read More <Link className="inline-block scale-75 stroke-blue-500" />
                                </a>
                            )}
                        </div>


                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>


    );
}