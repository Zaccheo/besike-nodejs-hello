// var expect = require("chai").expect;
var greet = require('..');

//assert断言
// var assert = require("assert");
// describe('Array',function(){
// 	describe('#indexOf()',function(){
// 		it('should return -1 when the value is not present',function(){
// 			assert.equal(-1,[1,2,3].indexOf(5));
// 			assert.equal(-1,[1,2,3].indexOf(0));
// 		});
// 	});
// });


//should
// var should = require("chai").should()
// 	,foo = 'bar'
// 	,beverages = { tea:['chai','matcha','oolong']};

// 	foo.should.be.a('string');
// 	foo.should.equal('bar');
// 	foo.should.have.length(3);
// 	beverages.should.have.property('tea').with.length(3);

console.log(greet('yang'));
console.log(greet('yang',true));

describe('greet',function(){
    //it("is a dummy success case",function(){
	    //expect(1).to.eql(1);
	//});
	it("should greet a person by name",function(){
		expect(greet('yang')).to.eql("hello, yang");
	});
	it("shoul greet a person flirtatiously if drunk",function(){
		expect(greet('yang','drunk')).to.eql("hello yang, you look so sexy!");
	});
});


