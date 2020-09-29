#battery_check.sh
#checks the battery level. indicates if the battery is currently charging.

chrg_status=$(ioreg -c AppleSmartBattery -r | awk '/IsCharging/ {print $3}')
max_capacity=$(ioreg -c AppleSmartBattery -r | awk '/AppleRawMaxCapacity/ {print $3}')
pres_capacity=$(ioreg -c AppleSmartBattery -r | awk '/AppleRawCurrentCapacity/ {print $3}')
plugged=$(ioreg -c AppleSmartBattery -r | awk '/ExternalConnected/ {print $3}')

pres_percentage=$(echo $max_capacity $pres_capacity | awk '{printf "%.0f \n", 100 * $2/$1}')


if [[ $chrg_status == 'Yes' ]]; then
        printf "{%s}" $pres_percentage 
elif [[ $plugged == 'Yes' ]]; then
        printf "[%s]" $pres_percentage
else
        printf "%s" $pres_percentage

fi
