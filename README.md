# Melissa Mobile
Melissa Mobile is a (work in progress) hybrid mobile application for the lovely <del>virtual</del> assistant [Melissa](https://github.com/Melissa-AI/Melissa-Core). This project relies on Apache Cordova for it's development and makes use of jQuery and Materialize.

### Installation
First of all, you will need to install Apache Cordova with the help of Node Package Manager.

```
npm install -g cordova
```

Then, you will need to enter the following commands in your terminal to setup the development repository.

```
git clone https://github.com/Melissa-AI/Melissa-Mobile.git
cd Melissa-Mobile
cordova prepare
```

You can now enter the following command to test the application on your browser.

```
cordova serve browser
```

To generate an APK file for installation on your mobile device or emulator, enter the following command.

```
cordova build android
```

### Contributing

After forking `Melissa-AI/Melissa-Mobile` and making the appropriate changes, open an issue and a pull request. After testing the issue/pull request, your request will be merged.

### Licence

[The MIT License (MIT)](https://github.com/Melissa-AI/Melissa-Mobile/blob/master/LICENSE.md)
