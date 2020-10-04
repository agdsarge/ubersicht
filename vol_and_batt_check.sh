# battery_check.sh
# checks the battery level. indicates if the battery is currently charging.

# status=$(ioreg -c AppleSmartBattery -r | grep -E 'sCharging|AppleRawMaxCapacity|AppleRawCurrentCapacity|ExternalConnected' | sed 's/.*=\ //')

audio_info=$(osascript -e 'get volume settings' | sed -E 's/[^\,]*\://' | sed 's/\,.*\:/\ /')

loudness=$(echo $audio_info | awk '{print $1}')
muted=$(echo $audio_info | awk '{print $2}')

if [[ $muted == 'true' ]]; then
    output=-$loudness-
else
    output=$loudness
fi



power_info=$(ioreg -c AppleSmartBattery -r | grep -E 'sCha|wMa|awC|lCo' | sed 's/.*=\ //')

pres_percentage=$(echo $power_info | awk '{printf "%.0f", 100 * $1/$2}')
chrg_status=$(echo $power_info | awk '{print $3}')
plugged=$(echo $power_info | awk '{print $4}')

if [[ $chrg_status == 'Yes' ]]; then
    open='{'
    close='}'
elif [[ $plugged == 'Yes' ]]; then
    open='['
    close=']'
fi

power=$open$pres_percentage$close

printf "%s | %s" $output $power 
