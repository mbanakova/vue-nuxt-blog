<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p v-if="showWarning" class="warning">He-he</p>
    <div class="container">
      <div class="four four1">4</div>
      <a
        @mouseenter="showWarning = !showWarning"
        @mouseleave="showWarning = !showWarning"
        class="moon"
        href="/"
      >
        <div class="crater crater1"></div>
        <div class="crater crater2"></div>
        <div class="crater crater3"></div>
        <div class="crater crater4"></div>
        <div class="crater crater5"></div>
        <div class="shadow"></div>
        <div class="eye eye-left"></div>
        <div class="eye eye-right"></div>
        <div class="mouth"></div>
        <div class="blush blush1"></div>
        <div class="blush blush2"></div>
      </a>
      <div class="four four2">4</div>
      <div class="orbit">
        <div class="rocket">
          <div class="window"></div>
        </div>
      </div>
    </div>
    <p class="error-text">Back to <a href="/">safety</a>!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWarning: false,
    };
  },
};
</script>

<style scoped>
.error-page {
  text-align: center;
  background: linear-gradient(
    to bottom,
    #031320,
    #05111a,
    #29577c,
    #05111a,
    #031320
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  margin: 0 0 80px;
  color: #fff;
}

.error-text {
  color: #fff;
  margin-top: 80px;
}

.warning {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
}

.error-page a {
  text-decoration: none;
  color: #39beff;
  transition: 0.3s all ease-in-out;
}

.error-page a:hover,
.error-page a:active {
  color: #ade4ff;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.four {
  font-size: 10vw;
  color: #39beff;
  font-weight: 700;
  margin: 0 20px;
}

.four1 {
  left: 0;
}

.four2 {
  right: 0;
}

.moon {
  background-color: #f9f8df;
  height: 170px;
  width: 170px;
  border-radius: 50%;
  text-decoration: none;
  margin: auto;
  overflow: hidden;
  z-index: 10;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
}
.moon:hover .eye {
  background-color: transparent;
  border: none;
  border-left: 4px solid #161616;
  border-top: 4px solid #161616;
  border-radius: 0%;
}
.moon:hover .eye-left {
  bottom: 257px;
}

.moon:hover .eye-right {
  bottom: 269px;
}
.moon:hover .blush {
  background-color: #f8bffa;
}

.crater {
  background-color: #e9e8d6;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
}

.crater::before {
  position: absolute;
  content: "";
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: -5px 0 0 2px #dddbbf;
  top: 2px;
  left: 7px;
}

.crater1 {
  top: 27px;
  left: 90px;
  transform: scale(0.9);
}

.crater2 {
  bottom: 15px;
  left: 61px;
  transform: scale(0.6);
}

.crater3 {
  left: 15px;
  transform: scale(0.75);
}

.crater4 {
  top: 32px;
  left: 107px;
  transform: scale(1.18);
}

.crater5 {
  bottom: 4px;
  left: 33px;
  transform: scale(0.65);
}

.shadow {
  height: 190px;
  width: 190px;
  box-shadow: 21px 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: relative;
  bottom: 157.5px;
  right: 45px;
}

.eye {
  height: 12px;
  width: 12px;
  background-color: #161616;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;
  transition: 0.2s all ease-in-out;
}

.eye-left {
  bottom: 255px;
  left: 59px;
}

.eye-right {
  bottom: 267px;
  left: 101px;
}

.mouth {
  height: 11px;
  width: 16px;
  border: 3px solid #161616;
  position: relative;
  bottom: 262px;
  left: 79px;
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  transition: 0.2s all ease-in-out;
}

.blush {
  height: 7px;
  width: 7px;
  background-color: #dddbbf;
  position: relative;
  transition: 0.5s all ease-in-out;
}

.blush1 {
  bottom: 273px;
  left: 50px;
}

.blush2 {
  bottom: 281px;
  left: 115px;
}

.orbit {
  height: 280px;
  width: 280px;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  left: -35px;
  top: -50px;
  animation: spin 5s linear infinite;
}

.rocket {
  background-color: #fafcf7;
  height: 50px;
  width: 25px;
  border-radius: 50% 50% 0 0;
  position: relative;
  left: -11px;
  top: 115px;
}

.rocket::before {
  position: absolute;
  content: "";
  background: linear-gradient(
    to right,
    #ff3939 15px,
    transparent 15px,
    transparent 40px,
    #ba32c3 40px
  );
  height: 20px;
  width: 55px;
  border-radius: 50% 50% 0 0;
  right: -15px;
  bottom: 0;
}

.rocket::after {
  position: absolute;
  content: "";
  background-color: #858585;
  height: 4px;
  width: 15px;
  border-radius: 0 0 2px 2px;
  bottom: -4px;
  left: 4px;
}

.window {
  height: 10px;
  width: 10px;
  background-color: #151845;
  border: 2px solid #b8d2ec;
  border-radius: 50%;
  position: relative;
  top: 17px;
  left: 5px;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
