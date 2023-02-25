require('jest-preset-angular/global-setup');


module.exports  =   {  
    name: 'lakwatsa-ui',
    preset: 'jest-preset-angular',
    roots: ['src'],
    setupFilesAfterEnv: './src/setup-jest.ts',
    testPathIgnorePatterns: [
        './node_modules/',
        './dist/',
        './src/test.ts',
        './src/environments/',
    ],
    globals: {
        'ts-jest':{
            tsconfig : './tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$',
        },
    },
    transformIgnorePatterns: [ 'node_modules/(?!.*\\.mjs$)'],
    resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
    coverageDirectory: 'reports/coverage',
    coverageThreshold:{
        global:{
            branches: 20,
            functions: 20,
            lines: 20,
            statements: 10
        },
    },
    reporters: [
        'default',
        [
            'jest-unit',
            {
                outputDirectory: './reports/tests',
                outputName: 'unit-test-evidence.xml',
            },
        ],
        [
            'jest-html-reporter',
            {
                outputPath: './reports/cucumber/requirements-evidence.html'
            },
        ],

    ],

};
