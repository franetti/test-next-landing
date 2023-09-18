export type HelpCenterType = {
  title: string,
  questions: { question: string, answer: string }[],
};

export const HelpCenter: HelpCenterType[] = [
  {
    title: "What is Extra",
    questions: [
      {
        question: "What is Extra?",
        answer:
          "Extra is an app marketplace for shift-based jobs, where employers post offers regardless of the forecast, and workers apply for the offers they prefer. At the moment, Extra only operates in Miami.",
      },
      {
        question: "Who is Extra for?",
        answer: ` 
                Extra is intended for any business and candidate who is legally entitled to work. The most frequent job listings in the app are as follows:<br><br>
                FRONT:<br>
                Bartender /a<br>
                Barback <br>
                Concession stand worker<br>
                Counter Staff / Cashier <br>
                Custodian/clerk - Concierge/Office Clerk<br>
                Food runner - Food Service Assistant<br>
                Host - Hostess<br>
                Laundry attendant <br>
                Servers <br>
                Pool attendant -<br>
                Wayfinder - Orientation Assistant<br><br>
                BACK:<br>
                Barback - Bar Assistant<br>
                Busser - Waiter's Helper<br>
                Cleaner / Janitor <br>
                Cook <br>
                Dishwasher <br>
                Food runner - Food Service Assistant<br>
                Housekeeper - Cleaning Manager<br>
                Inventory counter - Inventory counter <br>
                Laundry attendant<br>
                Line Cook<br>
                Packaging assistant <br>
                Picker/Packer <br>
                Pool attendant <br>
                Prep Cook <br>
                Wayfinder - Orientation Assistant<br><br>
                PHYSICALLY DEMANDING:<br>
                Cleaner / Janitor<br>
                Custodian/clerk <br>
                Event set up & take down - Event set up & dismantling<br>
                Material handler<br>
                Packaging assistant<br>
                Picker/Packer <br>
                Pool attendant <br>
                Stagehand - Stage Assistant<br><br>
                LICENSED:<br>
                Car driver - Automobile driver<br>
                Forklift driver <br>
                Line Cook<br>
                Prep Cook <br>
                Truck loader <br>
                Truck driver <br>
                `,
      },
      {
        question: "What is the employment relationship like?",
        answer:
          "Extra is intended for candidates who have the W9 form that allows them to work autonomously. The employment relationship has a beginning and an end between the business that selects the candidate and the candidate.",
      },
      {
        question: "Where is it available?",
        answer: "Extra is only operating in Miami at the moment.",
      },
      {
        question: "Review System",
        answer:
          "Extra has a system of reviews for both parties, in terms of experience during the shift as well as soft skills. We believe that transparency is the best tool to select job offers and clients.",
      },
      {
        question: "Is there a limit to post job offers?",
        answer: "There is no limit to the number of job offers per business.",
      },
      {
        question: "Is there a limit to the number of shifts I can work?",
        answer: "There is a limit of 36 hours per week.",
      },
      {
        question: "How do shifts work?",
        answer:
          "The clock-in, or start of shift, is performed by the employer once the candidate arrives at the business at the agreed time. The clock-out, or end of shift, is performed by the employee once the shift is over. In the event of a discrepancy between the parties, the Extra team will be available to provide a quick solution.",
      },
      {
        question: "Cancellation policy ",
        answer:
          "Extra values the responsibility between the parties in order to comply with the agreement, as well as the positive experience during use. That is why we have a cancellation policy designed for both user profiles.",
      },
      {
        question:
          "What if the job offer requires additional equipment, uniform or considerations?",
        answer:
          "In the event that the offer requires the candidate to meet certain language, presence, uniform or safety equipment requirements, this must be included in the offer and the employee will see this as a requirement for the application.",
      },
    ],
  },
  {
    title: "Labor relations, commitments and responsibilities",
    questions: [
      {
        question: "How do I ensure that candidates are legally able to work?",
        answer:
          "While the contracting methodology is an employment relationship with a freelancer, Extra takes care of insurance and liability for the peace of mind of both the employee and the contractor.",
      },
      {
        question: "Is background check performed?",
        answer:
          "Yes, it is done by the Extra team with the prior consent of the worker.",
      },
    ],
  },
  {
    title: "Method of payment and collection",
    questions: [
      {
        question: "What do I need to post a job?",
        answer:
          "You will have to create a profile where they will complete the information of your business. It is a simple and fast process, remember that you must have a credit card to move forward.",
      },
      {
        question: "What do I need to apply for a job offer?",
        answer:
          "To apply for a job offer you will need to have completed the registration of your profile. Each job offer usually has its own characteristics and it is important to see if you meet all the requirements. Remember that some offers usually have special requests, it is important that you fulfill those requests in order to apply. The employer will use this information to select the candidate among all the applicants that best suits their needs.",
      },
      {
        question: "How do I pay for the covered shift?",
        answer:
          "The amount to be charged for a shift performed is composed of the agreed price for the hours worked and the corresponding commission of 30% over the previous value. This will be effective once the worker performs the clock-out.",
      },
      {
        question: "How do I get paid for the shift worked?",
        answer:
          "Extra will credit the bank account entered in your profile with the corresponding amount for the shift performed. In case of cancellation by the business, you will be charged a proportional amount corresponding to the time of anticipation of the appointment.",
      },
      {
        question: "How long does it take to collect the shift payment?",
        answer:
          "The accreditation is instantaneous once the clock-out is done. The amount of the shift is composed of the agreed price for the hours worked.",
      },
    ],
  },
  {
    title: "Business",
    questions: [
      {
        question: "Liability - insurances - background check",
        answer:
          "Although the employment relationship is not established with Extra and is directly with the candidate, we make sure that you have the peace of mind that we take care of the insurance and liability of the candidates for the duration of the shift.",
      },
      {
        question: "How to register the business?",
        answer:
          "You will have to create a profile where they will complete the information of your business. It is a simple and fast process, remember that you must have a credit card to move forward.",
      },
      {
        question: "How do I post a job?",
        answer:
          "The offer generation process is very simple. You must complete the description of the position you need, the schedule, the hiring conditions and if there are any special requirements. Once the offer is posted, candidates will be able to view it and apply.",
      },
      {
        question: "How do we ensure worker quality?",
        answer:
          "Our scoring system seeks not only to qualify the fulfillment of the agreement but also to contemplate the totality of aspects that make up a good work experience. At the end of each shift, both parties rate each other. As an employer, you will rate the performance of the chosen candidate and you will also be able to highlight his or her soft skills if warranted. In each applicant's profile, you will be able to review the consolidated score composed by the combination of the historical average and that of the last ten (10) jobs.",
      },
      {
        question: "How to choose a candidate?",
        answer:
          "Once your offer is visible in the app, you will start receiving applications from candidates. You will be able to view the applications of each of them within the app and you will be able to see their reviews and their outstanding soft skills. You will be able to select the candidate of your choice at any time.",
      },
      {
        question: "What happens once the candidate is chosen?",
        answer:
          "Once the worker and the corresponding shift have been confirmed, a chat will be opened between the two to facilitate coordination. Then, the only thing left to do is to wait for their arrival. Remember that when the shift approaches, the platform will progressively confirm their attendance. In this way, we will always have updated information and will have a margin of action to fulfill the shift of your business in case of an emergency or unexpected event.",
      },
      {
        question: "How to review a nomad?",
        answer:
          "When the shift is over you will be able to leave a review of your experience with the candidate. There you will be able to rate from 1 to 5 stars their performance in the role and then you will be able to highlight any soft skill that you liked in their profile.",
      },
      {
        question: "How do I communicate with the candidate I have chosen?",
        answer:
          "Once the worker and the corresponding shift have been confirmed, a chat will be opened between the two to facilitate coordination. Then, the only thing left to do is to wait for their arrival. Remember that when the shift approaches, the platform will progressively confirm their attendance. In this way, we will always have updated information and will have a margin of action to fulfill the shift of your business in case of an emergency or unexpected event.",
      },
      {
        question: "What happens if I have a problem during the shift?",
        answer:
          "You will be able to access our support channel to tell us what happened and we will be able to provide you with a quick response or solution.",
      },
      {
        question: "How do I increase the number of applicants for my offer?",
        answer:
          "If you feel that you are not receiving the volume of candidates you need, we advise you to review the forecast with which you are making the offer or adjust the amount offered for the shift.",
      },
      {
        question: "What happens if I cancel the shift I proposed?",
        answer:
          "At Extra we work to meet our commitments. That is why we have a cancellation policy for candidates and employers.Here is the cancellation policy for businesses:",
      },
      {
        question:
          "What if I need special requirements for candidates (certifications, uniform, tattoos etc. etc.)",
        answer:
          "If your offer requires the candidate to meet certain language, presence, uniform or safety equipment requirements, you can include this in the offer and the employee will see this as a requirement for the application.",
      },
    ],
  },
  {
    title: "Nomad",
    questions: [
      {
        question: "Liability - insurances - background check",
        answer:
          "Although the contracting methodology is that of an employment relationship with a freelancer, Extra takes care of insurance and liability so that you can perform your shift with peace of mind and safety.",
      },
      {
        question: "How to register as a nomad?",
        answer:
          "In just two minutes you can create your Nomad profile. We will ask you: Form W9 Personal contact information. Presentation video telling about your work experience. It will be in your profile and will be shared with the employer when you apply for an offer. Your bank account information to receive payments. Social Security Number and Photo of the front of your ID or front and back of your Green Card/Work Permit (depending on your residency status) Attach your background check ",
      },
      {
        question: "How do I apply for a job offer?",
        answer:
          "To apply for a job offer you will need to have completed your profile registration. Each job offer usually has its own characteristics and it is important to see if you meet all the requirements. Remember that some offers often have special requests such as uniforms, equipment or language requirements, it is important that you meet these requests in order to apply. The employer will use this information to select the candidate among all the applicants that best suits their needs.",
      },
      {
        question: "How to review a store?",
        answer:
          "When the shift is over you will be able to leave a review of your experience with the business. There you will be able to evaluate from 1 to 5 stars rating your experience.",
      },
      {
        question: "How to confirm your shift?",
        answer:
          "Once the store has chosen you for the shift, an internal chat will be opened between both parties. From the extra team, we will contact you within 24 hours to reconfirm the shift. Remember that if you do not reconfirm within 4 hours before the start of the shift, the shift will be canceled.",
      },
      {
        question: "How do I contact the location where I will be working?",
        answer:
          "Once the shift is confirmed, an internal chat will be opened between the two. We suggest that all conversations remain within the chat to be able to report them in case of any inconvenience.",
      },
      {
        question: "What happens if I have a problem during the shift?",
        answer:
          "You will be able to access our support channel to tell us what happened and we will be able to provide you with a quick response or solution.",
      },
      {
        question: "How do I get accepted on more applications?",
        answer:
          "If you feel that you are not being chosen in many offers, don't worry. It is important to take care of your score but don't forget that it is composed of a historical average and the score of your last 10 offers. We recommend you to apply for shifts that have short notice or an unconventional schedule in order to raise your star rating and increase your selection percentage.",
      },
      {
        question: "What happens if I cancel the shift I requested?",
        answer:
          "At Extra we work to meet our commitments. That is why we have a cancellation policy for candidates and employers.",
      },
      {
        question: "What if you have trouble starting shit?",
        answer:
          "You will be able to access our support channel to tell us what happened and we will be able to provide you with a quick response or solution.",
      },
      {
        question: "How do I know if I need any particular equipment?",
        answer:
          "In case the offer requires the candidate to meet certain conditions of language, presence, uniform or safety equipment, it should be included in the offer and you should see this as a requirement for your application.",
      },
    ],
  },
  {
    title: "Personal goals",
    questions: [
      {
        question: "What is it?",
        answer:
          "It is an app tool available in your profile to boost your personal growth. You will be able to set specific goals (money or shifts) and a period of time to achieve them, as well as industries of interest so we can suggest personalized job offers.",
      },
    ],
  },
];
