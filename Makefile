brain-games:
	@node bin/brain-games.js

brain-even:
	@node bin/brain-even.js

brain-calc:
	@node bin/brain-calc.js

brain-gcd:
	@node bin/brain-gcd.js

install:
	npm ci

install-local:
	npm link

lint:
	@npx eslint .

publish:
	npm publish --dry-run
