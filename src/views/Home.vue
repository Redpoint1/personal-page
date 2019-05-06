<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex justify-content-around">
        <a href="https://github.com/Redpoint1">
          <img
            svg-inline
            class="brand"
            src="@fortawesome/fontawesome-free/svgs/brands/github.svg"
          />
        </a>
      </div>
      <div class="col d-flex justify-content-around">
        <a href="https://www.linkedin.com/in/richardrozar/">
          <img
            svg-inline
            class="brand"
            src="@fortawesome/fontawesome-free/svgs/brands/linkedin.svg"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.brand {
  height: 25vw;
  min-height: 100px;
  max-height: 200px;
  transition: fill 1s;
  fill: #777;

  &:hover {
    fill: #000;
  }
}
</style>
