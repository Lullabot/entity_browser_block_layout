[This project is now on drupal.org](https://www.drupal.org/project/entity_browser_block_layout).

# Entity Browser Block Layout 

UX and CSS improvements to make it easier to use Entity Browser blocks in Layout Builder. It does the following:

- Tweaks the tiny table display of selected items to fit better into the Layout Builder sidebar by letting the table cells stack vertically.
- Adds an 'Edit' button next to each selected content item for ease in making changes.
- Allows you to identify which view modes can be used for each item of referenced content, so you can surpress view modes that don't make sense in Layout Builder.
- Improves the item selection UX so that each table row in the entity browser view will be clickable anywhere on the row to select it, and selected rows will be highlighted.

## Requirements
- Layout Builder (core)
- [Entity Browser](https://www.drupal.org/project/entity_browser)
- [Entity Browser Block](https://www.drupal.org/project/entity_browser_block_)

## Configuration

- Navigate to admin > extend and enable the module and all the required modules.
- Create an entity browser view of content you want to allow users to select from. Use the "table" display if you want each table row to be clickable.
- Create one or more entity browsers, following instructions in the Entity Browser module. You can choose to display the previously-created view on one tab of the entity browser.
- Edit the content types that can be referenced by the entity browser, to select the view modes you want to be able to use when adding this kind of content to a layout. For instance, you might only want to use the Teaser view mode in that situation.
- Configure a content type to use the Layout Builder, following instructions for Layout Builder.
- Create a layout using Layout Builder. In the block list you will see block(s) added by Entity Browser Block module for each entity browser you created. That will allow you to insert a block into your layout that references other content, using entity browser to choose the content.


## Composer 

To include this module in a composer project, add the following to the 'repositories' section of the top level composer.json file:

```
        "lullabot/entity_browser_block_layout": {
            "type": "vcs",
            "url": "https://github.com/lullabot/entity_browser_block_layout.git",
            "no-api": true
        }
```

Then type the following on the command line:

```
composer require lullabot/entity_browser_block_layout --prefer-source
```
