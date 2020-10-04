query=$(wget -qO- https://api.weather.gov/gridpoints/AKQ/72,67/forecast \
| grep -E 'name|shortForecast' \
| head -n6 \
| sed 's/"name": //' \
| sed 's/"shortForecast"://' \
| xargs \
| sed 's/[\"]//g' \
| sed 's/\,$//' \
| sed -e 's/\,[[:space:]]* /\,/g')


echo $query | awk 'BEGIN {FS = ","}; {printf "%-20s%-20s%-20s\n%-20s%-20s%-20s", $1, $3, $5, $2, $4, $6  }'
