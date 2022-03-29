import React from 'react'
import {
    paul,
    genell
} from '../../img/index'
import { v4 as uuid } from 'uuid'

const partnersList = [
    {
        img: paul,
        title: 'Dr Paul J Canali',
        site: "Evolutionary Healing Institute",
        url: "http://www.ehmiami.com/",
        text: [
            <div key={uuid()}>
                <p>
                    Dr Paul J Canali, the founder of Unified Therapy™, has been involved in the study of the human condition for over 30 years. He was a pioneer in the biopsychosocial model of disease and suffering and the intergenerational effects of toxic stress and trauma and how it affects the brain and body.
                </p>
            </div>
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
            <div key={uuid()}>
                <p>
                    Genell is passionate about helping others and LOVES to find simple ways to integrate well-being. She is a Pn-1 nutrition coach, strength coach, Girls Gone Strong Level-1 certified coach, and a licensed massage therapist. She is also passionate about applying her knowledge to supporting women in their unique needs throughout the various stages of life.
                </p>
            </div>
        ]
    }
]

export default partnersList