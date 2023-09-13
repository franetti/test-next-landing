export type InfoType = { index:number, title:string, desc:string};
type StepInfoType = { business: InfoType[], worker: InfoType[] };

export const StepInfo: StepInfoType = {
    business: [
        {
            index:1,
            title: "Post the shift",
            desc: "Set date & time, duration, role, and hourly rate."
        },
        {
            index:2,
            title: "Post the shift",
            desc: "Set date & time, duration, role, and hourly rate."
        },
        {
            index:3,
            title: "Select a candidate",
            desc: "Base your decision on the review score and the video resume."
        }
    ],
    worker: [
        {
            index:1,
            title: "Become a Nomad",
            desc: "Fill a W9 from and upload a valid ID to work"
        },
        {
            index:2,
            title: "Scroll and apply",
            desc: "Chosose the offer that suits you best."
        },
        {
            index:3,
            title: "Cover the shift",
            desc: "Clock-out, rate the experience and the paid."
        }
    ]
}

export const Faqs = [
    {
        title: "I run a businees",
        desc: "The candidate pool within Extra undergoes a background check. This helps us determine if they are legally eligible to work in Miami. The payment will be debited from the credit card listed in the registration. The total shift amount plus Extra's 30% commission on the total value will be charged."                
    },
    {
        title: "I'm a Nomad",
        desc: " At the end of each shift, both parties rate each other. The employer will rate your performance and can also highlight soft skills. The scoring will be composed of a combination of the historical average and the last 10. Payment is made after 72 hours from the shift through a transfer to the account details provided during registration. The shift payment will be credited instantly to your personal balance on your profile. The total shift payment includes the hours worked and the agreed-upon value for them."
    },
    {
        title: "Insaurances and liabilitys",
        desc: "Although the employment relationship is not established with Extra and is directly with the candidate, we make sure that you have the peace of mind that we take care of the insurance and liability of the candidates for the duration of the shift."
    }
]