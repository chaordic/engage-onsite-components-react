# Engage-onsite-components-react

Onsite components in react.

**Obs:** is recommended use yarn instead of npm.

## Dependencies

- GNU make
- Docker
- Docker-compose

## Commands

- `make build`: Build docker image.
- `make start`: Start docker container executing the storybook. (Access localhost:9001).
- `make test`: Test stylelint, eslint and execute Karma tests.
- `make test-watch`: Watch and test `.spec.js` files.
- `make stop`: Stop docker container.
- `make logs`: Show storybook logs for debug purposes.
- `make bash`: Enter on container bash for container debug purposes.
- `make build-dist (ENV=dev | ENV=prod)`: Build the project on `dist/`.
- `make build-watch`: Build and watch the project on `dist/` on dev mode.
