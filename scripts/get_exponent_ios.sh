#!/usr/bin/env bash

function main {
  rm -rf .expo/Exponent.app
  # Most recent iOS URL only
  ipa_url=$(curl -sS https://expo.io/--/api/v2/versions | python -c 'import sys, json; print json.load(sys.stdin)["iosUrl"]')

  temp_path='.expo/exponent-app.tar.gz'
  curl -o $temp_path "${ipa_url}"

  app_path='.expo/Exponent.app'
  mkdir -p $app_path
  tar -C $app_path -xzf $temp_path
}

main "$@"
