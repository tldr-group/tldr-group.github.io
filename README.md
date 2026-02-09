# Tools for Learning, Design and Research

This repository is for the [tldr group website](https://tldr-group.github.io/)

## Content Management:

This repo has been written such that to add new content (publications, projects, team members), only the corresponding `.json` files need to be edited, commited and merged onto main.

### 1. Create a new branch

```bash
git checkout new_branch_name
```

### 2. Edit the respective `.json`, commit changes to your branch.

The `.jsons` are in the [`src/content`](src/content/) folder:

- New project: `src/content/projects.json`
- New paper/preprint: `src/content/publications.json`
- New team member: `src/content/team.json`
- New video: `src/content/videos.json`

When adding a new entry, **it must have all the fields (_e.g,_ "titles", "desc", ...) for that type of content** - look at other examples in the file for which fields are needed. If adding new images/gifs, these need to be placed in `public/content/images` and referenced correctly in the `.json`.

### 3. Merge the branch onto `main`

Do this either via the terminal or by creating a pull request on github.com. NB: this requires approval. Once merged, a GitHub Actions will trigger which will build and deploy the site. This typically takes ~10s

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

- add Sheares!
- add new publications: llama (rsc), evoxels, vulture, image rep (adv sci), hr-dv2 (adv int sys), BIL, prompt to protocol
- add new projects: BIL, isb/isg, vulutre, evoxels
