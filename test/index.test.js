var assert = require('assert');
const SortingHat = require("../index");
beforeEach(()=> {
    
});

describe('Class Initialized', ()=> {
    let School = new SortingHat({
        capacity:12
    })
  it('This will initialize my SortingHat class with Hat capacity 12 ', ()=> {
    assert.equal(School.houseCapacity, 12);
  });
});