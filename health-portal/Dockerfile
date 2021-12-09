FROM nginx:alpine

# generates a cert and configures a listener on 443
RUN apk add openssl

COPY extensions.cnf .
COPY https.conf /etc/nginx/conf.d/

# these steps compatible with MacOS Catalina and newer https://support.apple.com/en-us/HT210176

# self-signed CA cert and key
RUN openssl req -x509 \
    -newkey rsa:2048 -nodes -keyout CA.key \
    -subj "/CN=CA localhost/C=US/ST=CO/O=Ping Identity" \
    -days 825 -sha256 -out CA.crt

# https cert request
RUN openssl req -new \
    -newkey rsa:2048 -nodes -keyout /etc/ssl/private/https.key \
    -subj "/CN=localhost/C=US/ST=CO/O=Ping Identity" \
    -addext "subjectAltName=DNS:localhost" \
    -addext "extendedKeyUsage=serverAuth" \
    -out /etc/ssl/certs/https.csr

# https cert
RUN openssl x509 -req \
    -in /etc/ssl/certs/https.csr \
    -CA CA.crt -CAkey CA.key -CAcreateserial \
    -extfile extensions.cnf \
    -days 825 -sha256 -out /etc/ssl/certs/https.crt

# uses the nginx runtime envsubst capability to configure the javascript
ENV NGINX_ENVSUBST_OUTPUT_DIR=/usr/share/nginx/html/assets
COPY config.js.template /etc/nginx/templates/

# the rest of the SPA
COPY . /usr/share/nginx/html/
