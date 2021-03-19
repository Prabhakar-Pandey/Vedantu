var assert = require('assert');
const Registration = require("../index");
beforeEach(()=> {
    
});

describe('Class Initialized', ()=> {
    let School = new Registration({
        capacity:12
    })
  it('this will initialize my Registration class with Hat capacity 12 ', ()=> {
    assert.equal(School.houseCapacity, 12);
  });
});