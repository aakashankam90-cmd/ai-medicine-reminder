# Development Rules

## Team

Member 1 → Frontend
Member 2 → Backend

## Git Rules

1. Never work directly on main.
2. Create a feature branch for each feature.
3. Pull the latest main before starting new work.
4. Make small commits.
5. Use meaningful commit messages.
6. Push completed work to GitHub.
7. Use Pull Requests to merge features into main.

## Coding Rules

1. Follow the existing project structure.
2. Do not change another member's code without discussion.
3. Do not introduce unnecessary libraries.
4. Keep code simple and readable.
5. Use environment variables for secrets.
6. Never commit .env files.
7. Test every feature before pushing.
8. Do not duplicate existing functionality.

## AI Rules

1. ChatGPT must follow the project documentation.
2. ChatGPT must not change architecture without team approval.
3. ChatGPT should explain changes before major implementation.
4. ChatGPT should modify only necessary files.
5. Never blindly copy AI-generated code.
6. Test all AI-generated code.

## Healthcare Safety

The application is a healthcare support system.

The system must not:
- Diagnose diseases
- Prescribe medicines
- Change medication dosage
- Replace doctors

AI features should provide summaries, trends, and supportive information only.