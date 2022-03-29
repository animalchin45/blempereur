import React from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const articles = [
    {
        title: "Welcome, I am glad you are here.",
        text: [
            <div key={uuid()}>
                <p>
                    For over 20 years, I have been helping people recover from pain, anxiety, sports and work-related injuries, the life-changing emotional assaults of childhood trauma, and to understand what healing really is. They become more confident, able to express themselves, and live their purpose.
                </p>
                <p>
                    We are not only physical beings but emotional and spiritual beings, and if we don’t heal the whole self, we pay the price in the form of chronic pain, anxiety, depression, dysfunctional relationships, lifelong feelings of general malaise, and even chronic diseases.  We promote health and wellness, not disease and illness, by activating the brain, body, and mind connection for healing.
                </p>
                <p>
                    I encourage you to look through my website to see how you can benefit from this therapy. We are not meant to heal alone.
                </p>
                <p>
                    In service and care,
                </p>
                <p>
                    Barbara
                </p>
            </div>
        ],
        type: null
    },
    {
        title: "Are You Experiencing Pain, PTSD, Anxiety or Repetitive Injuries?",
        text: [
            <div key={uuid()}>
                <p>
                    Are you tired of just managing your symptoms or are you dealing with unresolved illnesses? Have you ever wondered why your symptoms resist traditional and alternative treatment approaches and just never get any resolution? Then Unified Therapy™ is for you!
                </p>
                <p>
                    Research shows that unreleased pain, anxiety, toxic stress, trauma, and PTSD affects not only the body and the brain, but the ability to heal pain, repetitive injuries, anxiety, and even depression. It is one of the major foundations for illness and disease.
                </p>
            </div>
        ],
        type: null
    },
    {
        title: "How Can We Help You?",
        text: [
            <div key={uuid()}>
                <p>
                    Barbara uses a brain, body, and mind approach called Unified Therapy™ that activates a natural, Homeostatic Stress Releasing Healing Reflex™ that addresses the etiology, rather than simply managing and treating symptoms. It not only has the capacity to treat multiple conditions at once, but also prevents vulnerability to future occurrences. No single process, technique, or mindful practice could offer more.
                </p>
            </div>
        ],
        type: null
    },
    {
        title: "​How Is Unified Therapy™ Different from Other Healing Therapies?",
        text: [
            <div key={uuid()}>
                <p>
                    Unified Therapy™ is the only known toxic stress, anxiety, and pain therapy that allows active participation in the healing process and makes people conscious and aware of the things that generate pain. While a lot of modalities or techniques only deal with the physical or the psychological aspects to dampen symptoms, Unified Therapy™ incorporates multiple techniques based on a variety of therapies. This teaches you to release all kinds of physical and emotional pain to promote systemic healing
                </p>
                <p>
                    Developed by Dr Paul J Canali of the <a className="p-link" href="http://www.ehmiami.com/">Unified Healing Institute</a> in Miami, FL we have found that in addition to a <a className="p-link" href="https://storage.googleapis.com/wzukusers/user-35866045/documents/3d8e3484e0814873b11a711b2685dda8/Canali%20-%20ANS.pdf">dysregulated nervous system</a> and a high <a className="p-link" href="https://www.jimfazioib.com/ace-study/">ACE Score</a>. There are also Biopsychosocial factors that affect systemic healing. All factors must be addressed and Unified for genuine healing to take place.
                </p>
                <p>
                    For more information, please visit our <NavLink className="p-link" to="/newclients">New Clients</NavLink> page.
                </p>
            </div>
        ],
        type: null
    }
]

export default articles