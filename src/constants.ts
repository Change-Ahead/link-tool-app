import {Question} from "./types/Question";

export const questions: Question[] = [
    {id: "housing", name: "Housing", link: "/housing", checkboxes: ["Social", "Private"]},
    {id: "well-being", name: "Well Being", link: "/well-being", checkboxes: ["Mental Health", "Physical Health"]},
    {id: "employment", name: "Employment", link: "/employment", checkboxes: ["Part Time", "Full Time", "Apprentices", "Volunteering"]},
    {id: "essentials", name: "Essentials", link: "/essentials", checkboxes: ["Clothing", "Food", "Household Stuff"]},
];

export const cloudflareWorkerBaseUrl = "https://api-hook-production.tech9082.workers.dev";