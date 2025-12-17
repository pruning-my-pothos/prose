.PHONY: install dev build preview deploy push

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

deploy:
	./deploy.sh

branch := $(shell git rev-parse --abbrev-ref HEAD)
MSG ?= chore: update site

push:
	@echo "Current branch: $(branch)"
	@git status --short
	git add .
	@git diff --cached --quiet && echo "No staged changes to commit." || git commit -m "$(MSG)"
	git push origin $(branch)
