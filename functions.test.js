test("can add up?", () => {
    expect (2 + 2).toEqual(4)
})

const {findLargest} = require('./functions')


describe ('findLargest', () => {
    test("findLargest", () => {
        expect(findLargest).toBeDefined()
    })
    
    test('is a function', () => {
        expect(findLargest instanceof Function).toEqual(true);
    })
    
    test(" returns a number", () => {
        expect(typeof findLargest() ==='number').toEqual(true);
    })
    test(" identifies the largest value's index", () => {
    
        expect(findLargest([1, 1, 4, 1])).toEqual(2);
    
    })
    
    test("returns -1 if no values are passed in", () => {
    
        expect(findLargest([])).toEqual(-1);
    
    })
})
