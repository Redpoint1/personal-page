<template>
  <div class="container d-flex flex-column h-100 justify-content-center ">
    <div class="row">
      <div class="col-xs-12 col-sm-6 mb-2-sm d-flex justify-content-around">
        <a href="https://github.com/Redpoint1">
          <img
            svg-inline
            class="brand"
            src="@fortawesome/fontawesome-free/svgs/brands/github.svg"
          />
        </a>
      </div>
      <div class="col-xs-12 col-sm-6 d-flex justify-content-around">
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
$brand-color: #000;

.brand {
  height: 50vw;
  min-height: 125px;
  max-height: 200px;
  transition: fill 0.5s;
  fill: scale-color($brand-color, $lightness: 50%);

  &:hover {
    fill: $brand-color;
  }
}
</style>
