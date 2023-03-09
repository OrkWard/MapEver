<template>
  <header id="navbar">
    <svg id="navbar-menu-icon">
      <path d="M21 6H3V5h18zm0 6H3v1h18zm0 7H3v1h18z"></path>
    </svg>
    <div id="map-title">untitle</div>
  </header>
</template>

<style scoped>
#navbar {
  /* flex-basis: 30px; */
  display: flex;
  color: var(--text-2);
  align-items: center;
  border-bottom: solid 1px var(--border-1);
}

#navbar-menu-icon {
    height: 24px;
    width: 24px;
    margin-right: 8px;
    padding: 16px 16px;
    opacity: 0.8;
    border-bottom: solid 3px transparent;
}
#navbar-menu-icon:hover {
    opacity: 1;
    border-bottom: solid 3px rgb(0 121 193 / 50%);
}

#map-title {
    font-size: 24px;
}
</style>