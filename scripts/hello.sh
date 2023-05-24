#!/bin/sh

say_hello() {
  echo "Hello!"
}

# docker compose build --build-arg CACHE_DATE=$(date +%Y-%m-%d:%H:%M:%S) --progress=plain web
say_hello
sleep 1
say_hello
sleep 1
say_hello
sleep 1
say_hello