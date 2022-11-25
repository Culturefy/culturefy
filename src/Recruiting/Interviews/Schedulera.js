import React, { useState } from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import './Resume.css'
import { Link } from 'react-router-dom';
import {
    EventActions,
    ProcessedEvent,
    ViewEvent
} from "@aldabil/react-scheduler";


const Schedulera = () => {
   const EVENTS=[
        {
            event_id: 1,
            title: "Test",
            job_applicant: "Test",
            start: new Date("2022/11/21 09:30"),
            end: new Date("2022/11/21 12:30"),
        },

    ]


    const fetchRemote = async (query: ViewEvent): Promise<ProcessedEvent[]> => {
        console.log({ query }, "abcd");
        /**Simulate fetchin remote data */
        return new Promise((res) => {
            setTimeout(() => {
                res(EVENTS);
            }, 3000);
        });
    };

    const handleConfirm = async (
        event: ProcessedEvent,
        action: EventActions
    ): Promise<ProcessedEvent> => {
        console.log(event, action);
        if (action === "edit") {
            /** PUT event to remote DB */
        } else if (action === "create") {
            /**POST event to remote DB */
        }
        /**
         * Make sure to return 4 mandatory fields:
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         * ....extra other fields depend on your custom fields/editor properties
         */
        // Simulate http request: return added/edited event
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    ...event,
                    event_id: event.event_id || Math.random()
                });
            }, 3000);
        });
    };

    const handleDelete = async (deletedId: string): Promise<string> => {
        // Simulate http request: return the deleted id
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(deletedId);
            }, 3000);
        });
    };

    return (
        <>
            <div className='interview_calander'>
                <Scheduler
                    view="month"
                    getRemoteEvents={fetchRemote}
                    onConfirm={handleConfirm}
                    onDelete={handleDelete}
                    month={{
                        weekDays: [0, 1, 2, 3, 4, 5, 6],
                        weekStartsOn: 2,
                        startHour: 0,
                        endHour: 24,
                        step: 60
                    }}
                    week={{
                        weekDays: [0, 1, 2, 3, 4, 5, 6],
                        weekStartsOn: 2,
                        startHour: 6,
                        endHour: 22,
                        step: 60
                    }}
                    events={EVENTS}

                   

                    fields={[
                        {
                            name: "job_applicant",
                            type: "input",
                            default: "job Applicant",
                            config: { label: "job Applicant", multiline: true, rows: 1 }
                        },
                    ]}

                    viewerExtraComponent={() => {
                        return (
                            <>
                                <div className="redirect_div">
                                    <span>Redirect to Interview profile?</span>
                                    <Link to="/recruiting/interviewspaceprofile"><button>Yes</button></Link>
                                    
                                </div>
                            </>
                        )
                    }}



                />

            </div>


        </>

    )
}

export default Schedulera
