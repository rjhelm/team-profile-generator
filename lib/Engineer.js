const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Set a github account using contructor', () => {
    const github = "GitHubUsername";
    const engineer = new Engineer('Roger', '1', 't@test.com', github);
})