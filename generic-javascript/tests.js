const _ = require('lodash');
const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

// your code can go here


// everything below are tests
const fruit = [
    {
        word: 'apple',
        count: 5
    },
    {
        word: 'banana',
        count: 2
    },
    {
        word: 'orange',
        count: 1
    },
    {
        word: 'cherry',
        count: 9
    },
    {
        word: 'plum',
        count: 3
    }
];


const sortedFruit = [
    {
        word: 'orange',
        count: 1
    },
    {
        word: 'banana',
        count: 2
    },
    {
        word: 'plum',
        count: 3
    },
    {
        word: 'apple',
        count: 5
    },
    {
        word: 'cherry',
        count: 9
    }
];


describe('Test suite', () => {
  it('should always work', () => {
    assert(true)
  });
  
  it('should sort fruit', () => {
    sorted = sortFruit(fruit);
    assert.deepStrictEqual(sorted, sortedFruit);
  });
  
  it('greaterThenAverage', () => {
    assert.deepStrictEqual([3], greaterThenAverage([1, 2, 3]));
    assert.deepStrictEqual([8, 5, 11], greaterThenAverage([-1, 8, 0, 4, 5, 2, 11]));
  });
  
  it('should transpose', () => {
    const transposed = transpose({'item1': 1, 'item2': 'two', 5: 'fiver'});
    assert.deepStrictEqual(transposed.fiver, 5);
    assert.deepStrictEqual(transposed.two, 'item2');
    assert.deepStrictEqual(transposed['1'], 'item1');
  });
  
  it('should detect a palindrome', () => {
    const f = isPalindrome;
    assert(f('Doc, note: I dissent. A fast never prevents a fatness. I diet on cod'));
    assert(!f('I am not one for sure'))
    assert(f('Able was I ere I saw Elba'))
    assert(f('Never odd or even'))
    assert(f('aabbccddeefeeddccbbaa'))
    assert(!f('abbccddeeffeddccbbaa'))
  });
});

mocha.run();
