import { CategoryNode } from "./app-tree.component";

export const TREE_DATA: CategoryNode[] = [
    {
        name: "Productivity",
        children: [
            {
                name: "Task Management"
            },
            {
                name: "Note Taking"
            },
            {
                name: "Calendars"
            }
        ]
    },
    {
        name: "Entertainment",
        children: [
            {
                name: "Movies"
            },
            {
                name: "Music"
            },
            {
                name: "Games"
            }
        ]
    },
    {
        name: "Education",
        children: [
            {
                name: "Languages"
            },
            {
                name: "Courses"
            },
            {
                name: "Tools"
            }
        ]
    },
    {
        name: "Health",
        children: [
            {
                name: "Fitness"
            },
            {
                name: "Nutrition"
            },
            {
                name: "Mental Health"
            }
        ]
    },
    {
        name: "Finance",
        children: [
            {
                name: "Investing"
            },
            {
                name: "Budgeting"
            },
            {
                name: "Payments"
            }
        ]
    }
];
