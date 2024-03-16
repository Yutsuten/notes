---
title: NeoMutt
ref: https://neomutt.org/
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
mutt_oauth2 ~/.cache/neomutt/oauth2/'myemail@gmail.com'.tokens --verbose --test
```

Finally add the configuration to `~/.config/neomutt/neomuttrc`:

```shell
# Credentials
set imap_user = 'myuser@gmail.com'
set imap_authenticators = 'oauthbearer:xoauth2'
set imap_oauth_refresh_command = "mutt_oauth2 ~/.cache/neomutt/oauth2/${imap_user}.tokens --client-id ${GMAIL_CLIENT_ID} --client-secret ${GMAIL_CLIENT_SECRET}"
set smtp_url = "smtps://${imap_user}@smtp.gmail.com:465"
set smtp_authenticators = ${imap_authenticators}
set smtp_oauth_refresh_command = ${imap_oauth_refresh_command}

# Folders
set folder = "imaps://${imap_user}@imap.gmail.com:993/"
set spoolfile = +INBOX
mailboxes ${spoolfile}
```

With this one should be able to check the emails.
Still a very basic configuration, but it works.

## Multi accounts

This is for showing multiple accounts in the sidebar at the same time.

To accomplish this, I use the following file structure in the configuration folder:

```txt
neomuttrc
personal/
  credentials.neomuttrc
  folders.neomuttrc
  settings.neomuttrc
proton/
  credentials.neomuttrc
  folders.neomuttrc
  settings.neomuttrc
```

There are some common settings in `neomuttrc`,
and account specific settings inside each folder.

For the common settings,
I load only one account on startup (for performance),
and open other accounts using shortcuts.

```shell
# neomuttrc
set sidebar_format   = '%D%* %<N?%N>'
set sidebar_visible  = yes
color sidebar_highlight brightblack white

# Default mailbox
source ~/.config/neomutt/proton/folders.neomuttrc

# Hooks
folder-hook 'accountname@proton.me'  'source ~/.config/neomutt/proton/settings.neomuttrc'
folder-hook 'accountname@gmail.com'  'source ~/.config/neomutt/personal/settings.neomuttrc'

account-hook 'accountname@proton.me' 'source ~/.config/neomutt/proton/credentials.neomuttrc'
account-hook 'accountname@gmail.com' 'source ~/.config/neomutt/personal/credentials.neomuttrc'

# Macros
macro index,pager <f3> '<enter-command>source ~/.config/neomutt/proton/folders.neomuttrc<enter><change-folder>!<enter>'
macro index,pager <f4> '<enter-command>source ~/.config/neomutt/personal/folders.neomuttrc<enter><change-folder>!<enter>'

# Keybindings
bind index,pager \CP sidebar-prev
bind index,pager \CN sidebar-next
bind index,pager \CO sidebar-open
```

So I have the following accounts:

- `F3` - Proton
- `F4` - Personal

If I ever want to drop all mailboxes,
run `:unmailboxes *`.

There are also keybindings for switching mailboxes:

- `Ctrl+P` - Previous entry of sidebar
- `Ctrl+N` - Next entry of sidebar
- `Ctrl+O` - Open selected entry of sidebar

As for each account settings:

`credentials.neomuttrc` is used by the `account-hook` command,
may be triggered "randomly" in the background.

```shell
# proton/credentials.neomuttrc
set imap_user           = 'accountname@proton.me'
set imap_authenticators = 'login'
set imap_pass           = 'mysecretpass'
set smtp_url            = "smtp://${imap_user}@127.0.0.1:1025"
set smtp_authenticators = ${imap_authenticators}
set smtp_pass           = ${imap_pass}
```

`folders.neomuttrc` is meant to be run only once,
when adding the mailboxes.

```shell
# proton/folders.neomuttrc
source ~/.config/neomutt/proton/settings.neomuttrc
source ~/.config/neomutt/proton/credentials.neomuttrc

named-mailboxes ' Proton'  ${spoolfile}
named-mailboxes '   Sent'  +Sent
named-mailboxes '   Spam'  +Spam
named-mailboxes '   Trash' ${trash}
```

`settings.neomuttrc` is used by the `folder-hook` command,
is triggered whenever the user changes a folder.

```shell
# proton/settings.neomuttrc
color status black magenta

set realname = 'My Name'
set from     = 'accountname@proton.me'

set folder    = "imap://${from}@127.0.0.1:1143/"
set spoolfile = +INBOX
set trash     = +Trash
```
