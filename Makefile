
# Introspection targets
# ---------------------

.PHONY: help
help: targets

.PHONY: targets
targets:
	@echo "\033[34mTargets\033[0m"
	@echo "\033[34m---------------------------------------------------------------\033[0m"
	@perl -nle'print $& if m{^[a-zA-Z_-\d.]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-22s\033[0m %s\n", $$1, $$2}'

# Development targets
# -------------------

.PHONY: start ## Run the server inside an IEx shell and starts the dockerized database
start: jekyll server

.PHONY: setup
setup: ## Lint the code
	bundle && npx bower install
