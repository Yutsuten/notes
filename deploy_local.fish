set SOURCE .vitepress/dist/
set TARGET ~/.local/server/static/notes

if not test -L $TARGET
    rm -rf $TARGET
end

mkdir -p (path dirname $TARGET)
ln -srnf $SOURCE $TARGET
systemctl --user reload caddy
