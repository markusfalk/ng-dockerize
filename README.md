# Dockerize your Angular with Schematics

This schematic adds configuration files and shell scripts to configure and run your angular project in a docker container.

## tl;dr (Why?)

The original goal of this project is to give back-end developers a running angular front-end during development without them having to clone the front-end repository (assuming you have different repositories for back-end and front-end code), manage node versions, npm install everything, compile angular and so on. Or in short - deal with all the front-end technologies and compilation steps.

To achieve this, a build server could create an image with the setup provided by this schematic and your back-end developers can easily pull the image and start a container with your latest front-end.

If you are using [Story Branches](https://github.com/OpenSourceWorkflow/git-workflow) in your git workflow, you could tag the image with id of the story you are working on. This way you can publish multiple front-ends with their correspondig state of development.

```shell
# basic usage example with jira issue id as tag
# this will result in an image called:
# localhost:5000/your-angular-project:PROJECT-1234
ng add ng-dockerize -tag=PROJECT-1234
```

Then your back-end developers (or anyone else for that matter) can get the image like so:

```shell
docker run --rm -d -p 9999:9999 localhost:5000/angular-dockerize:PROJECT-1234
```

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
| dockerport | 5000 | port number of your docker hub/registry |
| packagename | package.json (name) | used as name for the docker image |
| push | true | push to your registry when building |
| registry | "" | url to docker hub or your registry |
| tag | package.json (version) | docker image tag |
| username | "" | docker registry/hub username |

Options are used as flags.

```shell
# example usage
ng add -ng-dockerize --port=7777 --push=false
```

### Build Docker Image and run it

```shell
# build the image
sh docker-build.sh

# Start The Container
docker-compose up
```

### Look what you made me do :musical_note:

Go to http://localhost:9999

## Requirements and Known Issues

* schematic compatible angular cli (tested with Angular 7)
* assumes angular app in /dist/<package-name>/*
* adds a shell script. If you cant run shell scripts you can copy the docker commands and run them yourself
