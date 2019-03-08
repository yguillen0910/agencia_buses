<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name : 'home'}">Home</b-nav-item>

            <b-nav-item :to="{name : 'trayectos'}">Trayectos</b-nav-item>
            <b-nav-item :to="{name : 'choferes'}">Choferes</b-nav-item>
            <b-nav-item :to="{name : 'buses'}">Buses</b-nav-item>
            <b-nav-item :to="{name : 'pasajeros'}">Pasajeros</b-nav-item>
            <b-nav-item-dropdown text="Configuración" right>
              <b-dropdown-item :to="{name : 'boletos'}">Boletos</b-dropdown-item>
              <b-dropdown-item :to="{name : 'horarios'}">Horarios</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item :to="{name : 'about'}">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>