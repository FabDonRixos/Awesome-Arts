# Contributing Guidelines

PLease note by participating in this project you agree on our term documented
in [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md).

- [Contribution](#contribution)
- [Pull Request](#pull-request)

## Contribution

If you are willing to contribute to this project here is a step by step introduction on how you can create a new
Component.

- Add your component (0 is just to make 0_artworks-list and 0_template stay at the top)
  ```
  src
  ├── artworks
  │   ├── 0_artworks-list
  │   │   ├── template.tsx
  │   │   └── template.modle.scss
  │   │
  │   ├── 0_template
  │   │   ├── template.tsx
  │   │   └── template.modle.scss
  │   │
  │   └── (Your Component Name Camelcase)
  │       ├── (Your Component Name Camelcase with capitalized first letter).tsx
  │       └── (Your Component Name Camelcase).modle.scss
  │
  └── App.tsx
  ```
  - [Camelcase](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case)
- Use the template
- Go to the artworkList and create a new entry look at the IArtworkItem to know what the props are
- Now you have set up everything and your Component should render inside the application, you're ready to get creative.

## Pull Request

- [Component](#component)
- [Feature](#feature)

### Component

If you have created a new component you'll have to tick off the following TODOs in order for you Pull request to be
approved.

- The Component is somewhere unique to already other crated components.
- Everything I created is my own and I haven't stolen it from somebody else.
- I have only used html and css to create my component, apart from the React component.
- I have followed the Project structure for components, read [Contribution](#contribution) for more details.
- My Component looks good on most device including (phones, tablets, laptops, screens), if not don't worry, but write a
  comment inside you main component tsx file.
- My Code is well-structured and easy to read for someone other to understand it properly.
- If something could be unclear/complex for others to understand I have made a comment for this part.
- If I use the full property I have mady my mind up and really need the extra space.
- I haven't edited a file which is not my component files or the artworksList, else create a new [Feature](#feature).
- I have only used module css classes.

### Feature

If you have created a new feature that means contribution to the project by building something apart from a component,
like a new filter or other features that add to the overall project (you can use ts). You'll have to took of the
following TODOs.
New features will be inspected much careful that new Components.

- My changes do not affect anything in a way that it won't work no more.
- I have looked through my code and decided for every part if it really makes sense to do it like this, or if there is
  an easier way.
- If I edited some core files of the Project I have checked the code extra carefully.
- The position where I placed the new files inside the project tree make sense, in compartment to the current version of
  the code.
- My code is well-structured and easy to read for someone other to understand it properly.
- If the new feature have UI changes, I have made them responsive as good as possible.
- If something could be unclear/complex for others to understand I have made a comment for this part.
- I have only used module css classes, with exception for some part where you can use the index.scss.
