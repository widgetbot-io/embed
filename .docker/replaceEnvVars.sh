#!/bin/bash
set -e
echo "Script replacing dynamically environment variables in all files"
echo " usage replaceEnvVars.sh BUILD_PATH"
echo " default BUILD_PATH = ."
echo

BUILD_PATH="."
if [ -n "$1" ]; then
    BUILD_PATH=$1
fi

echo "Replacing environment variables"

replace() {
    find $BUILD_PATH/ -name '*.js' | xargs sed -i "s|{$1}|$2|g"
    find $BUILD_PATH/ -name '*.html' | xargs sed -i "s|{$1}|$2|g"
}

# replace all the environments
replace CUSTOM_SERVER_ENDPOINT ${CUSTOM_SERVER_ENDPOINT}
echo "Done"