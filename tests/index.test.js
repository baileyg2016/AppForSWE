
const feed = require('../js/feed.js')

var a1 = "fa-thumbs-down";

it('feed test', () => {
    feed.like(a1);
    expect(like(a1).toBe(true));
})