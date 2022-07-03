const childProcess = require('child_process')
const _ = require('lodash')

class AsyncPackagerRunner {
  run(engineDir, resetCache, port) {
    const rnStartCmdArray = [
      'node',
      '../node_modules/react-native/local-cli/cli.js',
      'start',
      '--port',
      port,
      engineDir,
    ]

    if (resetCache) {
      rnStartCmdArray.push('--reset-cache')
    }

    const cwd = `${engineDir}/../..`
    console.info(
      `Running in background: ${
        (`cd ${cwd} ${rnStartCmdArray.join(' ')}`, 'quote')
      }`,
    )
    // cli doc https://github.com/react-native-community/cli/blob/master/docs/commands.md
    // debug
    // Running in background: cd /Users/yeewong/dev/busdue5/inton/prirepo/theapp/tools/engine_cli/src/../../../../.. node ../node_modules/react-native/local-cli/cli.js start --port 8081 /Users/yeewong/dev/busdue5/inton/prirepo/theapp/tools/engine_cli/src/../../..
    // starts packager and provides the RN app's root directory as the last line

    const packager = childProcess.spawn(
      rnStartCmdArray[0],
      rnStartCmdArray.slice(1),
      {
        cwd,
        stdio: 'inherit',
      },
    )
    packager.on('exit', () => console.info('The packager process finished'))

    return packager
  }
}

module.exports = {AsyncPackagerRunner}
