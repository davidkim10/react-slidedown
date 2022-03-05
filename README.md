# React SlideDown 

SlideDown component that will dynamically transition height using the library react-transition-group. 

Using pure CSS to transition height can get tricky. This component will dynamically transition the height and set the height back to "auto" after it is complete. Beyond other reasons, it is important to change the fixed value back to height "auto" because if you have a element that will grow based on some user interaction (e.g. a list, nested dropdowns, etc) you want to have the element grow with it's children.

I did not find many solutions that transition height dynamically using react-transition-group in the FE community so I wanted to share.

This component will also go one step further and add a fade animation to the children during the slide effect.

## Dependency
* https://reactcommunity.org/react-transition-group/
* https://github.com/reactjs/react-transition-group


## Typescript Gotcha
This component passes "undefined" as a generic to the <Transition> component or the TS compiler will throw an error for the callback arguments on certain handlers. Tracking this issue below:
* https://github.com/reactjs/react-transition-group/issues/729#issuecomment-866710370
