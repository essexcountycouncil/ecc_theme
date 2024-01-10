# Consolidated themes for Essex County Council

## ecc_theme

Subtheme of localgov_base.

This theme contains the shared files (css, templates and layouts) for the Essex County Council public (Gov) and Intranet sites

## ecc_theme_gov

The custom theme (css, templates and layouts) for the public website

## ecc_theme_intranet

The custom theme (css, templates and layouts) for the intranet website

## Themes

This repository, "ecc_theme", is a separate repository that contains the themes for both Essex County Council's public and intranet websites. There is a shared theme for both sites and also custom themes for each of the two ECC sites. Each theme is contained within its own subdirectory and includes its own CSS, templates, and layouts. Each of the two site themes (ecc_theme_gov and ecc_theme_intranet) are subthemes of the shared theme (ecc_theme)

The themes in this repository are used in the Drupal sites via Composer, a dependency management tool for PHP. Composer allows you to declare the libraries your project depends on, and it will manage (install/update) them for you.

In the context of these Drupal sites, the themes are treated as dependencies. They are listed in the `composer.json` file of the Drupal project, and Composer is used to pull these themes into the Drupal project.

When you run `composer install` or `composer update`, Composer will fetch the latest version of the themes from this repository and place them in the appropriate directory in the Drupal project (`themes/contrib`). This allows the Drupal sites to use the themes for rendering the website's appearance.
