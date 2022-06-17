# 📦 @mdos-san/listenable-variable

## 📝 Description

In many scenarios, you may need to propagate the state of a variable accross a code base.

With `ListenableVariable`, you will be able to create a variable and register multiples callbacks that will be triggered when the `ListenableVariable` is updated.

## ➕ Installation

### Via NPM

```shell
npm install @mdos-san/listenable-variable
```

## 🧑‍💻 Usage

```ts
import ListenableVariable from "@mdos-san/listenable-variable"

const [getValue, setValue, listenValue] = ListenableVariable(42);

listenValue(console.log) // This print "42" immediatly int the console

setValue(21) // This set the value to 21, and print "21" in the console
```
