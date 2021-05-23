/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  plugins: [],
  mount: {
    src: '/',
    public: { url: '/', static: true, resolve: false },
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
}
