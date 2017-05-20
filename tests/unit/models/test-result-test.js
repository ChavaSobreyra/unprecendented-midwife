import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-result', 'Unit | Model | test result', {
  // Specify the other units that are required for this test.
  needs: ['model:client', 'model:server', 'model:speeds', 'model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
