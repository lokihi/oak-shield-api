import requests

print(requests.post('http://localhost:5000/events').content)
