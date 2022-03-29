import React from 'react'
import {
    barbara3,
    unifiedMp4
} from '../../img/index'
import { v4 as uuid } from 'uuid'

const articles = [
    {
        title: "Barbara Lempereur, BS, UTP",
        text: [
            <div key={uuid()}>
                <p>
                    Barbara Lempereur, BS, UTP, brings over 20 years of healing experience as a Reiki Master, Yuen Energetics practitioner, and Unified Therapy™ Instructor and Practitioner. She graduated Magna Cum Laude from Kaplan University with a Bachelor of Science degree in Psychology.
                </p>
                <p>
                    She studied Unified Therapy™ under Dr Paul Canali, the founder of Unified Therapy™ and worked as a Therapist at the Evolutionary Healing Institute since 2011. Barbara became a Unified Therapy™ Healing Instructor when we began conducting our Unified Healing Retreat Seminars in 2017.
                </p>
                <p>
                    Now located in Beaufort, SC, Barbara has her own healing practice and continues to collaborate with Dr Paul along with local healers and practitioners.
                </p>
                <p>
                    During the pandemic, Barbara's unique talents and skills allowed her to to successfully incorporate Unifed Therapy™ sessions using Zoom.
                </p>
                <p>
                    Barbara is passionate about helping people to heal holistically by identifying the mind-body connection. A devoted student of life, she is always learning new ways to heal, connect, and rebalance.
                </p>
            </div>
        ],
        img: barbara3,
        type: "left"
    },
    {
        text: [
            <div key={uuid()}>
                <p>
                    Unified Therapy™ has dual purposes – one that is designed therapeutically for clients and the other that is designed for teaching healthcare professionals across multiple disciplines. It can be integrated with and complements other therapy treatments including psychotherapy.
                </p>
                <p>
                    This Unified Theory incorporates an interdisciplinary view aimed at finding the convergence (consilience) among independent fields to enable a unity of knowledge to emerge. An interdisciplinary approach bridges these separations and enables us to unite the healing arts and sciences into a new common language so that we may address the etiology or cause of conditions rather than simply managing and treating symptoms.
                </p>
            </div>
        ],
        video: unifiedMp4,
        type: "video-alt"
    },
    {
        title: "The Healing Power of the Body",
        text: [
            <div key={uuid()}>
                <p> 
                    Barbara talks with Meg Narco about the Unified Therapy™ Experience.
                </p>
                <p>
                    Everything we need is already there because it’s an internal “there”, not a material "out there".
                </p>
                <p>
                    When we chase outside of ourself, we lose ourself.  When we turn inward, we awaken.
                </p>
                <p><em>
                    “Trauma has the potential to be one of the most significant forces for psychological, social, and spiritual awakening and evolution.  How we handle trauma (as individuals, communities, and societies) greatly influences the quality of our lives.  It ultimately affects how or even whether we will survive as a species.”
                </em></p>
                <p>
                    ~ Peter Levine, PhD
                </p>
            </div>
        ],
        video: "https://www.youtube.com/embed/5Pfnju9t5Vc",
        type: "video"
    }
]

export default articles