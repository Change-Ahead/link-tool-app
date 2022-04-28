import {Question} from "./types/Question";

export const questions: Question[] = [
    {id: "housing", name: "Housing", link: "/housing", checkboxes: ["Social", "Private", "Shelter"]},
    {id: "well-being", name: "Well Being", link: "/well-being", checkboxes: ["Mental Health", "Physical Health", "Spiritual", "Social", "Learning", "Giving"]},
    {id: "employment", name: "Employment", link: "/employment", checkboxes: ["Part Time", "Full Time", "Apprentices", "Volunteering"]},
    {id: "essentials", name: "Essentials", link: "/essentials", checkboxes: ["Clothing", "Food", "Household Stuff", "Personal Identification Documents", "Personal Hygiene", "Tool Kits", "Electronics", "Appliances"]},
];

export const cloudflareWorkerBaseUrl = "https://api-hook-production.tech9082.workers.dev";
export const mapsKey = "AIzaSyBxz1H9IOMPSEBP2JKuC2kIka6pL-j1rVs"; // Looks scary but it's supposed to be embedded in the HTML anyway so it's not secret