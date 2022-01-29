install:
	npm ci

install-local:
	npm link

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

