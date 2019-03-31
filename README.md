# dat-replicate
### replicate hypercore with json data

Based on [this example code](https://github.com/vesparny/fair-analytics#replicate-raw-data).

## How to use

Let's say you have a json object list hypercore (e.g. for analytics) and your key is `fkladfjldsjfldskjfslkdjfaljfd`.

1. `git clone `
2. `npm install --prefix ./dat-replicate install ./dat-replicate`
3. `node ./dat-replicate/ ~path/to/data/dir.dataset --key fkladfjldsjfldskjfslkdjfaljfd`
4. Keep the process open.. the data set will replicate.

## How to keep running in the background, all the time

After installing following the instructions above:
1. `npm install -g pm2` (a process manager that runs apps in the background)
2. `pm2 start ./dat-replicate/index.js --name dat-replicate-service -- ~path/to/data/dir.dataset --key fkladfjldsjfldskjfslkdjfaljfd`
