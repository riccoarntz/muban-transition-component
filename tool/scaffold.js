const { actionType, parseActions, sequentialPromises } = require('./index');
const confirm = require('confirm-simple');

// Actions
const actions = [
  {
    type: actionType.REPLACE,
    label: 'Add files in the skeleton.',
    source: 'scaffold',
    target: './',
  }
];

confirm('Running this script will add(necessary) files (or overwrite if already run before), are you ok with this?', function (ok) {
  if (ok) {
    sequentialPromises(parseActions(actions))
    .then(() => console.log('Done.'))
    .catch(reason => console.log('Failed to execute the script: ', reason));
  }
});
