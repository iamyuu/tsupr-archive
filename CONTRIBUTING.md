# Contributing Guide

**PRs are welcome!** You noticed a bug, a possible improvement, or whatever? Any help is always appreciated, so don't hesitate to open one [issues](https://github.com/iamyuu/tsupr/issues)!

Before submitting your contribution, please make sure to take a moment and read through the following guide:

## Set up the local development environment

This repo is a monorepo using pnpm workspaces. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io).

Recommended to installing [ni](https://github.com/antfu/ni) to help switch between repos using different package managers. `ni` also provides the handy `nr` command which running npm scripts easier:

- `ni` is equivalent to `pnpm install`
- `nr test` is equivalent to `pnpm run test`

To develop and test `tsupr` package:

1. Fork the `tsupr` repository to your own GitHub account and then clone it to your local device.

2. Ensure using the LTS version Node.js (16.x)

3. `tsupr` uses pnpm v7. If you are working on multiple projects with different versions of pnpm, it's recommended to enable [Corepack](https://github.com/nodejs/corepack) by running `corepack enable`.

4. Check out a branch where you can work and commit your changes:

```shell
git checkout -b my-awesome-branch
```

5. Run `pnpm i` in `tsupr`'s root folder

6. Run `pnpm run dev` to build sources in watch mode

7. Run `pnpm run test` to run tests

## Commands

- `nr dev`: Start the development environment.
- `nr play`: Starts a dev server for the playground. The code is usually under `playground/`.
- `nr build`: Build the project for production. The result is usually under `dist/`.
- `nr lint`: Lint the code using [ESLint](https://eslint.org).
- `nr test`: Run the tests using [Vitest](https://vitest.dev).
