const jsdom = require('jsdom').jsdom;
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

configure({ adapter: new Adapter() });
