# TailPress
A minimal boilerplate theme for WordPress using [TailwindCSS](https://tailwindcss.com/), with [PostCSS](https://postcss.org) and ~~[Laravel Mix](https://laravel-mix.com/)~~ npx Tailwind Compiler.

# ATTENTION
**We've updated the default repo to `underscores` instead of `main`. This change comes with the fact that `_S` is a stable theme maintained directly by WordPress and allows for easier updates than the custom theme that was being used originially in the `main` branch. If you would like to use the `main` branch instead, please feel free to, but we will be deprecating support for it as of December 1st, 2021. All development will be in the `underscores` branch from then on. 
Thanks!**

# Update Apr. 4th, 2022
TailwindCSS Updated to 3.0.23

Check the [upgrade guide here](https://tailwindcss.com/docs/upgrade-guide) for what has changed in TailwindCSS.

# Update Dec. 11th, 2021
Tailwind Updated to 3.0.1

## Getting started
* Clone repo `git clone https://github.com/pixeldevsio/tailpress.git && cd tailpress`
* Run `rm -rf .git` to remove git.
* Run `npm install`
* Run `npm run development`
* Run `npm run watch` to start developing

You will find the editable CSS and Javascript files within the `/resources` folder.

Before you use your theme in production, make sure you run `npm run production`.

## NEW! AlpineJS support
[AlpineJS](https://alpinejs.dev/) is now included in the theme! All you need to do is add `define('ALPINEJS', TRUE)` inside of your `wp-config.php` before the `/* That's all, stop editing! Happy publishing. */` line and AlpineJS will be automatically included and ready to use.
[AlpineJS Docs](https://alpinejs.dev/start-here)

## Block editor support
TailPress comes with basic support for the [block editor](https://wordpress.org/support/article/wordpress-editor/).

CSS-classes for alignment, background and text colors will be generated automatically. You can modify this within the `tailwind.config.js` file.

To make the editing experience within the block editor more in line with the front end styling, a `editor-style.css` is generated. This file is only compiled on production builds.

## Full Site Editing support
TailPress is now updated to support Full Site Editing.

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
