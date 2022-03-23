import React from 'react'
import {
    flower2,
    zoom,
    therapy3
} from '../../img/index'
import { v4 as uuidv4 } from 'uuid'

const serviceList = [
    {
        icon: "fas fa-hand-holding-heart",
        img: flower2,
        title: "Unified Therapy™",
        description: [
            <p key={uuidv4()}>
                Unified Therapy™ is a safe, gentle, body~mind~brain treatment approach that is unique and highly interactive.
            </p>,
            <p key={uuidv4()}>
                The client in a supportive, healing environment that respects protective boundaries.  Sessions are customized to fit whatever you need on the day you come in for treatment.
            </p>,
            <p key={uuidv4()}>
                Treatment can be integrated with and complements other healing therapies including psychotherapy, chiropractic, and acupuncture.
            </p>
        ]
    },
    {
        icon: "fas fa-laptop",
        img: zoom,
        title: "Zoom Sessions",
        description: [
            <p key={uuidv4()}>
                Barabra successfully conducts remote Unified Therapy™ sessions on Zoom.
            </p>,
            <p key={uuidv4()}>
                So whether you are concerned with COVID protocols or are simply not in the Beaufort, SC area, you do not need to miss a session!
            </p>,
            <p key={uuidv4()}>
                When you book your appointment, Barbara will send you the Zoom link for your private session.  Please be sure your device (computer, tablet, phone) has audio and video capabilities.
            </p>
        ]
    },
    {
        icon: "fas fa-users",
        img: therapy3,
        title: "Unified Therapy™ Instructor",
        description: [
            <p key={uuidv4()}>
                The Unified Healing Retreat Seminars are powerfully transformative and interactive events to help support and deepen your understanding and experiences of your Unified Therapy™ process and help you connect more deeply with yourself and others that are on the self-exploration path.
            </p>,
            <p key={uuidv4()}>
                Retreats are held at the <a className="p-link" href="http://www.ehmiami.com/Education.html">Evolutionary Healing Institute</a>, in Miami, FL. These retreats are not only for individuals, but also for all healthcare practitioners, healers, trainers, and instructors from all disciplines.
            </p>
        ]
    }
]

export default serviceList