# Hotree project

The app is a simple social networking platform called **Hotree**. 
JS framework: **React**.
CSS pre-processor: **Sass** - with help of **node-sass** package.
Bootstraped with **create-react-app**.
Other packages:  **prop-types** for propTypes check in components, **moment** for datetime handling.

## Installation

Installation is easy, to download the node modules just type:
```sh
$ cd hotree
$ npm install 
```
then available commands are: 

#### Run server in development mode
```sh
$ npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
#### Run tests
```sh
$ npm run test
```
Additional coverage can be displated by running: 
```sh
$ npm run test -- --coverage
```
#### Build to public/ directory
```sh
$ npm run build
```

# Browsers support
Webapp was tested on some most popular browsers:
| Browser | result |
| ------ | ------ |
| Chrome 72.0.3626.109 |  working, responsive  |
| Firefox 64.0.2 |  working, responsive, date fields not fully validated  |
| Chrome Mobile 71.0.3578.99 | working, responsive |
| Safari 12.0.1 (14606.2.104.1.1) |  working, responsive, date and time HTML5 inputs are not properly handled by Safari  |

