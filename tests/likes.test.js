const likes = require('../js/likes.js')

test('likePhoto test', () => {
    
    expect(likes.likePhoto("noLike")).toEqual("true");

});

test('likeAfterLike test', () => {
    
    expect(likes.likeAfterLike("true")).toEqual("false");

});

test('likeAfterLike test', () => {
    
    expect(likes.likeAfterUnlike("false")).toEqual("true");

});