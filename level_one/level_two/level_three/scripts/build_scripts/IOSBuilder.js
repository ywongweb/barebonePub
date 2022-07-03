const execSync = require('child_process').execSync

class IOSBuilder {
  constructor() {
    this._repoDir = `${__dirname}/../../../../..`
    this._engineIosDir = `${this._repoDir}/level_one/level_two/level_three/ios`
    this._workspacePath = `${this._engineIosDir}/barebone.xcworkspace`
  }

  buildiOSBinary() {
    const buildCommand = `RCT_NO_LAUNCH_PACKAGER=true xcodebuild \
      -workspace "${this._workspacePath}" \
      -scheme barebone \
      -configuration Debug \
      -sdk iphonesimulator \
      -derivedDataPath ${this._engineIosDir}/DerivedData/barebone \
      -UseModernBuildSystem=YES \
      build -quiet
    `
    console.log('Build command:', buildCommand)
    execSync(buildCommand, {stdio: 'inherit'})
    const binaryPath = this._copyToAppBuilds()
    return binaryPath
  }

  _copyToAppBuilds() {
    const source = `${this._engineIosDir}/DerivedData/barebone/build/Products/Debug-iphonesimulator/barebone.app`
    const destinationDir = `${this._repoDir}/level_one/level_two/level_three/app_builds/iphonesimulator/dev`
    execSync(`mkdir -p ${destinationDir}`)
    const destination = `${destinationDir}/barebone.app`
    execSync(`rm -rf ${destination}`)
    const copyCommand = `cp -a '${source}' '${destination}'`
    console.log(`Copying: ${copyCommand}`)
    execSync(copyCommand)
    return destination
  }
}

module.exports = {
  IOSBuilder,
}
