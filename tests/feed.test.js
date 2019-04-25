const feed = require('../js/feed.js')

test('setpic test', () => {
    
    expect(feed.setPic("https://vignette.wikia.nocookie.net/p__/images/f/f5/EdEEnE.png/revision/latest?cb=20130924162121&path-prefix=protagonist")).toEqual(2);

});