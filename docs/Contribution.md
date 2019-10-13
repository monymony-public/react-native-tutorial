---
title: Contribution
parent: Home
# nav_order: 2
has_children: false
---

# How To Contribute

This repo contains react native projects and documentation powering the [React Native Tutorial](https://github.com/jeffgukang/react-native-tutorial/).

## Getting started

### Prerequisites

1.  Git
1.  Node: install version 8 or greater.
1.  Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/). (needs 1.5 or greater).
1.  A fork of the repo (for any contributions).
1.  A clone of the `react-native-tutorial` repo.

### Docs

1.  `cd docs` to go into the documents of the project.

## Running locally

Clone or copy the repository from [React Native Tutorial](https://github.com/jeffgukang/react-native-tutorial/).

### Jekyll Webpage

We recommend using Bundler to install and run Jekyll. Bundler manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs. To install Bundler, you must install Ruby.
[Github Official](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll)

1. Install bundler
  - `gem install bundler`
1. Install dependencies
  - `bundle install`
1. Change theme for local
  - Change `remote_theme: pmarsceill/just-the-docs` to `theme: just-the-docs` in `_config.yml`.
1. Run local Jekyll
  - `bundle exec jekyll serve`
1. Preview your local Jekyll site in your web browser 
  - `http://localhost:4000`


### Run Example Projects

1. `cd Examples/example-name`
1. `yarn` # Install dependencies
1. `yarn start`

## Contributing

### Create a branch

1.  `git checkout master` from any folder in your local `react-native-tutorial` repository.
1.  `git pull origin master` to ensure you have the latest main code.
1.  `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch.

### Make the change

1.  Follow the "Running locally" instructions.
1.  Change and save the files.
1.  Run `yarn prettier` to ensure your changes are consistent with other files in the repo.
1.  Change /docs if you need.

1.  If you want to contribute related to theme, follow the [just-the-docs](https://pmarsceill.github.io/just-the-docs/) theme. 

### Test the change

1.  If possible, test any visual changes in all latest versions of simulators or devices.

### Push it

1.  Run `yarn prettier` to ensure your changes are consistent with other files in the repo.
1.  `git add . && git commit -m "My message"` (replacing `My message` with a commit message, such as `[show-me-the-coin] Update header style`) to stage and commit your changes.
1.  `git push my-fork-name the-name-of-my-branch`
1.  Go to the [react-native-tutorial repo](https://github.com/jeffgukang/react-native-tutorial) and you should see recently pushed branches.
1.  Follow GitHub's instructions.
1.  If possible, include screenshots of visual changes.

### Examples

Example projects are following [react-native-eslint-prettier-starter](https://github.com/JeffGuKang/react-native-eslint-prettier-starter) setup for linting.

---

## License

React Native Tutorial is [Creative Commons licensed](https://jeffgukang.github.io/react-native-tutorial/LICENSE).
