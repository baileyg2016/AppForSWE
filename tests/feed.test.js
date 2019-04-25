const feed = require('../js/feed.js')

//covers setting a profile pic
test('setpic test with a valid pic', () => {
    
    expect(feed.setPic("https://vignette.wikia.nocookie.net/p__/images/f/f5/EdEEnE.png/revision/latest?cb=20130924162121&path-prefix=protagonist")).toEqual(2);

});
test('setpic test using null', () => {
    
    expect(feed.setPic(null)).toEqual(1);

});

//covers setting a biography
test('setBio test for parameter that isnt a string', () => {
    
    expect(feed.setBio(5)).toEqual("not a valid bio");

});
test('setBio test for parameter that has too many characters', () => {
    
    expect(feed.setBio("this bio is waaaaaaaaaaaaaay too long")).toEqual("too many characters");

});
test('setBio test for valid bio', () => {
    
    expect(feed.setBio("nice")).toEqual(2);

});

//tests for invalid email
test('emailValidity test for an invalid email type', () => {
    
    expect(feed.emailValidity(6)).toEqual("not a valid email");

});

//tests for invalid email
test('emailValidity test for an invalid email', () => {
    
    expect(feed.emailValidity("koyoldcvt.edu")).toEqual("not a valid email");

});

//tests for valid email
test('emailValidity test for an valid email', () => {
    
    expect(feed.emailValidity("koyoldc@vt.edu")).toEqual(2);

});