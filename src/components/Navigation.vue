<i18n>
{
  "en": {
    "home": "Home",
    "projects": "Projects"
  },
  "sk": {
    "home": "Domov",
    "projects": "Projekty"
  }
}
</i18n>

<template>
  <nav class="navbar navbar-expand navbar-light">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link">{{
            $t("home")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'projects' }" class="nav-link">{{
            $t("projects")
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
