Thu  4 Apr 2024 15:25:17 IST

We are in deepest darkest javascript land with rollup and esm vs commonjs and other
strange and terrible things:

https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe/comments

This module essentially uses `useState` and `useEffect` hook to mount a d3-milestones graphic
in a custom div and handle passing all the default properties to d3-milesontes.

TS Server fatal error: path.charCodeAt is not a function #99615



Had to add peer dependencies to get rid of this:
:wq
```
(!) Broken sourcemap
https://rollupjs.org/troubleshooting/#warning-sourcemap-is-likely-to-be-incorrect
Plugins that transform code (such as "Typescript") should generate accompanying sourcemaps.
[!] (plugin Typescript) RollupError: [plugin Typescript] src/components/milestones/milestones.tsx (1:17): Module '"react"' has no exported member 'useMemo'. Did you mean to use 'import useMemo from "react"' instead?
src/components/milestones/milestones.tsx (1:17)

1 import React, { useMemo, useEffect, useRef, useState, FC } from "react";
```

Now we package and deploy:
   [Life Cycle Scripts](https://docs.npmjs.com/cli/v10/using-npm/scripts#life-cycle-scripts)

Some updates to storybook:
    https://storybook.js.org/docs/api/csf


npm link could be causing pain see this issue:

[Hooks error on React library compiled with Rollup.js](https://github.com/facebook/react/issues/14721)

I can’t guess what’s wrong in your particular setup but I’ve described the issue: you’ll see it when you have two Reacts in the resulting bundle. Check the bundle contents. I can’t help you with setting up Rollup, what its errors mean, or how Node resolutions works — just the React part which is definitely related to that.

Npm link is known for causing this because webpack would “see” React both in your lib folder and in your app folder, and would include both of them in the bundle. A common workaround is to npm link back from your lib’s node_modules/react into your app’s React copy.
