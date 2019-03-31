const hypercore = require('hypercore')
const swarm = require('hyperdiscovery')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const { _: { 0: outpath }, key } = argv

if (!outpath || !key) {
  if (!outpath) console.error('No outdir!')
  if (!key) console.error('No key!')
  process.exit(1)
} 

const feed = hypercore(outpath, key, { valueEncoding: 'json' })
swarm(feed)
