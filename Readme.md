# use-keydown-shortcut

I've created this library for decrease boilerplate in code

> Just copy hook from /src/index.ts and all : )
> It seems that this library is small, but it can increase your bundle size

## Usage
```ts
/**
 * The first argument is condition
 *
 * */
useKeydownCombination(ev => ev.ctrlKey && ev.code === "KeyB", () => console.log("Ctrl + B is pressed"))
```

For better typization you can use my another package called as `ts-keyboard-enum`
