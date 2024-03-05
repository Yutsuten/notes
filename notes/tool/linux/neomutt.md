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
  --verbose \
  --authorize \
  --provider google \
  --client-id $GMAIL_CLIENT_ID \
  --client-secret $GMAIL_CLIENT_SECRET \
  --authflow localhostauthcode
```

Follow the instructions (open the link in the browser and accept everything).

After it, check if IMAP/POP/SMTP are working:

```shell
mutt_oauth2 ~/.cache/neomutt/oauth2/'myemail@gmail.com'.tokens --verbose --test
```

Finally add the configuration to `~/.config/neomutt/neomuttrc`:

```shell
# Gmail account
set ssl_force_tls = yes
set folder = "imaps://imap.gmail.com:993"
set spoolfile = "+INBOX"
set imap_user = "myuser@gmail.com"
set imap_authenticators = "oauthbearer:xoauth2"
set imap_oauth_refresh_command = "mutt_oauth2 ~/.cache/neomutt/oauth2/${imap_user}.tokens --client-id ${GMAIL_CLIENT_ID} --client-secret ${GMAIL_CLIENT_SECRET}"
set smtp_url = "smtps://${imap_user}@smtp.gmail.com:465"
set smtp_authenticators = ${imap_authenticators}
set smtp_oauth_refresh_command = ${imap_oauth_refresh_command}
```

With this one should be able to check the emails.
Still a very basic configuration, but it works.
