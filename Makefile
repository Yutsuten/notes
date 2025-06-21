.PHONY: build deploy

build:
	pnpm run build

deploy:
	fish deploy_local.fish
