# Setup
1. Clone the repo on your machine
2. Run `touch .env` and set it up accordingly, if using environment variables (You should)
3. Run `yarn install`
4. Run `npm start`
5. You're good to go!

# Description (TL;DR)
### This project is meant to allow you to quickly jumpstart your project, using the core principle of Vue and Atomic Design, to allow for an easily maintainable codebase and quick development time.

It attempts to follow the idea behind [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) (A methodology of organizing pages), while using some separate strategies learned through experience. This project should remain stable enough for daily use, and any changes should be easily integrated with any existing project. After all, I will also be using this for my own projects.

# Description Full
The general structure of this project is heavily based on Atomic Design, but there are several instances of divergence. I will not go into the specifics, but will highlight parts that may not be intuitive at first glance.

* Atomic design is used within the css and components folder. Inside are the folder: Atoms, Molecules, Organisms, Templates. Inside of any of these folders, you can create a sub-folder for specific sections of the page. You can nest as many folders as you like, but anything beyond 4 levels should be avoided, since such nesting should be made more horizontal, rather than vertical. An example of a structure can be `Templates/ > layout/ > header.vue`

* Atoms as folder will typically be only used for global settings for elements at an individual level, such as HTML Tag styling, or a global reset file

* This project utilizes HTML tags heavily, but this does not mean you need to do the same. Feel free to add class-names wherever you see fit, but when doing so, ensure that the classes are safely encapsulated inside of either a Template, Organism, or Molecule. As an additional precaution, you should use the child-descendant tool in your CSS and JS/jQuery. For example, rather than `('.a-general-class-name').hide()`, you should use the parent class, such as `'.m__class-container > .a-general-class-name).hide()`. While this may seem a bit more verbose, this way makes it more difficult to step on your own feet with class-naming conflicts and overidden styles. 

* Try to maintain proper leveling with the markup, meaning make sure molecules are children of organisms, and organisms are children of templates. Don't allow situations of molecules under molecules or organisms under organisms, as this defeats the purpose of Atomic Design. 

* This project utilizes the mobile-first approach towards styling and development, and for this reason, you will see the `$breakpoint` mixin in the scss files, that styles from mobile dimensions, up to tablet and then desktop. You are free to use this pattern, or whatever works best for you.


# Includes
* ES6/ES7
* SASS/SCSS
* Axios
* Flexbox
* Babel configuration
* Vue Router
* Pre-routing
* Webpack configuration
* Webpack-dev-server (hot-reloading)
* Postcss configuration

## Important Notes
* A global root prefix ('@') is defined in both webpack and babel, for both server and client-side use.

* There is pre-rendering configured in the base webpack file. This is meant for static pages that should not contain dynamic elements. Simply add any additional routes you need for pre-rendering. If you have a lot of dynamic element pages, and if your project is an SPA, you should be fine without any additional configuration, but if you are building an extensive project, consider utilizing SSR alongside the pre-rendering.

* The project is currently setup to only use `flex-direction: row` and `flex-wrap: wrap` as an alternative to `flex-direction: column` which has some tricky bugs on different devices. It is up to your discretion whether to continue this strategy, or switch the process to use columns.

* The project contains a custom reset.scss file. Any third-party additions such as Normalize should work fine, and I am meaning to integrate one of the options in the near future. 

## To-do
* Add Vuex easy setup
* CLI configuration for quicker Vue Route setups

# License (MIT)

Copyright © 2016 Oliphaunte

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
