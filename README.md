![logo](/src/assets/logo-bright.svg)

# Tools for Learning, Design and Research

This repository is for the tldr group website

The website can be found [here](https://tldr-group.github.io/)

## Content Management:

This repo has been written such that to add new content (publicatons, projects, team members), only the corresponding `.json` files need to be edited, commited and merged onto main.

1. Create a new branch

```bash
git checkout new_branch_name
```

2. Edit the `.json`, commit changes to your branch

3. Merge the branch onto `main`, either via the terminal or by creating a pull request on github.com. NB: this requires approval.

Check out `docs/` for explanations of how the website works!

## Installation:

1. install `nvm` & `yarn`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install 24
npm install --global yarn
```

2. install packages from root directory:

```bash
yarn install
```

3. run frontend

```bash
cd src/frontend
yarn start
```

## TODO:

- gha for deploys on merge to main

- add Sheares!
- add new publications: llama (rsc), evoxels, vulture, image rep (adv sci), hr-dv2 (adv int sys), BIL, prompt to protocol
- add new projects: BIL, isb/isg, vulutre, evoxels
