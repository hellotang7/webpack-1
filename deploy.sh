yarn build &&
git checkout x &&
mr -rf *src*.sh*.js*json*.lock &&
mv dist/* ./ &&
rm -rf dist
git add . &&
git commit -m 'update' &&
git push &&
git checkout -