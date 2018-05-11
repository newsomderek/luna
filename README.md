# luna
Luna is my own personal task management tool that actually works for me

## Setup Dev Environment

### web dev setup
```
git clone https://github.com/newsomderek/luna.git
cd web
yarn
yarn start
```

### web tests
```
cd web
yarn test
```

### setup heroku environment (may have to run several times)
```
cd devops
terraform init
terraform plan -out dev.plan
terraform apply dev.plan
```

### required tools

* yarn
    ```
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update
    sudo apt-get install yarn
    ```

* docker

    ```
    sudo apt-get remove docker docker-engine docker.io
    sudo apt-get update
    sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key fingerprint 0EBFCD88
    sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) \
        stable"
    sudo apt-get update
    sudo apt-get install docker-ce
    ```

* terraform - install from website
