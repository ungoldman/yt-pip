#!/usr/bin/env node

var args = process.argv.slice(2)
var spawn = require('child_process').spawn
var pip = require.resolve('./node_modules/.bin/open-pip')
var ytdl = require.resolve('./node_modules/.bin/ytdl')

var cmd = `${ytdl} --print-url --filter-container=mp4 ${args[0]} | ${pip}`

if (args.indexOf('--debug') !== -1) console.log(cmd)

spawn('sh', ['-c', cmd], { stdio: 'inherit' })
