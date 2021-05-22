# designPatterns
This is a repository to learn design patterns.

0. Make environment.(You don't have to do it. if you do `yarn install`.)
# Install yarn.
npm install -g yarn

# Install Typescript and ESLint.
yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Create a file that allows you to see this repository.
touch .eslintrc.yml

# Install Prettier (a code formatter module).
yarn add -D eslint-config-prettier

# Install Jest (a unit test module).
yarn add -D jest eslint-plugin-jest ts-jest @types/jest

1. Do test.
source ~/.bash_profile
yarn test