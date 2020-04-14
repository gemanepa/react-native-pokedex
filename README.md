# React-Native Expo Pokédex

A small side-project which uses
* React-Native
* Expo
* PokeAPI
* PokemonDB
* Detox

To create a Pokedex app for iOS.

<img src="screenshots/home.png" alt="Home" width="300"/>
<img src="screenshots/details.png" alt="Details" width="300"/>

## Pre-requisites
1. NodeJS installed
2. NPM installed
3. Brew installed
4. Python installed

## Running E2E Tests
To run the E2E Detox tests you'll have to do a bit of setup which can be found on [this](https://blog.expo.io/testing-expo-apps-with-detox-and-react-native-testing-library-7fbdbb82ac87) blog post. In summary you'll need to do the following:
1. `brew tap wix/brew`
2. `brew install --HEAD applesimutils`
3. `npm install -g detox-cli`
and then you're good to go! Detox has already been configured to run with Expo and TypeScript in this project.

On a first test run, you'll need to run `npm run test:clean` to pull the IPA of the expo app.
After this first pull, you can run `npm run test` freely!

Pokémon and Pokémon character names are trademarks of Nintendo. I do not (and nor do I claim to) own the Pokémon property.