.PHONY: build start stop test build-dist build-watch bash logs

build:
	docker-compose build
	docker-compose run --rm app yarn

start:
	docker-compose up -d

stop:
	docker-compose down

test:
	docker-compose run --rm app yarn test

test-watch:
	docker-compose run --rm app yarn test:watch

build-dist:
	$(if $(ENV),docker-compose run --rm app yarn build:$(ENV) , @echo "Please, give the ENV parameter (Ex.: ENV=dev | ENV=prod)")

build-watch:
	docker-compose run --rm app yarn build:watch

bash:
	docker exec -it onsite-components-react sh

logs:
	docker-compose logs -f
