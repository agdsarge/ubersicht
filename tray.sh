search=$(pgrep -l "KeepingYouAwake|caffeinate|Flux" | tr '\n' ' ') 

if [[ -n $(echo $search | grep Keep) ]]; then 
    if [[ -n $(echo $search | grep caff) ]]; then 
        caff="K+";
    else
        caff="K"
    fi
fi
if [[ -n $(echo $search | grep Flux) ]]; then flux="Flux"; fi

printf "%s %s" $caff $flux
