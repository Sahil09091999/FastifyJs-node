
const build = require('../../src/app')

test("default root route", async () => {
    const app = build();
    const res = await app.inject({
        url: "/",
    });
    expect(res.json()).toEqual({ "hello": "Sahil's world!" });
});

test("default root route status code is 200", async () => {
    const app = build();
    const res = await app.inject({
        url: "/",
    });
    expect(res.statusCode).toBe(200);
});


// //let app;
// describe('Root route', () => {
//     var app;
//     beforeEach(() => {
//         app = build();
//     })
// })

// describe('simple object', function () {
//     const helloworld =
//         {
//             "hello":"Sahil's world!"
//         };
// }

// afterEach(() => {
//     app.close();
// });

// it('should return 200 when root route called', async () => {
//     const res = await app.inject({
//         url: '/'
//     });

//     expect(res.statusCode).toBe(200);
//     expect(res.json()).toEqual({ hello: "Sahil's world!" });
// })