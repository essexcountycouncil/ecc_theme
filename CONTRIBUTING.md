# CONTRIBUTING

## Using this repository

The themes in this repository are intended to be used with:
- [Essex public website](https://gitlab.nomensa.com/essex-county-council/essex-gov-uk-drupal/)
- [Essex intranet website](https://gitlab.nomensa.com/essex-county-council/essex-intranet-drupal)

Running `composer install` will install this repository in the correct location - `web/themes/contrib/ecc_theme`

This will only install the files and not the `.git` folder, which is needed for committing changes.
There are many ways around this, one is to delete this folder and install with `--prefer-install=source` option:
```
rm -rf web/themes/contrib/ecc_theme
ddev composer require essexcountycouncil/ecc_theme --prefer-install=source
```
(Or similar if not using DDEV.)

## Development lifecycle

### Update this repository
- Make changes to the base theme or project theme
- Test the changes on one or both project websites
- Manually run linting (@todo automate linting)
- Commit the changes to a new feature or bugfix branch
  - Prefix the commit message with a Jira number e.g. `LP-99: Some change`
- Create a pull request to the _main_ branch
- Ask another developer to review the PR
- When approved, merge the PR
- Create a new tag and release
  - Tags are usually an increment on the patch e.g. `1.0.10` to `1.0.11`

### Update both website projects to use the new tag
- Create a new branch from _develop_

  `ddev composer require essexcountycouncil/ecc_theme --prefer-install=source`
- Commit the change to composer.lock
- Create a pull request to the _develop_ branch
- Ask another developer to review the PR (should be trivial but is required)
- When approved, merge the PR, triggering a deployment to Dev environment

## Coding standards

CSS and JavaScript must meet Drupal coding standards.

Use `npm start` to run linting. This uses the Drupal core file [.eslintrc.json](https://git.drupalcode.org/project/drupal/-/blob/10.2.x/core/.eslintrc.json), 
and depends on this package being in a Drupal project in the themes/contrib 
folder.