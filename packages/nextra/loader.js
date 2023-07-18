/* eslint-env node */
// https://github.com/mdx-js/mdx/blob/061cdbf440bd8193867fcef3f5a131c08e4fe469/packages/loader/index.cjs

/**
 * Webpack loader
 *
 * @todo once webpack supports ESM loaders, remove this wrapper.
 *
 * @param {string} code
 */
module.exports = async function (code) {
  const callback = this.async()
  try {
    // Note that `import()` caches, so this should be fast enough.
    const { loader } = await import('./dist/loader.mjs')
    const result = await loader(this, code)
    callback(null, result)
  } catch (error) {
    callback(error)
  }
}
