const isGithubActions = process.env.GITHUB_ACTIONS || false


const repo = 'Todo-List'
const assetPrefix = `/${Todo-List}/`
const basePath = `/${Todo-List}`



if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${Todo-List}/`
  basePath = `/${Todo-List}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
}