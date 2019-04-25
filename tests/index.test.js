
const feed = require('../js/feed.js')
const index = require('../js/index.js')

it('feed test', () => {
    
    expect(feed.like(post)).toEqual(!null);
})

it('setpic test', () => {
    
    expect(index.picSet("https://vignette.wikia.nocookie.net/p__/images/f/f5/EdEEnE.png/revision/latest?cb=20130924162121&path-prefix=protagonist")).toEqual(2);

})

