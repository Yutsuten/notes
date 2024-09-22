.PHONY: build deploy

build:
	pnpm run build

deploy:
	mkdir -p ~/.local/server/static/notes
	rm -rf ~/.local/server/static/notes/*
	mv .vitepress/dist/* ~/.local/server/static/notes
	systemctl --user reload caddy
