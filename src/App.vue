<template>
  <RouterView></RouterView>
</template>
<style lang="less">
:root {
  --ratio: 1;
  --size: 64px;
  --count: 24;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.click-animation {
  width: calc(var(--size) / var(--ratio));
  aspect-ratio: 1 / 1;
  background: url('/drop.png') 0 0 / 100% auto no-repeat;
  animation: light 1.2s steps(var(--count)) infinite;
}
@keyframes light {
  to {
    background-position: 0 calc(var(--count) * var(--size) / var(--ratio) * -1);
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  :root {
    --ratio: 1.5;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  :root {
    --ratio: 2;
  }
}
</style>
