curl https://api.sprites.dev/v1/gateway/custom_api/xlu5EH_ekybWLDuKZiBzOQ
curl https://api.sprites.dev/v1/gateway/custom_api/xlu5EH_ekybWLDuKZiBzOQ | jq
curl -LO https://github.com/tunnel-to/tunnelto-client/releases/latest/download/tunnelto-linux-amd64.tar.gz
shasum -a 256 tunnelto-linux-amd64.tar.gz
tar -xzf tunnelto-linux-amd64.tar.gz
sudo install -m 0755 tunnelto /usr/local/bin/tunnelto
tunnelto 3000

brew tap tunnel-to/tunnelto
brew trust --formula tunnel-to/tunnelto/tunnelto
brew install tunnelto
tunnelto 3000
