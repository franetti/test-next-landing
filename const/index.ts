export type InfoType = { index:number, title:string, desc:string};
type StepInfoType = { business: InfoType[]; worker: InfoType[] };

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