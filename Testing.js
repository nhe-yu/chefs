
assert = chai.assert;

describe('Testing function generateNum(upTo) of Task 2', function () {

    it('Test 1: boundary value 1 for upTo', () => {
        assert.equal(generateNum(1), 1);
    });

    it('Test 2: generateNum(5) returns >= 1', () => {
        for (var i = 1; i <= 1000; i++) {
            assert(generateNum(5)>=1);
        }
    });

    it('Test 3: generateNum(5) returns <= 5', () => {
        for (var i = 1; i <= 1000; i++) {
            assert(generateNum(5)<=5);
        }
    });
	
	
	/* ToDO: complete calls the function 1000 times with argument 10 to generate 
	1000 random numbers and check if each one is in the range of [1, 10]. */
	//hint: study the test code for task1
	
	/*it('Test 4: generateNum(10) and returned values are in [1,10]', () => {
         
    });
*/

});