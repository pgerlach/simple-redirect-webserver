# simple-redirect-webserver

Simple webserver that redirects all requests to another domain (useful when switching domains)

## Deployment

The base url to which the server redirects has to be set in the environent variable REDIRECT_BASE_URL.

It can be deployed as is on Heroku (see `Procfile`) or any hosting that runs `npm start`.

## Examples

```
$ export REDIRECT_BASE_URL=https://www.example.com
$ npm start
```

will redirect all requests to https://www.example.com.

```
$ wget http://localhost:5000/test?param=value
--2016-02-03 01:40:19--  http://localhost:5000/test?param=value
Resolving localhost... ::1, 127.0.0.1, fe80::1
Connecting to localhost|::1|:5000... connected.
HTTP request sent, awaiting response... 301 Moved Permanently
Location: https://www.example.com/test?param=value [following]
```
