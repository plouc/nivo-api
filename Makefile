help: ## prints help
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf " > \033[36m%-20s\033[0m %s\n", $$1, $$2}'

MODULES_BIN := ./node_modules/.bin

readme: ## Generates README.md
	@node misc/readmeData.js | $(MODULES_BIN)/mustache - misc/README.mustache > README.md

watch: ## Starts api in watch mode
	@$(MODULES_BIN)/nodemon src/app.js
