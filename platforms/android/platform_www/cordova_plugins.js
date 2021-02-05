cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-speechrecognition.SpeechRecognition",
      "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
      "pluginId": "cordova-plugin-speechrecognition",
      "merges": [
        "window.plugins.speechRecognition"
      ]
    },
    {
      "id": "cordova-plugin-tts.tts",
      "file": "plugins/cordova-plugin-tts/www/tts.js",
      "pluginId": "cordova-plugin-tts",
      "clobbers": [
        "TTS"
      ]
    },
    {
      "id": "cordova-plugin-apiai.Q",
      "file": "plugins/cordova-plugin-apiai/www/lib/q.js",
      "pluginId": "cordova-plugin-apiai",
      "runs": true
    },
    {
      "id": "cordova-plugin-apiai.ApiAIPlugin",
      "file": "plugins/cordova-plugin-apiai/www/ApiAIPlugin.js",
      "pluginId": "cordova-plugin-apiai",
      "clobbers": [
        "window.ApiAIPlugin"
      ]
    },
    {
      "id": "cordova-plugin-apiai.ApiAIPromises",
      "file": "plugins/cordova-plugin-apiai/www/ApiAIPromises.js",
      "pluginId": "cordova-plugin-apiai",
      "clobbers": [
        "window.ApiAIPromises"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-speechrecognition": "1.1.2",
    "cordova-plugin-tts": "0.2.3",
    "cordova-plugin-apiai": "1.7.4"
  };
});