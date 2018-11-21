# Dockerize your Angular with Schematics

This schematic adds configuration files and shell scripts to configure and run your angular project in a docker container.

## Usage

### Adjust angular project

```shell
# basic usage
ng add ng-dockerize
```

### Options

| option | default | description |
| ------ | ------- | ----------- |
| angularport | 9999 | external port number for your angular container |
| dockerport | 5000 | port number of your docker up/registry |
| packagename | package.json (name) | used as name for the docker image |
| push | true | push to your registry when building |
| registry | "" | url to docker hub or your registry |
| username | "" | docker registry/hub username |
| version | package.json (version) | docker image version |

Options are used as flags.

```shell
# example usage
ng add -ng-dockerize --port=888 --push=false
```

### Build Docker Image and run it

```shell
# build the image
sh docker-build.sh

# start the container
docker-compose up
```

### Look what you made me do

Go to http://localhost:9999

## Requirements

* schematic compatible angular cli (tested with Angular 7)
* adds a shell script. You need to be able to run it for now.
