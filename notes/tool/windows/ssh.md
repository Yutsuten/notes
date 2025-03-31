---
title: Ssh
ref: https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement
---

## Install

```powershell
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
Add-WindowsCapability -Online -Name OpenSSH.Server
Start-Service sshd
Get-Service sshd
Set-Service -Name sshd -StartupType 'Automatic'
```

Find the IP address to be used when running the SSH command:

```bat
ipconfig /all
```

## Configuration

Configuration file is at `%PROGRAMDATA%\ssh\sshd_config`.

### SFTP

If enabling SFTP, make sure to:

- Have the bellow configuration on `sshd_config`
- `sftp-server.exe` is in the `%PATH%` (usually at `C:\Program Files\OpenSSH`)

```txt
Subsystem  sftp  sftp-server.exe
```

From a remote linux machine, you can mount a Windows folder with:

```shell
sshfs user@windows_ip:/C:/Users/myuser /media/windows -o nodev,nosuid,noexec,idmap=user,reconnect,umask=137
```

## Authorize keys

To login using a SSH key instead of a password,
you must register the public key in the Windows you want to login into.

The path of the configuration file is different if your user have Administrative rights.

| User | Path |
| --- | --- |
| Standard | `%USERPROFILE%\.ssh\authorized_keys` |
| Admin | `%PROGRAMDATA%\ssh\administrators_authorized_keys` |

1. Create the file if it already not exists;
2. Append the public key into it;
3. Admin only: Run the command bellow:

```powershell
icacls.exe "C:\ProgramData\ssh\administrators_authorized_keys" /inheritance:r /grant "Administrators:F" /grant "SYSTEM:F"
```

## Change default shell

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "PathToShell" -PropertyType String -Force
```

| Shell    | Path                                |
| -------- | ----------------------------------- |
| Git Bash | `C:\Program Files\Git\bin\bash.exe` |
| Bash     | `C:\WINDOWS\System32\bash.exe`      |
| WSL      | `C:\Windows\System32\wsl.exe`       |

Using Bash or WSL may give issues when using tools like `sshfs`.

WSL **won't** work when trying to run commands remotely (not interactive): `ssh windows <command>`.

For WSL, change the default shell with (run inside WSL2):

```shell
sudo chsh -s $(which zsh)
```
