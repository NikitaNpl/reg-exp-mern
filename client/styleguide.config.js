const path = require('path');
const reactDocgen = require('react-docgen');
const glob = require('glob');

// module.exports = {
//   serverPort: 8080,
//   components: './src/components/**/*.jsx',
//   propsParser(filePath, source, resolver, handlers) {
//     return reactDocgen.parse(source, resolver, handlers)
//   },
//   resolver: reactDocgen.resolver
//     .findAllComponentDefinitions,
//   logger: {
//     // One of: info, debug, warn
//     // Suppress messages
//     info: () => {},
//     // Override display function
//     warn: message => console.warn(`NOOOOOO: ${message}`)
//   }
// };

module.exports = {
	components: "src/components/**/*.{js,jsx}",
};

// styleguide.config.js

// module.exports = {
//   sections: [
//     {
//       name: 'Introduction',
//       content: 'docs/introduction.md'
//     },
//     {
//       name: 'Documentation',
//       sections: [
//         {
//           name: 'Installation',
//           content: 'docs/installation.md',
//           description: 'The description for the installation section'
//         },
//         {
//           name: 'Configuration',
//           content: 'docs/configuration.md'
//         },
//         {
//           name: 'Live Demo',
//           external: true,
//           href: 'http://example.com'
//         }
//       ]
//     },
//     {
//       serverPort: 8080,
//       components: './src/components/**/[A-Z]*.jsx',
//       propsParser: (filePath, source, resolver, handlers) => {
//         if (/\.jsx?$/.test(filePath)) {
//           const content = glob.sync(path.join(__dirname, filePath))[0];
//           return reactDocgen.parse(content);
//         }
//         return require('react-docgen').parse(source, resolver, handlers);
//       },
//       name: 'UI Components',
//       exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
//       usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
//     }
//   ]
// }
