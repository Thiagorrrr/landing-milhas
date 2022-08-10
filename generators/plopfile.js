module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Component type ?',
        choices: [
          { name: 'Atoms', value: 'atoms' },
          { name: 'Molecules', value: 'molecules' },
          { name: 'Organisms', value: 'organisms' },
          { name: 'Templates', value: 'templates' },
          { name: 'Pages', value: 'pages' },
          { name: 'Containers', value: 'containers' }
        ],
        default: 0
      }
    ],
    actions: (data) => {
      const actions = []

      if (data.type !== 'pages') {
        actions.push(
          {
            type: 'add',
            path: '../src/components/{{type}}/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/index.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{type}}/{{pascalCase name}}/styles.ts',
            templateFile: 'templates/styles.ts.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{type}}/{{pascalCase name}}/types.ts',
            templateFile: 'templates/types.ts.hbs'
          }
        )
      }
      if (
        data.type === 'atoms' ||
        data.type === 'molecules' ||
        data.type === 'organisms' ||
        data.type === 'containers'
      ) {
        actions.push(
          {
            type: 'add',
            path: '../src/components/{{type}}/{{pascalCase name}}/__tests__/index.tsx',
            templateFile: 'templates/test.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{type}}/{{pascalCase name}}/stories/index.stories.tsx',
            templateFile: 'templates/stories.tsx.hbs'
          }
        )
      }

      if (data.type === 'pages') {
        actions.push(
          {
            type: 'add',
            path: '../src/pages/{{pascalCase name}}/__tests__/index.tsx',
            templateFile: 'templates/test.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/pages/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/index.tsx.hbs'
          }
        )
      }

      return actions
    }
  })
}
