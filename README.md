# Entity Browser Block Layout (entity_browser_block_layout)

UX and CSS improvements to make it easier to use Entity Browser blocks in Layout Builder.

## Requirements
- Layout Builder (core)
- [Entity Browser](https://www.drupal.org/project/entity_browser)
- [Entity Browser Block](https://www.drupal.org/project/entity_browser_block_)

## Instructions

- Navigate to Administration > Extend and enable the module and all the required modules.
- Create an entity browser view of content you want to allow users to select from. If you use the "table" display for content in that view, this module will make each table row clickable so you can click anywhere on the row to select it.
- Create one or more entity browsers, following instructions in the Entity Browser module. You can choose to display the above view on one tab of the entity browser.
- Configure a content type to use the Layout Builder, following instructions for Layout Builder.
- Edit the content types that are referenced by the entity browser view, and select the view modes you want to be able to use when adding this kind of content to a layout. For instance, you might only want to use the Teaser view mode in that situation.
- Create a layout using Layout Builder. In the block list you will see block(s) added by Entity Browser Block module for each entity browser you created. That will allow you to insert a block into your layout that references other content, using entity browser to choose the content.

This module alters the display of the Entity Browser Block when it is used in Layout Builder, and limits the available view modes to the ones selected above.

## Composer 

To include this module in a composer project, add the following to the 'repositories' section of the top level composer.json file:

```
        "lullabot/entity_browser_block_layout": {
            "type": "vcs",
            "url": "https://github.com/lullabot/entity_browser_block_layout.git",
            "no-api": true
        }
```
`
Then type the following on the command line:

composer require lullabot/entity_browser_block_layout --prefer-source