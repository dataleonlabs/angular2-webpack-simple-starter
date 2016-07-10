# angular2-webpack-simple-starter
Simple Angular 2, Webpack, Less and TypeScript Starter

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/youngapp/angular2-webpack-simple-starter.git

# change directory to our repo
cd angular2-webpack-simple-starter

# WINDOWS ONLY
# add required global libraries `typings webpack-dev-server rimraf webpack`
npm install -g typings webpack-dev-server rimraf webpack

# install the repo with npm
npm install

# WINDOWS ONLY
# install typings
npm run typings-install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typings` (`npm install --global typings`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install typings webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies
* `typings install` to install necessary typings
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```
