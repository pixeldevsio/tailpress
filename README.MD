# TailPress (with Underscores)
A minimal boilerplate theme for WordPress using [Underscores](https://underscores.me/), [TailwindCSS](https://tailwindcss.com/), with Tailwind's processor for compiling. Supports Full Site Editing using Templates.

## Getting started
* Clone repo `git clone https://github.com/pixeldevsio/tailpress.git && cd tailpress`
* Run `rm -rf .git` to remove git.
* Run `npm install`
* Run `npm run development`
* Run `npm run watch` to start developing

You will find the editable CSS and Javascript files within the `/resources` folder.

Before you use your theme in production, make sure you run `npm run production`.

## Block editor support
TailPress comes with basic support for the [block editor](https://wordpress.org/support/article/wordpress-editor/).

CSS-classes for alignment, background and text colors will be generated automatically. You can modify this within the `tailwind.config.js` file.

To make the editing experience within the block editor more in line with the front end styling, a `editor-style.css` is generated. This file is only compiled on production builds.

## Full Site Editing support
Tailpress is now updated to support Full Site Editing.

The template editing mode is a way to edit the website without the complexity of the site editor interface.
It is more limited than the site editor because you can not select or navigate between templates in this view.

You access the template editing mode via the block editor.

Create a new post or page. Next, open the document settings sidebar and locate the Template panel below Status & visibility.
Here you will find information about the current template and a list of existing templates to choose from.

Create a new template by selecting the New link.

Edit and save the template in the same way as in the site editor.

### Define theme colors
Four colors (primary, secondary, dark and light) are defined from the beginning. You can modify the colors in `tailpress.json`.

### Define theme font sizes
You can modify the font sizes within `tailpress.json`.

## JIT
[Tailwind CSS JIT](https://github.com/tailwindlabs/tailwindcss-jit) is used to allow for fast compiling.

If you prefer to use the regular Tailwind CSS instead, you can change to that dependency in `package.json`.
Also make sure to you change the PostCSS plugins in `webpack.mix.js`.

## PurgeCSS
By default, PurgeCSS is enabled. You can modify or disable it by changing the settings in the `tailwind.config.js` file. There are several [PurgeCSS options](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options).

## Links
* [TailwindCSS Documentation](https://tailwindcss.com/docs)
