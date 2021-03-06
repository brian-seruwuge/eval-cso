[![CircleCI](https://circleci.com/gh/freelyformd/eval-cso.svg?style=svg)](https://circleci.com/gh/freelyformd/eval-cso)

# Frontend for customer service officer evaluation tool

## Installation and setup

Run `npm install` to install dependencies (prefer npm to yarn)
Run `npm start` or `npm run dev` to start application, by default port 3000 is used.
Run `npm run storybook` to view component storybooks.

## development guidelines

Create a storybook for every new component. If you find yourself writing a component whose parts can be
re-used in other components, extract those bits into a new component.

Container package contain redux High order components or API consuming components.

Prefer to write tests where possible for complex components that consume API data. (This maybe relaxed due to time limit issues)

Ensure that your code is well typed where possible.

## Tool / technologies used

- Emotion for JS in CSS styling
- Storybook
- Next.js
- storybook
- Semantic-ui

## Gotchas

- core-js is required by storybook as a peer dev-dependencies [see](https://github.com/storybooks/storybook/issues/3805)
