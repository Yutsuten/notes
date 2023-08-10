---
title: Kubernetes
---

```bash
## 1 pod = n containers
## List pods
kubectl get pods

## List pod containers
kubectl get pod podname -o jsonpath="{.spec.containers[*].name}" | sort

## See logs
kubectl logs podname -c containername -f --tail 10

## Bash
kubectl exec -it podname -c containername bash
```
