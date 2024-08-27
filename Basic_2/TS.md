## TS Config Setting

## 1. target 

The target specify the ECMAScript version in which your typescript will compile.

## 2. rootDir

Where the compiler look for the .ts file. Good practice is for the `src` folder

## 3. outDir

Where the compile or transpile file is going to place. Good practice is for the `dist` folder. Dosen't push dist file in github.

## 4. noimplicitAny

 - Enable all strict type checking. U can set it `false` .
 
 - U can use this when you are movinh js code to ts code base. Because you not waste the time to provide type to each member.

## 5. removeComments

if it's `true` it will remove all comments from js files. When you convert .ts file to .js file.