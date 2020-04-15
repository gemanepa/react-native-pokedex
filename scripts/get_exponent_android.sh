#!/usr/bin/env bash

function main {
  rm -rf .expo/Exponent.apk
  ipa_url=$(curl -sS https://expo.io/--/api/v2/versions | python -c 'import sys, json; print json.load(sys.stdin)["androidUrl"]')

  temp_path='.expo/Exponent.apk'
  curl -o $temp_path "${ipa_url}"
}

main "$@"
