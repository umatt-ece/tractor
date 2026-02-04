# README

This is dependent on the Arm GNU toolchain
        macOS brew install --cask gcc-arm-embedded
        Linux get the bare-metal version from arm.com

and openOCD (this is a powerful tool for uploading and debugging)
        macOS brew install open-ocd
        Linux apt-get install openocd

These should already be in the dir if you pulled from umatt git.

- CMSIS->Core from GitHub is needed 
- cmsis-device-f0-master pack from [STM github](https://github.com/STMicroelectronics/cmsis-device-f0)
- Makefile
- VS Code workspace settings settings.json to set the compiler and make configurations (you'll need to change the target name for the install configuration)
- VS Code C/C++ extension c_cpp_properties.json so that it can find and use the header files for completions (this is partial, you'll want to copy this into your complete properties file)
- VS Code debugger launch.json
