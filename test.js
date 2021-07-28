const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
// ^ we had too many () around readFileSync. Syntax should be as above
// also needed the watchify in the package.json so the test could recognise stuff like require

// H1, H2, Header, section for 3 paragraphs
describe('body', () => {
    test('it has a h1', () => {
    let heading = document.getElementById('h1')
    expect(heading).toBeTruthy;
    }),
    test('it has a h2', () => {
        let h2 = document.getElementById('h2')
        expect(h2).toBeTruthy
    })
    
}),
describe('header', () => {
    test('it is a navbar', () => {
        let navbar = document.getElementById('navbar')
        expect(navbar).toBeTruthy;
    })
})

//test class for h1 h2 