# -*- coding: utf-8 -*-
import requests
import sys

url = 'http://localhost:5000/api'

text = u'とっても綺麗なクリスマスツリー'
client_id = 'CH001'

argc = len(sys.argv)
if argc > 1:
    text = sys.argv[1]
if argc > 2:
    client_id = sys.argv[2]

payload = {'text': text, 'clientID': client_id}

r = requests.post(url, json=payload)
print(r.text)
