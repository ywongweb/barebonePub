### How to use this repo

- [Download and install Xcode](https://download.developer.apple.com/Developer_Tools/Xcode_13.4.1/Xcode_13.4.1.xip) if you don't have it already.
- **Fork** this project and change it into a **private** repository, you will need this because:  
-- 1. A real world project will be private anyway.   
-- 2. You need to upload your build binaries as a private GH package.
- Clone this project from your repo and open it in your IDE, search the code and replace all instances of `<YOUR-GITHUB-USERNAME>` with your github username.
- [Create a GH publish token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) if you don't already have one.
- Open `/level_one/level_two/level_three/.npmrc` in your IDE and replace `<GITHUB_PUBLISH_TOKEN>` with your push token.
- install project dependencies with `yarn`
- make an ios native build with with `yarn build-ios`
- (optional) test the newly created binary by opening a simulator and running `yarn ios`
- Publish the native build to GH packages by opening your terminal, `cd` into `/level_one/level_two/level_three/` then run `npm publish` in there.
- Congrats, you've now build and deployed a native build as a github package! Hope you enjoyed this new React Native development experience.

### Next step
Test the native binary in the [JavaScript only repo](https://github.com/ywongweb/bareboneFE).
