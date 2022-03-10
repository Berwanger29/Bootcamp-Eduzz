const assert = require('assert')
const Math = require('../math.js')

describe('Math class', function(){
    //hooks
    beforeEach(function(){
        let value = 5;
    })

    it.skip('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000)
         
        math.sum(5 ,5, value => {
            assert.equal(value, 10);
            done()
        })
    })

    it.only('Multiply two numbers', function(){
        const math = new Math();

        assert.equal(math.multiply(5,5), 25)
    });
})