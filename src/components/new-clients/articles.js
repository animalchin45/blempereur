import React from 'react'
import { flower3 } from '../../img/index'
import { v4 as uuid } from 'uuid'

const articles = [
    {
        title: "Welcome New Clients",
        subtitle: "We're not meant to heal alone",
        text: [
            <div key={uuid()}>
                <p>
                    I warmly welcome you to my healing practice!  I understand that choosing the right therapist and therapy can be a difficult decision and I invite you to review the information throughout my website to see if my practice is where you would like to take your next steps toward advancing your healing, growth, and consciousness.
                </p>
                <p>
                    With over 20 years in practice, I understand the importance of a therapeutic and safe relationship with your therapist. It is my goal to create that sacred healing space for you.
                </p>
                <p>
                    I invite you to call or email me so that I may understand your specific needs and goals, answer any questions and discuss the next steps in joining me in a therapeutic setting.
                </p>
                <p>
                    Thank you for trusting me with your health and healing process. I commend you for taking responsibility for your life and wellbeing.
                </p>
                <p>
                    The best compliment we can receive is a referral from you. I hope to shed light and hope on your life so that you will tell and help your friends as well.
                </p>
                <p>
                    I look forward to working with you.
                </p>
            </div>
        ],
        img: flower3,
        type: "left"
    }
]

export default articles