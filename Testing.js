
assert = chai.assert;

ddescribe('Background color test', function () {

    it('Should have a white background', function () {
        const myDiv = document.getElementById('myDiv');
        const computedStyle = window.getComputedStyle(myDiv);
        expect(computedStyle.backgroundColor).to.equal('rgb(255, 255, 255)');

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