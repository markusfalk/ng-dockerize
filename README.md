# Dockerize your Angular with Schematics

This schematic adds configuration files and shell scripts to configure and run your angular project in a docker container.

## Usage

### Adjust angular project

```shell
ng add ng-dockerize
```

### Options

| option | default | description |
| port | 9999 | external port number for your angular container |
| registry | "" | url to docker hub or your registry |
| username | "" | docker registry/hub username |
| push | true | push to your registry when building |

### Build Docker Image and run it

```shell
sh docker-build.sh
docker-compose up
```

### Look what you made me do

Go to http://localhost:9999

## Requirements

* schematic compatible angular cli (tested with Angular 7)
* adds a shell script. You need to be able to run it for now.
