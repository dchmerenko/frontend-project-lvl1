brain-games:
	@node bin/brain-games.js

brain-even:
	@node bin/brain-even.js

install:
	npm ci

install-local:
	npm link

lint:
	npx eslint .

publish:
	npm publish --dry-run
