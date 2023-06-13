Desativar o modo strict-ssl removerá esse erro.

npm set strict-ssl false

1) dizer à sua versão atual do npm para usar o ca do nó em vez do ca integrado

npm config set ca=""

2) OU atualizar sua versão do npm

npm install npm -g --ca=null"# appsistec" 

ERROR


› Building app...

ERROR: JAVA_HOME is set to an invalid directory: C:\Program Files\Android\Android Studio\jre

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation.

https://prnt.sc/ikIaR0oHUNBs


https://prnt.sc/zkxc4VreRmEJ


PS C:\Users\User\Desktop\ReactNative\newApp> npx expo run:android
request to https://registry.npmjs.org/expo-template-bare-minimum/-/expo-template-bare-minimum-48.0.18.tgz failed, reason: self-signed certificate in certificate chain
× Failed to create the native project.
You may want to delete the `./ios` and/or `./android` directories before trying again.
PS C:\Users\User\Desktop\ReactNative\newApp> npx expo run:android
