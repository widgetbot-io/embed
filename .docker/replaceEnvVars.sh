#!/bin/bash
echo "Replacing environment variables in all files"

BUILD_PATH="."
if [ -n "$1" ]
then
    BUILD_PATH=$1
fi

echo "Replacing environment variables"

replace() {
    find $BUILD_PATH/ -name '*.js' | xargs sed -i "s|{$1}|$2|g"
    find $BUILD_PATH/ -name '*.html' | xargs sed -i "s|{$1}|$2|g"
}

echo ${find $BUILD_PATH/ -name '*.js'}
echo ${find $BUILD_PATH/ -name '*.html'}

echo "Replacing ${CUSTOM_SERVER_ENDPOINT}"

# replace all the environments
replace CUSTOM_SERVER_ENDPOINT ${CUSTOM_SERVER_ENDPOINT}
echo "Done"
