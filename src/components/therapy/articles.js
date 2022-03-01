import React from 'react'
import {
    therapy1,
    barbara2,
    therapy3
} from '../../img/index'
import { v4 as uuidv4 } from 'uuid'

const articles = [
    {
        title: "The Unified Therapy™ Process",
        text: [
            <p key={uuidv4()}>
                Unified Therapy™ is the only known toxic stress, anxiety, and pain therapy that allows active participation in the healing process. It incorporates multiple techniques based on a variety of therapies.
            </p>,
            <p key={uuidv4()}>
                It not only helps you become more conscious and aware of the things that generate pain, but teaches you to release all kinds of physical and emotional pain, affecting all bodily systems, cells, and tissues; promoting physical and psychological healing.
            </p>,
            <p key={uuidv4()}>
                Enjoy a peaceful and safe haven in this busy, hectic world. Privacy, comfort, and confidentiality are the essential elements of the environment in which your healing takes place.
            </p>,
            <p key={uuidv4()}>
                Using a variety of specific and proven techniques to establish the brain-body connection, in a safe and sacred space, Barbara guides and supports the client to activate a natural, systemic Healing Reflex™.
            </p>,
            <p key={uuidv4()}>
                Systemic means the whole body gets involved, including physical structures (i.e. spine, muscles, tendons) to hormones, neurotransmitters and most importantly, the brain.
            </p>,
            <p key={uuidv4()}>
                This is a key parameter in any significant healing of many diseases and health conditions including physical, psychological, and emotional conditions previously resistant treatments.
            </p>
        ],
        img: therapy1,
        type: "left"
    },
    {
        title: "Your Initial Consult and Session",
        text: [
            "Your initial consult and session will consist of your therapist reviewing and discussing your history and New Client questionnaire forms as she explains to you what will go on and what you may experience during your session.  Unified Therapy™ is designed to adapt to and accommodate your specific condition."
        ],
        type: null
    },
    {
        title: "The Approach",
        text: [
            <p key={uuidv4()}>
                Unified Therapy™ is a safe, gentle, body~mind~brain treatment approach that addresses the etiology of conditions rather than simply managing and treating symptoms.
            </p>,
            <p key={uuidv4()}>
                Unified Therapy™ treatments are unique, highly interactive and take place in a chair or on a padded treatment table - or from the comfort of your home via Zoom.
            </p>,
            <p key={uuidv4()}>
                The client is clothed and in a supportive, healing environment that respects protective boundaries. Sessions are customized to fit whatever you need on the day you come in for treatment.
            </p>,
            <p key={uuidv4()}>
                Treatment can be integrated with and complements other healing therapies including psychotherapy, chiropractic, and acupuncture. Unified Therapy™ is beneficial to anyone as a single session but is most effective when done as a series.
            </p>,
            <p key={uuidv4()}>
                The number of sessions recommended will vary with each client’s health situation and personal goals.
            </p>
        ],
        img: barbara2,
        type: "right"
    },
    {
        title: "The Enteric Brain Technique™",
        text: [
            <p key={uuidv4()}>
                Buried around your gut, or digestive system, is a second brain. The gut brain, also called the Enteric Brain, has a mind of its own.
            </p>,
            <p key={uuidv4()}>
                Functioning much like the brain in your head, this system is able to sense and receive impulses. It records and remembers experiences, and responses to all kinds of emotions. Its neurons, or nerve cells, are affected by the same neurotransmitters (tiny protein messengers), as your high brain.
            </p>,
            <p key={uuidv4()}>
                The Enteric Brain Technique™, originated and developed by Dr Paul Canali, has allowed doctors, therapists, and patients to directly affect and balance the Autonomic Nervous System, or ANS, including the Enteric Brain for the first time by way of somatic or body centered therapy.
            </p>,
            <p key={uuidv4()}>
                The Enteric Brain Technique™ is a method of somatic sensory input using specific touch and biofeedback in conjunction with focused concentration. This type of mindful attention increases body~brain and brain~Enteric Brain bi-directional communication and feedback.
            </p>,
            <p key={uuidv4()}>
                Read more on the <a className="p-link" href="https://storage.googleapis.com/wzukusers/user-35866045/documents/42f7142275c046c582091a27f2407638/Canali%20-%20Enteric%20Brain%20Technique.pdf">Enteric Brain Technique</a>
            </p>
            
        ],
        img: therapy3,
        type: "left"
    },
    {
        title: "Adverse Childhood Experiences",
        text: [
            <p key={uuidv4()}>
                The Adverse Childhood Experiences (ACE) Study is one of the largest investigations ever conducted to assess associations between childhood maltreatment and later-life health and well-being.
            </p>,
            <p key={uuidv4()}>
                The findings suggest that certain childhood experiences are major risk factors for the leading causes of illness and death as well as poor quality of life in the United States.
            </p>,
            <p key={uuidv4()}>
                It is becoming alarmingly clear that both physiological and psychological health and disease, whether we thrive or remain stuck in life and even our search for purpose, meaning, and spiritual quests, has more to do with our early childhood environment (including intergenerational toxic stress) and its effects on the brain than anyone could imagine.
            </p>,
            <p key={uuidv4()}>
                The study’s researchers came up with an ACE Score to explain a person’s risk for chronic diseases.
            </p>,
            <p key={uuidv4()}>
                There has also been an important groundbreaking film created about ACEs, called, “Resilience: The Biology of Stress and the Science of Hope.”
            </p>,
            <p key={uuidv4()}>
                To learn more about the ACE Study - an ongoing collaboration between the Centers for Disease Control and Prevention (CDC) and the Kaiser Permanente’s Health Appraisal Clinic in San Diego - click <a href="https://www.jimfazioib.com/ace-study/" target="_blank" rel="noreferrer">here</a>.
            </p>
        ],
        video: "https://www.youtube.com/embed/YUSvN2fsatM",
        type: "video"
    }
]

export default articles