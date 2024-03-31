---
title: Configuration
ref: https://neomutt.org/guide/configuration
---

## Cache configuration

Some very basic setup, no email configuration yet.

Create cache directories:

```shell
mkdir -p ~/.cache/neomutt/headers ~/.cache/neomutt/bodies ~/.cache/neomutt/oauth2
touch ~/.cache/neomutt/certificates
```

Create `~/.config/neomutt/neomuttrc` and add the following:

```shell
# Cache
set header_cache     = ~/.cache/neomutt/headers
set message_cachedir = ~/.cache/neomutt/bodies
set certificate_file = ~/.cache/neomutt/certificates
```

## Connect to account using oauth2

Example for gmail.

Download and make the following script executable.
Place it in the `PATH`.

```shell
curl -Lo ~/.local/bin/mutt_oauth2 'https://github.com/neomutt/neomutt/raw/main/contrib/oauth2/mutt_oauth2.py'
chmod u+x ~/.local/bin/mutt_oauth2
```

For the initial setup, create an
[app registration](https://github.com/neomutt/neomutt/tree/main/contrib/oauth2#create-an-app-registration)
to get the `client-id` and `client-secret`.
Set those as environment variables to keep the config file clean.

To make the initial setup, run this:

```shell
mutt_oauth2 ~/.cache/neomutt/oauth2/'myemail@gmail.com'.tokens \
  --authorize \
  --provider google \
  --client-id ${GMAIL_CLIENT_ID} \
  --client-secret ${GMAIL_CLIENT_SECRET} \
  --authflow localhostauthcode
```

Follow the instructions (open the link in the browser and accept everything).

After it, check if IMAP/POP/SMTP are working:

```shell
mutt_oauth2 ~/.cache/neomutt/oauth2/'myemail@gmail.com'.tokens --test
```

Finally add the configuration to `~/.config/neomutt/neomuttrc`:

```shell
# Authentication settings
set imap_user = 'myuser@gmail.com'
set imap_authenticators = 'oauthbearer:xoauth2'
set imap_oauth_refresh_command = "mutt_oauth2 ~/.cache/neomutt/oauth2/${imap_user}.tokens"
set smtp_authenticators = ${imap_authenticators}
set smtp_oauth_refresh_command = ${imap_oauth_refresh_command}

# General settings
set smtp_url = "smtps://${imap_user}@smtp.gmail.com:465"
set folder = "imaps://${imap_user}@imap.gmail.com:993/"
set spoolfile = +INBOX
mailboxes ${spoolfile}
```

With this one should be able to check the emails.
Still a very basic configuration, but it works.

## Multiple accounts

This is for using multiple accounts at the same time.

To accomplish this, I use the following file structure in the configuration folder:

```txt
neomuttrc
accounts.rc
gmail/
  auth.rc
  general.rc
  init.rc
proton/
  auth.rc
  general.rc
  init.rc
```

General Neomutt settings are saved at `neomuttrc`.
At the end of `neomuttrc`, import `accounts.rc`.

:::tip
Manage `neomuttrc` in git,
but keep a separated backup of the other files.
Here's [my neomuttrc in GitHub](https://github.com/Yutsuten/linux-config/blob/main/tools/neomutt/neomuttrc).
:::

Inside `accounts.rc`,
I load only one account on startup (for performance),
and open other accounts using shortcuts.

```shell
# accounts.rc
source ~/.config/neomutt/proton/init.rc

# Shortcuts
macro index,pager <F2>  '<enter-command>source ~/.config/neomutt/proton/init.rc<enter>'
macro index,pager <F3>  '<enter-command>source ~/.config/neomutt/gmail/init.rc<enter>'
macro index,pager <F12> '<enter-command>unmailboxes * unhook *<enter>'
```

So I have the following accounts:

- `F2` - Proton
- `F3` - Gmail
- `F12` - Clear all mailboxes

As for each account settings:

`init.rc` is meant to be run only once,
used to setup the hooks and the mailboxes.

:::info NOTE
My interface is setup for Japanese.
:::

:::warning
`account-hook` seems to work *only* before `mailboxes` or `named-mailboxes`.
After it, seems that it doesn't work at all.
(May be a bug in my NeoMutt version, but be warned anyway)
:::

```shell
# proton/init.rc
set folder    = 'imap://accountname@proton.me@127.0.0.1:1143/'
set spoolfile = +INBOX

folder-hook  'proton' 'source ~/.config/neomutt/proton/general.rc'
account-hook 'proton' 'source ~/.config/neomutt/proton/auth.rc'

named-mailboxes ' Proton'      +INBOX
named-mailboxes ' ├─ 送信済み' +Sent
named-mailboxes ' └─ ゴミ箱'   +Trash
```

`general.rc` is used by the `folder-hook` command,
it should contain everything except
initialization and authentication settings.

```shell
# proton/general.rc
set realname  = 'My Name'
set from      = 'accountname@proton.me'

set folder    = "imap://${from}@127.0.0.1:1143/"
set spoolfile = +INBOX
set trash     = +Trash
set smtp_url  = "smtp://${from}@127.0.0.1:1025"

color status black magenta
```

`auth.rc` is used by the `account-hook` command,
which may be triggered in the background.
Should contain only authentication or connection related settings (user, pass, tunnel).

```shell
# proton/auth.rc
set imap_user           = 'accountname@proton.me'
set imap_authenticators = 'login'
set imap_pass           = 'mysecretpass'
set smtp_authenticators = ${imap_authenticators}
set smtp_pass           = ${imap_pass}
```
