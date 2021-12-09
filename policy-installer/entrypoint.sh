#!/bin/sh
set -e
set -x

# it's possible the PAP starts but the URLs aren't registered yet
sleep 15

curl --insecure \
     -H "x-user-id: admin" \
     --retry 50 \
     --retry-connrefused \
     --retry-delay 9 \
     --retry-max-time 240 \
     https://${PAP_INTERNAL_HOSTNAME}:${PAP_HTTPS_PORT}/api/version-control/branches \
 | jq ".data[] | .name" \
 > branch_names.txt

set +e
grep "Default Policies" branch_names.txt && exit 0
set -e

if [ -z "$@" ]; then
  exec curl -s --insecure \
            -H "x-user-id: admin" \
            -H "content-type: application/json" \
            -d @./policy.SNAPSHOT \
            -X POST \
            https://${PAP_INTERNAL_HOSTNAME}:${PAP_HTTPS_PORT}/api/snapshot/Default%20Policies/import
else
  exec "$@"
fi
