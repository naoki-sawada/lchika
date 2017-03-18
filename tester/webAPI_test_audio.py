# -*- coding: utf-8 -*-
import requests
import sys

url = 'http://localhost:5000/api/audio'

# audio_fname = 'christmas.mp3'
audio_fname = 'happychrismas.mp3'
client_id = 'CH001'

argc = len(sys.argv)
if argc > 1:
    audio_fname = sys.argv[1]
if argc > 2:
    client_id = sys.argv[2]

payload = {'audio': audio_fname, 'clientID': client_id}

r = requests.post(url, json=payload)
#print(r.text)
