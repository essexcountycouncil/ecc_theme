# ecc_theme_gov

This is the ecc_theme_gov a place for all the custom css, templates and layouts for Essex County Councils Local Gov Drupal public website.

Code shared between the two sites are in this theme with custom code in the individaul themes which are sub-themes (which inherit from) of this one.

## Theme Hierarchy

                                    ecc_theme_intranet
stable9 > localgov_base > ecc_theme >

                                    **ecc_theme_gov**

## CSS

Create new css files in the css directory. Create a library with the path and weight to the new file in the ecc_theme_gov.libraries.yml and then register the new library in the ecc_theme_gov.info.yml file

    - css/variables_gov
    - css/branding
    - css/buttons
    - css/cookies
    - css/header
    - css/hero
    - css/media_with_text
    - css/news
    - css/search
    - css/service_cta_block

## Templates

    - templates/content/node--grid-item.html.twig
    - templates/content/node--localgov-guides-overview--full.html.twig
    - templates/content/node--localgov-guides-page--full.html.twig
    - templates/content/node--localgov-newsroom--full.html.twig

    - templates/field/field--paragraphs-library-item--label--paragraphs-library-item.html.twig

    - templates/form/form-element-label--edit-data-use-policy.html.twig

    - templates/layout/header.html.twig
    - templates/layout/html.html.twig
    - templates/layout/page.html.twig
    - templates/layout/region.html.twig

    - templates/paragraphs/paragraph--localgov-banner-primary.html.twig

## Repositories and installing

**TODO**
