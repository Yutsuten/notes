---
title: Boto3
---

## Install

```shell
pip install boto3
```

## Polly

```python
import boto3

polly = boto3.client('polly')

def get_answer_mp3():
    message = 'Hello!'
    response = polly.synthesize_speech(OutputFormat='mp3', Text=message, VoiceId='Mizuki')
    if response['ResponseMetadata']['HTTPStatusCode'] == 200:
        with open('sound.mp3', 'wb') as audio_file:
            audio_file.write(response['AudioStream'].read())
    return 'site.com/sound.mp3'
```
