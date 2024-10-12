---
title: Mining
ref: https://www.blockchain-council.org/ethereum/how-to-mine-ethereum/
---

## TeamRedMiner

Download its executable from [here](https://www.teamredminer.com/),
and install OpenCL compatible with your graphics card.
Example for AMD GPU:

```shell
sudo pacman -S rocm-opencl-runtime
```

Choose a pool, like [nanopool (ETC)](https://etc.nanopool.org/)
and start mining with:

```shell
teamredminer -a etchash -o stratum+ssl://etc-jp1.nanopool.org:10143 -u 0xWALLETd28fZm4OfcxaY1mUTpZ2HLU09r3et94azf.WorkerName_J9Gu9MO3
```

- `-a` If you choose the wrong algorithm, it won't mine anything
- `-o` URL to the pool
- `-u` Your wallet address + worker name separated by a dot (worker name will be shown in the pool stats)

Read more about mining:

- [Reddit EtherMining](https://www.reddit.com/r/EtherMining/wiki/index/)
- [Pools](https://miningpoolstats.stream/)
- [Nanopool FAQ](https://help.nanopool.org/hc/en-us/articles/4898877639197-FAQ)
