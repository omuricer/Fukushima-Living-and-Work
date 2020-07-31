#!/bin/bash

rm -rdf docs app/dist
# cp -rd docs-for-github-pages docs
npm install
npx webpack --mode production
cp -rd src/image dist
mv dist/* docs
exit