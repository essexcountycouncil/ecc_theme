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

## Developers

Most changes should be made in the shared theme so that they will cascade to the two sites.

Components and utilities have been separated out into smaller files to make them easier to find and deal with. In Drupal theming language, these are called 'libraries'. To add a new library, add the details to the `ecc_theme_gov.libraries.yml` file (or the equivalent in the Gov or Intranet theme if the file is just for use in that theme) and then reference it in the `ecc_theme_intranet.info.yml` (or equivalent).

To ensure consistent spacing between components when they are placed next to each other, it is recommended to avoid adding margins and padding directly to the components. There is a consistent padding to the top and bottom of all elements within a layout region. This will create equal spacing and maintain a vertical rhythm when the regions are adjacent to each other. This should work whatever type of layout the region is in.

```css
.layout__region>* {
    margin-bottom: initial;
    padding-top: var(--spacing-gap-smaller);
    padding-bottom: var(--spacing-gap-smaller);
}
```

## Custom Layouts

There are several custom layouts in the project. These layouts should be available to use within the Drupal 'page builder'. To make the layouts visible, they need to be added to the page section. If the layouts do not appear, navigate to `Paragraph Types > Page section > Edit > Behaviours > Layout Paragraphs` and select all the desired layouts.

- autogrid --
    Two columns that will have the same height on each row
- ec-autogrid-25-25-50 --
    Three Colums 25% 25% 50%
- ec-autogrid-50-50-c-50-50 --
    Two Columns 50% and 50%. Inside the first column, the component will take up two rows. Inside the second column, there are two rows, each with 50% height for two components.
- layout--twocol --
    A simplified version of the standard two column layout (template only)
- the_center --
    A layout to centre the region. The width is declared in the `--measure` CSS variable.
- threecol_33_34_33 --
    This layout divides the page into three columns. The first and third columns each take up 33% of the width, and the second column takes up the remaining 34%.
- twocol_bricks --
    This layout has rows that span 100% and then two columns of 50%, recurring twice before ending with a 100% row.

## Assets

Assets directory contains shared fonts, site avatars, and logos.
