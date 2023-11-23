---
title: V4l2loopback
ref: https://wiki.archlinux.org/title/V4l2loopback
---

## Usage

To use it, install `v4l2loopback-dkms` and `linux-headers`.

Then load the kernel module with:

```shell
sudo modprobe -r v4l2loopback  # Restart it as needed
modprobe v4l2loopback
```

### DroidCam

[Project Homepage](https://www.dev47apps.com/droidcam/linux/)

Start sharing your phone's camera with (update the IP address as needed):

```shell
droidcam-cli $flip 192.168.0.110 4747
```

### Wf-recorder

Start sharing your screen with:

```shell
wf-recorder --muxer=v4l2 --codec=rawvideo --file=/dev/video0 -x yuv420p $flip
```
