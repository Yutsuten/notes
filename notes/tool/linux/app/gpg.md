---
title: Gpg
man: gpg
ref: https://wiki.archlinux.org/index.php/GnuPG
---

## Initial setup

On your shell's rc file,
export the `GPG_TTY` environment variable:

```shell
export GPG_TTY=$(tty)
```

## Configuration

Configuration is done in the `~/.gnupg/gpg-agent.conf` file.
See the full documentation with `man gpg-agent`.

To apply any configuration changes,
run this command:

```shell
gpg-connect-agent reloadagent /bye
```

### Pinentry

Optionally set the dialog for inputting your password.
Check the available front-ends and dependencies with:

```shell
ls -1 /usr/bin/pinentry*
pacman -Qi pinentry
```

Add your choice to `~/.gnupg/gpg-agent.conf`, for example:

```txt
pinentry-program /usr/bin/pinentry-qt
```

### Cache timeout

Value set in seconds,
`default-cache-ttl` is the value that will extend the timeout each time the cache is used,
and `max-cache-ttl` is the maximum value it can be extended.

Example for 1 day:

```ini
default-cache-ttl 86400
max-cache-ttl 86400
```

Use 0 to disable caching.

## Usage

```shell
gpg OPTIONS FILE
```

:::info
If `FILE` or `-o` is not specified,
`stdin` and `stout` will be used, respectively.
:::

Common options:

| Option | Description |
| --- | --- |
| `-K` `--list-secret-keys` | List secret keys. |
| `-c` `--symmetric` | Encrypt a FILE using symmetric cipher. |
| `-d` `--decrypt` | Decrypt the FILE. Output to STDOUT by default. |
| `-e` `--encrypt` | Encrypt data to one or more public keys. Output to `$FILE.gpg` by default. |
| `-k` `--list-keys` `--list-public-keys` | List public keys. |
| `-o` `--output` | Write output to FILE. |
| `-r` `--recipient` | Encrypt for user id NAME. Often used with `--encrypt`. |
| `-s` `--sign` | Sign a message. |
| `--default-recipient-self` | Use the default key as default recipient if option `--recipient` is not used. |
| `--keyid-format short` | Display key IDs with 8 characters (used on git and pass). |
| `--verify` | Verify the FILE's signature. |

Key management:

| Option | Description |
| --- | --- |
| `-a` `--armor` | Create ASCII armored output (key.asc). |
| `--delete-keys NAME` | Remove key from the public keyring. |
| `--delete-secret-keys NAME` | Remove key from the secret keyring. |
| `--export [KEYID!]` | Export keys (usually used with -a and --output). |
| `--export-ownertrust` | Export ownertrust values. |
| `--export-secret-keys [KEYID!]` | Export secret keys (usually used with `-a` `-o`). |
| `--full-generate-key` | Generate a new key pair. |
| `--import FILE` | Import keys. |
| `--import-ownertrust FILE` | Import ownertrust values. |

Keyserver:

| Option | Description |
| --- | --- |
| `--gen-revoke FILE` | Generate a revocation certificate. |
| `--recv-keys KEYID` | Import keys from a keyserver. |
| `--search-keys NAME` | Search the keyserver for the given names. |
| `--send-keys KEYID` | Export keys to a keyserver. |

### Exporting

Export public key to share with people or register on websites (like GitHub):

```shell
gpg --armor --export IDENTIFIER
```

### Encrypt and decrypt

Encrypt with symmetric cipher:

```shell
gpg -co file.txt.gpg file.txt
```

Encrypt and sign to someone/self with:

```shell
gpg -o file.txt.gpg -esr 'Recipient Name' file.txt         # `-o` is optional in this case
gpg -o file.txt.gpg -es --default-recipient-self file.txt  # `-o` is optional in this case
```

Encrypt and redirect the data (`-o -` is needed):

```shell
gpg -o - -e --default-recipient-self file.txt > ~/result.gpg  # Just override output file
```

Decrypt (and show signature) with:

```shell
gpg -o file.txt -d file.txt.gpg
```

Compress and encrypt folder:

```shell
tar --zstd -c Folder/ | gpg -e --default-recipient-self > folder.tar.zst.gpg
```

Decrypt and extract folder:

```shell
gpg -d folder.tar.zst.gpg | tar --zstd -x
```

### Verify file signature

Check the signature only (will not work if file is encrypted):

```shell
gpg --verify file.txt.gpg
```

Given a signature file `.sig` and the data/binary file you want to check (ex: `.efi`):

```shell
gpg --keyserver-options auto-key-retrieve --verify ipxe-arch.efi.sig ipxe-arch.efi
```

### Key management

```shell
gpg --edit-key IDENTIFIER
list    # Listing keys
key 0   # Select key (0 is master)
trust   # Trust a key
addkey  # Add subkey
delkey  # Delete subkey
passwd  # Change passphrase
expire  # Change expire date
save    # Save changes
```

Add new user info with:

```shell
gpg --edit-key IDENTIFIER
adduid
save
```

Optionally revoke the old user:

```shell
gpg --edit-key IDENTIFIER
uid N
revuid
save
```

### Generate ECC master key

```shell
gpg --expert --full-generate-key
# (9) ECC and ECC
# (1) Curve 25519
```

Optionally generate sign key:

```shell
gpg --expert --edit-key IDENTIFIER
addkey
# (10) ECC (sign only)
# (1) Curve 25519
save
```

## Advanced

### Delete master key

```shell
## Find master key keygrip
gpg --with-keygrip --list-key MASTERKEYID

## Securely delete it from .gnupg folder
shred --remove ~/.gnupg/private-keys-v1.d/KEYGRIP.key
```

## Troubleshooting

If for some reason, password prompt does not appear (i.e. because of `CTRL+c` in a prompt), try:

```shell
gpgconf --kill gpg-agent
pkill pinentry # Try `-KILL` too
pkill gpg-agent # Try `-KILL` too
```

As a last resort, kill and restart all GPG-related processes:

```shell
pkill scdaemon
pkill gpg-agent
gpg-connect-agent /bye
gpg-connect-agent updatestartuptty /bye
gpgconf --reload gpg-agent
```
