.PHONY: install dev build preview push publish

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

push:
	git add .
	git commit -m "chore: update prose" || true
	git push origin main

publish:
	npm run build
	npm run preview &
	@echo "For GitHub Pages, push to main:"
	git add .
	git commit -m "chore: publish prose" || true
	git push origin main
