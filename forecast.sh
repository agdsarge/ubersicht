query=$(wget -qO- https://api.weather.gov/gridpoints/AKQ/72,67/forecast \
| grep -E 'name|shortForecast' \
| head -n6 \
| sed 's/"name": //' \
| sed 's/"shortForecast"//' \
| xargs \
| sed 's/[\:\"]//g' \
| sed -e 's/^[[:space:]]*//' \
| sed 's/\,$//')

printf "%s" $query

# nice BASH output (query=$(wget...))
# echo $query | awk 'BEGIN {FS = ","}; {printf " %-30s%-30s%-30s\n", $1, $3, $5 }'
# echo $query | awk 'BEGIN {FS = ","}; {printf "%-30s %-30s%-30s", $2, $4, $6 }'

