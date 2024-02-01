# ecc_theme

This is the ecc_theme a place for all the shared css, templates and layouts for Essex County Councils Local Gov Drupal intranet and public websites.

Code shared between the two sites are in this theme with custom code in the individaul themes which are sub-themes (which inherit from) of this one.

## Theme Hierarchy

                                    ecc_theme_intranet
stable9 > localgov_base > **ecc_theme** >

                                    ecc_theme_gov

## CSS

    - css/ecc-shared/variables_shared
    - css/ecc-shared/accordion
    - css/ecc-shared/alerts
    - css/ecc-shared/blockquote
    - css/ecc-shared/call_out
    - css/ecc-shared/contact
    - css/ecc-shared/cookies
    - css/ecc-shared/events
    - css/ecc-shared/fonts
    - css/ecc-shared/footer
    - css/ecc-shared/forms
    - css/ecc-shared/guide
    - css/ecc-shared/headings
    - css/ecc-shared/hero
    - css/ecc-shared/inset
    - css/ecc-shared/layout
    - css/ecc-shared/link_block
    - css/ecc-shared/media_with_text
    - css/ecc-shared/nav
    - css/ecc-shared/news
    - css/ecc-shared/pagination
    - css/ecc-shared/responsivness
    - css/ecc-shared/services
    - css/ecc-shared/sidebar
    - css/ecc-shared/step_by_step
    - css/ecc-shared/tables
    - css/ecc-shared/video

Create new css files in the css/ecc_shared directory. Create a library with the path and weight to the new file in the ecc_theme.libraries.yml and then register the new library in the ecc_theme.info.yml file

## Layouts

    - layouts/autogrid
    - layouts/ec-autogrid-25-25-50
    - layouts/ec-autogrid-50-50-c-50-50
    - layouts/the_center

Create new layouts in the layouts directory and register them in the ecc_theme.layouts.yml file

## Templates

    - templates/blocks/guides-prev-next-block.html.twig
    - templates/blocks/localgov-alert-banner.html.twig

    - templates/content/node--localgov-subsites-page--full.html.twig

    - templates/views/views-view-list--localgov-step-by-step-navigation--prev-next.html.twig

## Repositories and installing

**TODO**
