FROM alpine:latest
RUN apk add curl jq
COPY entrypoint.sh policy.SNAPSHOT ./
ENV PAP_INTERNAL_HOSTNAME pingauthorize-pap
ENV PAP_HTTPS_PORT 38443
ENTRYPOINT ["./entrypoint.sh"]
CMD []
