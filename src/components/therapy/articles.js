import React from 'react'
import {
    therapy1,
    barbara2,
    therapy3
} from '../../img/index'
import { v4 as uuid } from 'uuid'

const articles = [
    {
        title: "The Unified Therapy™ Process",
        text: [
            <div key={uuid()}>
                <p>
                    Unified Therapy™ is the only known toxic stress, anxiety, and pain therapy that allows active participation in the healing process. It incorporates multiple techniques based on a variety of therapies.
                </p>
                <p>
                    It not only helps you become more conscious and aware of the things that generate pain, but teaches you to release all kinds of physical and emotional pain, affecting all bodily systems, cells, and tissues; promoting physical and psychological healing.
                </p>
                <p>
                    Enjoy a peaceful and safe haven in this busy, hectic world. Privacy, comfort, and confidentiality are the essential elements of the environment in which your healing takes place.
                </p>
                <p>
                    Using a variety of specific and proven techniques to establish the brain, body, and mind connection, in a safe and sacred space, I will guide and support you to activate a natural, systemic Healing Reflex™.
                </p>
                <p>
                    Systemic means the whole body gets involved, including physical structures, (i.e. spine, muscles, tendons) hormones, neurotransmitters, and most importantly, the brain.
                </p>
                <p>
                    This is a key parameter in any significant healing of many diseases and health conditions including physical, psychological, and emotional conditions previously resistant to treatments.
                </p>
            </div>
        ],
        img: therapy1,
        type: "left"
    },
    {
        title: "Your Initial Consult and Session",
        text: [
            <div key={uuid()}>
                <p>
                    Your initial consult and session will consist of me reviewing and discussing your history and questionnaire forms as I explain my approach and what you may experience during your session. Unified Therapy™ is designed to adapt to and accommodate your specific condition.
                </p>
            </div>
        ],
        type: null
    },
    {
        title: "The Approach",
        text: [
            <div key={uuid()}>
                <p>
                    Unified Therapy™ is a safe, gentle, brain, body, and mind treatment approach that addresses the etiology of conditions rather than simply managing and treating symptoms.
                </p>
                <p>
                    Unified Therapy™ treatments are unique, highly interactive and take place in a chair, padded treatment table, or from the comfort of your home via Zoom. Sessions are customized to fit whatever you need on the day you come in for treatment.
                </p>
                <p>
                    Treatment can be integrated with and complements other healing therapies including psychotherapy, chiropractic, and acupuncture. Unified Therapy™ is beneficial to anyone as a single session but is most effective when done as a series. The number of sessions recommended will vary with each client’s health situation and personal goals.
                </p>
            </div>
        ],
        img: barbara2,
        type: "right"
    },
    {
        title: "The Enteric Brain Technique™",
        text: [
            <div key={uuid()}>
                <p>
                    Buried around your gut, or digestive system, is a second brain. The gut brain, also called the Enteric Brain, and has a mind of its own.
                </p>
                <p>
                    Functioning much like the brain in your head, this system is able to sense and receive impulses. It records and remembers experiences, and responds to all kinds of emotions. Its neurons, or nerve cells, are affected by the same neurotransmitters (tiny protein messengers), as your high brain.
                </p>
                <p>
                    The Enteric Brain Technique™, originated and developed by Dr Paul Canali, has allowed doctors, therapists, and patients to directly affect and balance the Autonomic Nervous System, or ANS, including the Enteric Brain for the first time by way of somatic or body centered therapy.
                </p>
                <p>
                    The Enteric Brain Technique™ is a method of somatic sensory input using specific touch and biofeedback in conjunction with focused concentration. This type of mindful attention increases Enteric Brain bi-directional communication and feedback.
                </p>
                <p>
                    Read more on the <a className="p-link" href="https://storage.googleapis.com/wzukusers/user-35866045/documents/42f7142275c046c582091a27f2407638/Canali%20-%20Enteric%20Brain%20Technique.pdf">Enteric Brain Technique</a>
                </p>
            </div>     
        ],
        img: therapy3,
        type: "left"
    },
    {
        title: "Adverse Childhood Experiences",
        text: [
            <div key={uuid()}>
                <p>
                    The Adverse Childhood Experiences (ACE) Study is one of the largest investigations ever conducted to assess associations between childhood maltreatment and later-life health and well-being. The findings suggest that certain childhood experiences are major risk factors for the leading causes of illness and death as well as poor quality of life in the United States.
                </p>
                <p>
                    It is becoming alarmingly clear that both physiological and psychological health and disease, whether we thrive or remain stuck in life and even our search for purpose, meaning, and spiritual quests, has more to do with our early childhood environment (including intergenerational toxic stress) and its effects on the brain than anyone could imagine.
                </p>
                <p>
                    The study’s researchers came up with an ACE Score to explain a person’s risk for chronic diseases. There has also been an important groundbreaking film created about ACEs, called, “Resilience: The Biology of Stress and the Science of Hope.”
                </p>
                <p>
                    To learn more about the ACE Study - an ongoing collaboration between the Centers for Disease Control and Prevention (CDC) and the Kaiser Permanente’s Health Appraisal Clinic in San Diego - click <a href="https://www.jimfazioib.com/ace-study/" target="_blank" rel="noreferrer">here</a>.
                </p>
            </div>
        ],
        video: "https://www.youtube.com/embed/YUSvN2fsatM",
        type: "video"
    }
]

export default articles