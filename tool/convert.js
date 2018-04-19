const { actionType, parseActions, sequentialPromises } = require('./index');
const confirm = require('confirm-simple');

// Actions
const actions = [
  {
    type: actionType.RUN,
    label: 'Update the seng-generator template path.',
    command: 'sg settings -t ./template,./node_modules/muban-transition-component/template',
  },
  {
    type: actionType.REPLACE,
    label: 'replace files in the skeleton.',
    source: 'convert',
    target: './',
  }
];


confirm('Running this script will replace/adapt files, are you running this on a clean project?', function (ok) {
  if (ok) {
    sequentialPromises(parseActions(actions))
    .then(() => console.log('Done.'))
    .catch(reason => console.log('Failed to execute the script: ', reason));
  }
});
