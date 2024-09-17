# Contributing to TriScan

Contributions are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## House rules

- Before submitting a new issue or PR, check if it already exists in [issues](https://github.com/jsdhami/triscan/issues) or [PRs](https://github.com/jsdhami/triscan/pulls).
- GitHub issues: take note of the `🚨 needs approval` label.
  - **For Contributors**:
    - Feature Requests: Wait for a core member to approve and remove the `🚨 needs approval` label before you start coding or submit a PR.
    - Bugs, Security, Performance, Documentation, etc.: You can start coding immediately, even if the `🚨 needs approval` label is present. This label mainly concerns feature requests.
  - **Our Process**:
    - Issues from non-core members automatically receive the `🚨 needs approval` label.
    - We greatly value new feature ideas. To ensure consistency in the product's direction, they undergo review and approval.

## Priorities

<table>
  <tr>
    <td>
      Type of Issue
    </td>
    <td>
      Priority
    </td>
  </tr>
  <tr>
    <td>
      Minor improvements, non-core feature requests
    </td>
    <td>
      <a href="https://github.com/jsdhami/triscan/issues?q=is:issue+is:open+sort:updated-desc+label:%22Low+priority%22">
        <img src="https://img.shields.io/badge/-Low%20Priority-green">
      </a>
    </td>
  </tr>
   <tr>
    <td>
      Confusing UX (... but working)
    </td>
    <td>
      <a href="https://github.com/jsdhami/triscan/issues?q=is:issue+is:open+sort:updated-desc+label:%22Medium+priority%22">
        <img src="https://img.shields.io/badge/-Medium%20Priority-yellow">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      Core Features (Booking page, availability, timezone calculation)
    </td>
    <td>
      <a href="https://github.com/jsdhami/triscan/issues?q=is:issue+is:open+sort:updated-desc+label:%22High+priority%22">
        <img src="https://img.shields.io/badge/-High%20Priority-orange">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      Core Bugs (Login, Booking page, Emails are not working)
    </td>
    <td>
      <a href="https://github.com/jsdhami/triscan/issues?q=is:issue+is:open+sort:updated-desc+label:Urgent">
        <img src="https://img.shields.io/badge/-Urgent-red">
      </a>
    </td>
  </tr>
</table>

## Developing

The development branch is `main`. This is the branch that all pull
requests should be made against. The changes on the `main`
branch are tagged into a release monthly.

To develop locally:

1. [Fork](https://github.com/jsdhami/triscan/fork/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch:

   ```sh
   git checkout -b MY_BRANCH_NAME
   ```

3. Install pnpm:

   ```sh
   npm install -g pnpm
   ```

4. Install the dependencies with:

   ```sh
    pnpm install
   ```

5. Set up your `.env` file:

   - Duplicate `.env.example` to `.env.local`.
   - Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env` file.
   - For Authentication, Use Github 0Auth configuaration steps

6. Setup Node
   If your Node version does not meet the project's requirements as instructed by the docs, "nvm" (Node Version Manager) allows using Node at the version required by the project:

   ```sh
   nvm use
   ```

   You first might need to install the specific version and then use it:

   ```sh
   nvm install && nvm use
   ```

   You can install nvm from [here](https://github.com/nvm-sh/nvm).

7. Start developing and watch for code changes:

   ```sh
   pnpm dev
   ```

## Building

You can build the project with:

```bash
pnpm build
```

Please be sure that you can make a full production build before pushing code.

## Testing

More info on how to add new tests coming soon.


#### Resolving issues

## Linting

To check the formatting of your code:

```sh
pnpm lint
```

If you get errors, be sure to fix them before committing.

## Making a Pull Request

- Be sure to [check the "Allow edits from maintainers" option](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) while creating your PR.
- If your PR refers to or fixes an issue, be sure to add `refs #XXX` or `fixes #XXX` to the PR description. Replacing `XXX` with the respective issue number. See more about [Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).
- Be sure to fill the PR Template accordingly.
- Review [App Contribution Guidelines](./packages/app-store/CONTRIBUTING.md) when building integrations

## Guidelines for committing pnpm lockfile

Do not commit your `pnpm.lock` unless you've made changes to the `package.json`. If you've already committed `pnpm-lock.yaml` unintentionally, follow these steps to undo:

If your last commit has the `pnpm-lock.yaml` file alongside other files and you only wish to uncommit the `pnpm-lock.yaml`:

   ```bash
   git checkout HEAD~1 pnpm-lock.yaml
   git commit -m "Revert pnpm-lock.yaml changes"
   ```

_NB_: You may have to bypass the pre-commit hook with by appending `--no-verify` to the git commit
If you've pushed the commit with the `pnpm-lock.yaml`:

   1. Correct the commit locally using the above method.
   2. Carefully force push:

   ```bash
   git push origin <your-branch-name> --force
   ```

If `pnpm-lock.yaml` was committed a while ago and there have been several commits since, you can use the following steps to revert just the `pnpm-lock.yaml` changes without impacting the subsequent changes:

1. **Checkout a Previous Version**:
   - Find the commit hash before the `pnpm-lock.yaml` was unintentionally committed. You can do this by viewing the Git log:

     ```bash
     git log pnpm-lock.yaml
     ```

   - Once you have identified the commit hash, use it to checkout the previous version of `pnpm-lock.yaml`:

     ```bash
     git checkout <commit_hash> pnpm-lock.yaml
     ```

2. **Commit the Reverted Version**:
   - After checking out the previous version of the `pnpm-lock.yaml`, commit this change:

     ```bash
     git commit -m "Revert pnpm-lock.yaml to its state before unintended changes"
     ```

3. **Proceed with Caution**:
   - If you need to push this change, first pull the latest changes from your remote branch to ensure you're not overwriting other recent changes:

     ```bash
     git pull origin <your-branch-name>
     ```

   - Then push the updated branch:

     ```bash
     git push origin <your-branch-name>
     ```

Lastly, make sure to keep the branches updated (e.g. click the `Update branch` button on GitHub PR).
