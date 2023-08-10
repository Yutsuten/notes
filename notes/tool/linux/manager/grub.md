---
title: Grub
ref: https://askubuntu.com/questions/1155064/grub2-create-2nd-boot-entry-with-different-kernel-command-line-options-in-grub
---

## Update configuration

Run this command as `root`:

```shell
grub-mkconfig -o /boot/grub/grub.cfg
```

## Extra entry with custom option

The file to be edited is `/etc/grub.d/10_linux`.
Copy the default `linux entry` and add the custom options:

```diff
@@ -276,6 +276,8 @@
   if [ "x$is_top_level" = xtrue ] && [ "x${GRUB_DISABLE_SUBMENU}" != xtrue ]; then
     linux_entry "${OS}" "${version}" simple \
     "${GRUB_CMDLINE_LINUX} ${GRUB_CMDLINE_LINUX_DEFAULT}"
+    linux_entry "${OS} (with NVIDIA card)" "${version}" simple \
+    "${GRUB_CMDLINE_LINUX} ${GRUB_CMDLINE_LINUX_DEFAULT} optimus-manager.startup=nvidia"

     submenu_indentation="$grub_tab"
```
