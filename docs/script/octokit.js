// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('PUT /repos/{owner}/{repo}/pages', {
  owner: 'OWNER',
  repo: 'REPO',
  cname: 'octocatblog.com',
  source: {
    branch: 'main',
    path: '/'
  },
  headers: {
    'X-GitHub-Api-Version': '2026-03-10'
  }
})
