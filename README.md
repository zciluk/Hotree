# Hotree project

The app is a simple social networking platform called **Hotree**. 
Responsive for desktop and mobile devices.
JS framework: **React**.
CSS pre-processor: **Sass** - with help of **node-sass** package.
Bootstraped with **create-react-app**.
Tests (snapshots and some minor unit) created with **Jest**.
Other packages:  **prop-types** for propTypes check in components, **moment** for datetime handling, **react-test-renderer** for testing purposes. 

## Installation

Installation is easy, to download the node modules just type:
```sh
$ cd hotree
$ npm install 
```
then available commands are: 

#### Run server in development mode
```sh
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
#### Run tests
```sh
$ npm test
```
Test coverage can be displated by running: 
```sh
$ npm test -- --coverage
```
Test can be found in /components/__test__ directory - there are some simple tests (layout integrity, submit success, submit failure, some components validation). Due to snapshot testing (which can cover large chunks of code at once) test coverage is now above 80%. 
#### Build to public/ directory
```sh
$ npm run build
```
# Additional info
Some components are designed to be highly reusable - like InputField, SmallInput, Button or TextField. Others are specific to the project - like PaymentField or DateField, so there are less props available for customisation. 

# Browsers support
Webapp was tested on some most popular browsers:
| Browser | result |
| ------ | ------ |
| Chrome 72.0.3626.109 |  working, responsive  |
| Firefox 64.0.2 |  working, responsive, date fields not fully validated   |
| Chrome Mobile 71.0.3578.99 | working, responsive, date fields with no placeholders |
| Safari 12.0.1 (14606.2.104.1.1) |  working, responsive, date and time HTML5 inputs are not properly handled by Safari  |

Main problem with browser compatibility are the HTML5 "date" and "time" inputs. The solution to this is to write own components or import package with some trusted ones - which is not in scope for this task. 
