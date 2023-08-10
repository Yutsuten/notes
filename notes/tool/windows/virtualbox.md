---
title: Virtualbox
---

## Sharing folders between guest and host

- [Ref1](http://www.tomshardware.com/faq/id-1957309/install-virtualbox-guest-additions-linux-mint.html)
- [Ref2](https://www.techrepublic.com/article/how-to-share-folders-between-guest-and-host-in-virtualbox/)

### Install Guest Additions

1. Boot the guest OS
2. Click `Devices > Insert Guest Additions CD Image`
3. If prompted, click Run. Else, run `sudo bash ./VBoxLinuxAdditions.run` inside the image
4. Add your user to vboxsf group: `sudo usermod -aG vboxsf $(whoami)`

### Register the shared folder

1. Go to `Settings > Shared Folders`
2. Add the folder marking `Auto-mount` and `Make permanent`

### Mount the shared folder

1. On guest's terminal, run `sudo mount -t vboxsf Public ~/Public`
