up:
	docker-compose up -d
build:
	docker-compose build --no-cache --force-rm
laravel-install:
	docker-compose exec app composer create-project --prefer-dist "laravel/laravel=6.*" .
app-key-generate:
	docker-compose exec app php artisan key:generate
create-project:
#	@make build
#	@make up
	@make laravel-install
	@make app-key-generate
	docker-compose exec app php artisan storage:link
	docker-compose exec app chmod -R 777 storage bootstrap/cache
#	@make fresh
install-recommend-packages:
	docker-compose exec app composer require doctrine/dbal "^2"
	docker-compose exec app composer require --dev ucan-lab/laravel-dacapo
	docker-compose exec app composer require --dev barryvdh/laravel-ide-helper "^2.6.3"
#	docker-compose exec app composer update symfony/var-dumper
#	docker-compose exec app composer require --dev beyondcode/laravel-dump-server "^1.7.0"
	docker-compose exec app composer require --dev barryvdh/laravel-debugbar
	docker-compose exec app composer require --dev roave/security-advisories:dev-master
	docker-compose exec app php artisan vendor:publish --provider="BeyondCode\DumpServer\DumpServerServiceProvider"
	docker-compose exec app php artisan vendor:publish --provider="Barryvdh\Debugbar\ServiceProvider"
install-react:
	docker-compose exec app composer require laravel/ui 1.*
	docker-compose exec app php artisan ui react --auth
	@make npm-install
	@make npm-dev
	docker-compose exec web npm i -D react-router-dom
	docker-compose exec web npm i -D typescript @types/node @types/react @types/react-dom @types/react-router-dom @types/react-helmet @types/webpack-env @typescript-eslint/eslint-plugin @typescript-eslint/parser
	docker-compose exec web npm i -D prettier
	docker-compose exec web npm i -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier
init:
	docker-compose up -d --build
	docker-compose exec app composer install
	docker-compose exec app cp .env.example .env
	@make app-key-generate
	docker-compose exec app php artisan storage:link
	docker-compose exec app chmod -R 777 storage bootstrap/cache
	@make fresh
remake:
	@make destroy
	@make init
stop:
	docker-compose stop
down:
	docker-compose down --remove-orphans
restart:
	@make down
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker-compose down --volumes --remove-orphans
ps:
	docker-compose ps
logs:
	docker-compose logs
logs-watch:
	docker-compose logs --follow
log-web:
	docker-compose logs web
log-web-watch:
	docker-compose logs --follow web
log-app:
	docker-compose logs app
log-app-watch:
	docker-compose logs --follow app
# log-db:
# 	docker-compose logs db
# log-db-watch:
# 	docker-compose logs --follow db
web:
	docker-compose exec web ash
app:
	docker-compose exec app bash
migrate:
	docker-compose exec app php artisan migrate
fresh:
	docker-compose exec app php artisan migrate:fresh --seed
seed:
	docker-compose exec app php artisan db:seed
dacapo:
	docker-compose exec app php artisan dacapo
rollback-test:
	docker-compose exec app php artisan migrate:fresh
	docker-compose exec app php artisan migrate:refresh
tinker:
	docker-compose exec app php artisan tinker
test:
	docker-compose exec app php artisan test
dump-autoload:
	docker-compose exec app composer dump-autoload -o
composer-update:
	docker-compose exec app composer update --no-scripts
optimize:
	docker-compose exec app php artisan optimize
optimize-clear:
	docker-compose exec app php artisan optimize:clear
cache:
	@make dump-autoload
	@make optimize
	docker-compose exec app php artisan event:cache
	docker-compose exec app php artisan view:cache
cache-clear:
	docker-compose exec app composer clear-cache
	@make optimize-clear
	docker-compose exec app php artisan event:clear
npm:
	@make npm-install
npm-install:
	docker-compose exec web npm install
npm-dev:
	docker-compose exec web npm run dev
npm-watch:
	docker-compose exec web npm run watch -- --watch-poll=5000
npm-watch-poll:
	docker-compose exec web npm run watch-poll
npm-hot:
	docker-compose exec web npm run hot
npm-eslint:
	docker-compose exec web npm run eslint
npm-format:
	docker-compose exec web npm run format
#yarn:
#	docker-compose exec web yarn
#yarn-install:
#	@make yarn
#yarn-dev:
#	docker-compose exec web yarn dev
#yarn-watch:
#	docker-compose exec web yarn watch
#yarn-watch-poll:
#	docker-compose exec web yarn watch-poll
#yarn-hot:
#	docker-compose exec web yarn hot
# db:
# 	docker-compose exec db bash
#sql:
#	docker-compose exec db bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'
redis:
	docker-compose exec redis redis-cli
ide-helper:
	docker-compose exec app php artisan clear-compiled
	docker-compose exec app php artisan ide-helper:generate
	docker-compose exec app php artisan ide-helper:meta
	docker-compose exec app php artisan ide-helper:models --nowrite