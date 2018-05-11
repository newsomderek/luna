variable "app_name" {
  type        = "string"
  description = "Name of Heroku app. No spaces. Dashes instead of underscores."
}

variable "heroku_email" {
  type = "string"
}

variable "heroku_api_key" {
  type        = "string"
  description = "https://dashboard.heroku.com/account -> API Key section -> Reveal button -> copy/paste"
}

provider "heroku" {
  email   = "${ var.heroku_email }"
  api_key = "${ var.heroku_api_key }"
}

resource "heroku_app" "default" {
  name   = "${ var.app_name }"
  region = "us"
}

resource "heroku_addon" "mongolab" {
  app  = "${ var.app_name }"
  plan = "mongolab:sandbox"
}

resource "heroku_addon" "auth0" {
  app = "${ var.app_name }"
  plan = "auth0:free"
}
