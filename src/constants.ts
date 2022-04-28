import {Question} from "./types/Question";

export const questions: Question[] = [
    {id: "housing", name: "Housing", link: "/housing", checkboxes: ["Social housing", "Private landlords"]},
    {id: "well-being", name: "Well Being", link: "/well-being", checkboxes: ["Mental health", "Physical health"]},
    {id: "employment", name: "Employment", link: "/employment", checkboxes: ["Part time", "Full time", "Apprentices", "Volunteering"]},
    {id: "essentials", name: "Essentials", link: "/essentials", checkboxes: ["Clothing", "Food", "Household necessities"]},
];