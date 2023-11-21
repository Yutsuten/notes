---
title: Gpg
ref: https://wiki.archlinux.org/index.php/GnuPG
---

## Configuration

On your shell's `rc` file,
export the following environment variable:

```shell
export GPG_TTY=$(tty)
```

### Dialog

Optionally set the dialog for inputting your password.
Add to `~/.gnupg/gpg-agent.conf`:

```txt
pinentry-program /usr/bin/pinentry-qt
```

Another GUI option is `pinentry-gnome3`.

After changing the configuration, reload the agent:

```txt
gpg-connect-agent reloadagent /bye
```

## Usage

```shell
gpg OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `--homedir` | Select HOME dir. Default is `~/.gnupg` (GNUPGHOME). |
| `--keyid-format long` | Display key IDs with 16 characters (used on git and pass). |
| `-k` `--list-keys` `--list-public-keys` | List public keys. |
| `-K` `--list-secret-keys` | List secret keys. |
| `-c` `--symmetric` | Encrypt a FILE using symmetric cipher. |
| `-e` `--encrypt` | Encrypt data to one or more public keys. |
| `-r` `--recipient` | Encrypt for user id NAME. Often used with `--encrypt`. |
| `--default-recipient-self` | Use the default key as default recipient if option `--recipient` is not used. |
| `-d` `--decrypt` | Decrypt the FILE. |
| `--full-generate-key` | Generate a new key pair. |
| `--delete-keys NAME` | Remove key from the public keyring. |
| `--delete-secret-keys NAME` | Remove key from the secret keyring. |
| `-a` `--armor` | Create ASCII armored output (key.asc). |
| `-o` `--output` | Write output to FILE. |
| `--export [KEYID!]` | Export keys (usually used with -a and --output). |
| `--export-secret-keys [KEYID!]` | Export secret keys (usually used with `-a` and `-o`). |
| `--export-ownertrust` | Export ownertrust values. |
| `--import FILE` | Import keys. |
| `--import-ownertrust FILE` | Import ownertrust values. |
| `--gen-revoke FILE` | Generate a revocation certificate. |
| `--send-keys KEYID` | Export keys to a keyserver. |
| `--recv-keys KEYID` | Import keys from a keyserver. |
| `--search-keys NAME` | Search the keyserver for the given names. |

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

### Update user info

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

### Verify file signature

Given a signature file `.sig` and the data/binary file you want to check (ex: `.efi`):

```shell
gpg --keyserver-options auto-key-retrieve --verify ipxe-arch.efi.sig ipxe-arch.efi
```

## Advanced

Remove only private master key:

```shell
## Find master key keygrip
gpg --with-keygrip --list-key MASTERKEYID

## Securely delete it from .gnupg folder
rm -P $HOME/.gnupg/private-keys-v1.d/KEYGRIP.key
```

Always ask for password:

```shell
## Create/edit file ~/.gnupg/gpg-agent.conf
max-cache-ttl 0

## Kill gpg-agent process (it will restart automatically)
echo RELOADAGENT | gpg-connect-agent
```
