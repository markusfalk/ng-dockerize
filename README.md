# Dockerize your Angular with Schematics

This schematic adds configuration files and shell scripts to configure and run your angular project in a docker container.

## Usage

### Adjust angular project

```shell
ng add ng-dockerize
```

### Build Docker Image and run it

```shell
sh docker-build.sh
docker-compose up
```

## Requirements

* schematic compatible angular cli
* adds a shell script. You need to be able to run it for now.
