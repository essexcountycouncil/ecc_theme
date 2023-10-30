# ecc_theme_intranet

This is the ecc_theme a place for all the custom css, templates and layouts for Essex County Councils Local Intranet Drupal public website.

Code shared between the two sites are in this theme with custom code in the individaul themes which are sub-themes (which inherit from) of this one.

## Theme Heirarchy

                                    *ecc_theme_intranet*
stable9 > localgov_base > ecc_theme >

                                    ecc_theme_gov

## CSS

Create new css files in the css directory. Create a library with the path and weight to the new file in the ecc_theme_intranet.libraries.yml and then register the new library in the ecc_theme_intranet.info.yml file

    - css/variables_intranet
    - css/branding
    - css/buttons
    - css/footer
    - css/forms
    - css/header
    - css/hero
    - css/layout
    - css/main_menu
    - css/media_with_text
    - css/news
    - css/search
    - css/service_cta_block

## Templates

    - templates/content/node--localgov-news-article--card.html.twig

    - templates/layout/html.html.twig
    - templates/layout/page.html.twig
    - templates/layout/region.html.twig

    - templates/paragraphs/paragraph--localgov-banner-primary.html.twig

## Repositories and installing

**TODO**
