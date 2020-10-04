
fetch=$(wget -qO- https://media.wm.edu/content/as/kecklab/Weather/KeckWeather.htm | sed '86q;d')
fahrenheit=$(echo $fetch | awk '{printf "%.1f", 1 * $1}')
celsius=$(echo $fetch | awk '{printf "%.1f", (5 / 9) * $1 - (160 / 9)}')

printf "%s | %s" $fahrenheit $celsius
