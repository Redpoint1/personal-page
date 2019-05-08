<template>
  <nav class="navbar navbar-expand navbar-light">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'projects' }" class="nav-link"
            >Projects</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
