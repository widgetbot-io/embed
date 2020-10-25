if [ -z "$CUSTOM_SERVER_ENDPOINT" ]
then
    echo "No custom server specified, using stonks.widgetbot.io"
else
    echo "Custom server specified, changing..."
    sed -i s/stonks.widgetbot.io/$CUSTOM_SERVER_ENDPOINT/g src/lib/env.ts
fi