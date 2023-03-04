# puppypals

A social networking mobile application designed to allow local dog owners to meet, host events, chat, and organize play dates with each other.

## Getting Started

No matter the environment, first run `npm install` for all 3 packages (root, client, server).

### macOS Environment for Android devices

### macOS Environment for iOS devices

### WSL2 Environment for Android devices

#### Start dev environment for physical Android phone

1. Setup with the following guide:

   [Building a react native app in WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#connect-to-android-virtual-device-in-windows)

   - [Install tools in Windows](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#install-tools-in-windows)
   - [Install tools in WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#install-tools-in-wsl2)
   - [Connect to android hardware device from WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#connect-to-android-hardware-device-from-wsl2)

2. Open `cmd.exe` as administrator
3. Run `usbipd list` and take note of your `BUSID` for your connected phone

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b3342df2-a465-40a0-bbeb-62f6a2a11c4a/Untitled.png)

4. Expose your USB connected phone to your WSL2 by running `wsl attach --busid <BUSID>`
5. Start `wsl`
6. Run `sh [startAndroid.sh](http://startAndroid.sh)` (from above) and verify your device is attached

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4194be6a-3b31-4f9f-8450-dc4db398f2ff/Untitled.png)

7. You’re ready to start running the client + server!

#### Start dev environment for Android Studio emulator

1. Setup with the following guide:

   [Building a react native app in WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#connect-to-android-virtual-device-in-windows)

   - [Install tools in Windows](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#install-tools-in-windows)
   - [Install tools in WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#install-tools-in-wsl2)
   - [Connect to android virtual device in Windows](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#connect-to-android-virtual-device-in-windows) (I had to do all of the sub-sections here)

2. Close everything (`wsl --shutdown`)
3. Start your emulator
4. Run the following commands in cmd or PS

```powershell
adb kill-server
adb -a nodaemon server start
```

5. Run the following command in WSL `socat -d -d TCP-LISTEN:5037,reuseaddr,fork TCP:$(cat /etc/resolv.conf | tail -n1 | cut -d " " -f 2):5037`
6. Run the following commands in WSL project directory

```bash
cd client
npm start
```

7. Hit the ‘a’ key in the terminal with Metro to build the app
8. Start up the server with the following commands from project directory and you’re done!

```bash
cd server
npm run start-dev
```
