module.exports = {
	   'env': {
		      'browser': true,
		      'es2021': true
	   },
	   'extends': [
		      'eslint:recommended',
		      'plugin:react/recommended',
		      'plugin:@typescript-eslint/recommended'
	   ],
	   'overrides': [
	   ],
    'ignorePatterns': ['src/index.tsx', 'src/App.tsx', 'src/reportWebVitals.ts'],
	   'parser': '@typescript-eslint/parser',
	   'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
	   },
	   'plugins': [
		      'react',
		      '@typescript-eslint'
	   ],
	   'rules': {
		      'indent': [
            'error',
			         4,
		      ],
		      'linebreak-style': [
			         'error',
			         'windows'
		      ],
		      'quotes': [
			         'error',
			         'single'
        ],
        'semi': [
            'error',
            'never'
        ]
	   }
}
