#!/bin/bash

# Check how many arguments are provided and display them (max 3)
if [ $# -eq 0 ]; then
    echo "No argument supplied"
else
    for i in {1 .. 3}; do
        if [ -n "${!i}" ]; then
            echo "${!i}"
        fi
    done
fi
