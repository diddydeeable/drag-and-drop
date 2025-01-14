import { Item } from "./types";

export const mockData: Item[] = [
  {
    id: 1,
    title: "Design homepage",
    description: "Create the wireframe and initial design for the homepage.",
    column: 0,
    position: 0,
    status: "todo",
  },
  {
    id: 2,
    title: "Fix login issue",
    description: "Investigate and resolve the login bug affecting some users.",
    column: 0,
    position: 1,
    status: "todo",
  },
  {
    id: 3,
    title: "Create API documentation",
    description: "Document the endpoints for the new payment system API.",
    column: 1,
    position: 0,
    status: "inprogress",
  },
  {
    id: 4,
    title: "Test registration form",
    description: "Run end-to-end tests for the new user registration flow.",
    column: 1,
    position: 1,
    status: "inprogress",
  },
  {
    id: 5,
    title: "Optimize database queries",
    description: "Improve query performance for fetching user data.",
    column: 2,
    position: 0,
    status: "complete",
  },
  {
    id: 6,
    title: "Prepare release notes",
    description: "Write up the release notes for the upcoming version.",
    column: 2,
    position: 1,
    status: "complete",
  },
  {
    id: 7,
    title: "Review PR #123",
    description: "Review the changes and provide feedback for PR #123.",
    column: 0,
    position: 2,
    status: "todo",
  },
  {
    id: 8,
    title: "Implement dark mode",
    description: "Add support for a dark mode theme to the UI.",
    column: 1,
    position: 2,
    status: "inprogress",
  },
  {
    id: 9,
    title: "Deploy staging environment",
    description: "Deploy the latest changes to the staging environment for QA.",
    column: 2,
    position: 2,
    status: "complete",
  },
  {
    id: 10,
    title: "Update onboarding flow",
    description: "Improve the onboarding flow for new users.",
    column: 0,
    position: 3,
    status: "todo",
  },
];
