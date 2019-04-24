
const feed = require('../js/feed.js')

var a1 = true;

it('feed test', () => {
    feed.like(a1);
    expect(like(a1).toBe(true));
})