import React from 'react'
import {
    paul,
    genell
} from '../../img/index'
import { v4 as uuidv4 } from 'uuid'

const partnersList = [
    {
        img: paul,
        title: 'Dr Paul J Canali',
        site: "Evolutionary Healing Institute",
        url: "http://www.ehmiami.com/",
        text: [
            <p key={uuidv4()}>
                Dr Paul J Canali, the founder of Unified Therapy™, has been involved in the study of the human condition for over 30 years. He was a pioneer in the biopsychosocial model of disease and suffering and the intergenerational effects of toxic stress and trauma and how it affects the brain and body.
            </p>
        ]
    },
    // {
    //     img: './img/jim.jpg',
    //     title: 'Jim Fazio, LMT, CSI, UTP',
    //     site: "Integrative Bodywork, Inc.",
    //     url: "https://www.jimfazioib.com/",
    //     text: [
    //         <p>
    //             Jim Fazio, LMT, CSI, UTP, is a multi-disciplinary Neuromuscular and Myofascial Therapist who has been in private practice for over 26 years.
    //         </p>,
    //         <p>
    //             Jim has a wealth of clinical experience in a variety of medical settings including pain management, neurology, internal medicine, physical therapy, chiropractic, psychology, and a hospital-based fitness center.
    //         </p>
    //     ]
    // },
    {
        img: genell,
        title: 'Genell Crawford, LMT, UT',
        site: 'Be Well With Genell',
        url: 'https://www.instagram.com/bewellwithgenell/',
        text: [
            <p key={uuidv4()}>
                I help folks feel & perform their best through a simple, sustainable, no b.s. approach to nutrition & lifestyle.
            </p>
        ]
    }
]

export default partnersList