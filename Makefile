.PHONY: build deploy

build:
	pnpm run build

deploy:
	mkdir -p /usr/share/caddy/notes
	rm -rf /usr/share/caddy/notes/*
	mv .vitepress/dist/* /usr/share/caddy/notes
	systemctl reload caddy
