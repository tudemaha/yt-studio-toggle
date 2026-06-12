# Contribution Guide

Thank you for your interest in contributing to this project! Contributions are welcome and appreciated.

To make the contribution process smooth and consistent, please follow these guidelines.

## How Can I Contribute?

### 1. Reporting Bugs

- Search the issue tracker to see if the bug has already been reported.
- If not, create a new issue detailing:
  - Clear steps to reproduce the issue.
  - Expected vs. actual behavior.
  - Screenshots, console logs, or error messages.

### 2. Suggesting Enhancements

- Open an issue describing the proposed feature and why it would be beneficial.
- Provide examples or mockups if applicable.

### 3. Submitting Pull Requests (PR)

- Fork the repository and create your branch from `main`.
- Write clean, well-documented, and efficient code.
- Ensure that your changes do not introduce new regressions or console errors.
- Keep your PR description concise and document the changes clearly.

## Development Setup

1. Fork the repo and clone it locally:
   ```bash
   git clone https://github.com/your-username/yt-studio-toggle.git
   cd yt-studio-toggle
   ```
2. Make your code modifications.
3. Load the unpacked extension in Chrome via `chrome://extensions` pointing to your local folder.
4. Test your changes thoroughly on the YouTube Studio dashboard.

## Code Style & Guidelines

### JavaScript

- Use modern JavaScript features (ES6+).
- Use asynchronous APIs (like `await`/`async`) when interacting with `chrome.storage` or `chrome.scripting`.
- **Avoid performance bottlenecks:** Do not call async operations or chrome APIs directly in high-frequency events (like `MutationObserver` callbacks) without caching or safety checks.
- Document code components with clear JSDoc comments.
- Since TypeScript check-in is supported through VS Code JSDoc configuration, type cast variables using JSDoc where needed (e.g. `/** @type {HTMLInputElement} */`).

### CSS & Styling

- Keep CSS clean, scoped, and highly specific to prevent bleeding into other YouTube Studio elements.
- Use the `!important` flag only where strictly necessary to override YouTube's default styling.
- Follow the design system established in `popup.css` (e.g., matching red colors `#ff0000`, matching rounded corners `8px`, and smooth `0.15s ease` transitions).

### Commit Messages

Please refer to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) for your commits:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for style revisions (CSS/formatting changes)
- `refactor:` for code restructuring without changing functionality
