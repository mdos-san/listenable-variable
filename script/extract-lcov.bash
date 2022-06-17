#!/bin/bash

cat ./coverage/lcov.info | sed 's/\(SF:src\/\)\(.*src\/\)\(.*\)/\1\3/' > ./lcov.info
