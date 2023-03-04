# puppypals

A social networking mobile application designed to allow local dog owners to meet, host events, chat, and organize play dates with each other.

## Getting Started

No matter the environment, first run `npm install` for all 3 packages (root, client, server).

### macOS Environment for Android devices

TBD

### macOS Environment for iOS devices

TBD

### WSL2 Environment for Android devices

#### Start dev environment for physical Android phone

1. Setup with the following guide:

   [Building a react native app in WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#connect-to-android-virtual-device-in-windows)

   - [Install tools in Windows](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#install-tools-in-windows)
   - [Install tools in WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#install-tools-in-wsl2)
   - [Connect to android hardware device from WSL2](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#connect-to-android-hardware-device-from-wsl2)

2. Open `cmd.exe` as administrator
3. Run `usbipd list` and take note of your `BUSID` for your connected phone

  ![cmd_2023-03-03_17-57-59](https://user-images.githubusercontent.com/116389520/222875921-a0b1c84c-7e86-4c9b-b929-626cdf4b5a1f.jpg)

4. Expose your USB connected phone to your WSL2 by running `wsl attach --busid <BUSID>`
5. Start `wsl`
6. Run `sh [startAndroid.sh](http://startAndroid.sh)` (from above) and verify your device is attached

   ![WindowsTerminal_2023-03-03_18-03-10](https://user-images.githubusercontent.com/116389520/222875925-43b84df7-cf61-4f4b-b708-c2d0ed70bd7c.jpg)

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
