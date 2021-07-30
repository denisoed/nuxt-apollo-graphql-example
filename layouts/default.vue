<template>
  <div>
    <nav>
      <nuxt-link exact to="/">Home</nuxt-link>
      <nuxt-link to="/refetch">Refetch</nuxt-link>
      <nuxt-link to="/load">Load</nuxt-link>
    </nav>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  box-sizing: border-box;
}
*::-webkit-scrollbar {
  width: 0.08rem;
}
*::-webkit-scrollbar-track {
  background-color: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #e4b6ba;
  border-radius: 6px;
}
html {
  font-size: 100px;
}
@media (max-width: 992px) {
  html {
    font-size: calc(100vmax / 992 * 100);
}
}
body {
  background-color: #ececec;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 0.3rem;
  margin: 0;
  display: grid;
  align-items: center;
  font-size: 0.2rem;
}
table {
  margin: auto;
  table-layout: fixed;
}
table thead tr {
  display: block;
  white-space: nowrap;
  margin-left: 0.2rem;
  margin-right: 0.28rem;
  margin-bottom: 0.1rem;
  background-color: #83a4d4;
  box-shadow: 3px 4px 0px 2px #e4b6ba;
  border-radius: 6px;
}
table thead th {
  font-weight: bold;
  padding: 0.08rem;
  color: #fff;
  text-transform: capitalize;
}
table tbody {
  display: block;
  padding: 0 0.2rem;
  max-height: 3rem;
  overflow-x: hidden;
  overflow-y: auto;
  color: #83a4d4;
}
table tbody tr {
  display: block;
  transition: all 0.2s;
}
table tbody tr:hover {
  transform: translateX(-10px);
}
table tbody td {
  color: #83a4d4;
  padding: 0.08rem;
  border-radius: 6px;
  background-color: #faf9f8;
}
table th:nth-child(1), table td:nth-child(1) {
  width: 2.5rem;
}
table th:nth-child(2), table td:nth-child(2) {
  width: 2.5rem;
}
table th:nth-child(3), table td:nth-child(3) {
  width: 2.5rem;
}
button {
  color: #83a4d4;
  padding: 10px 15px;
  border-radius: 6px;
  background-color: #faf9f8;
  border: 0;
  font-size: 0.2rem;
  cursor: pointer;
  box-shadow: 3px 4px 0px 2px #e4b6ba;
  margin: 0 5px;
  margin-top: 30px;
}

button:active {
  box-shadow: 1px 2px 0px 1px #e4b6ba;
  transform: translate(2px, 2px);
}

nav {
  margin-bottom: 50px;
}

nav a {
  margin: 0 10px;
  color: #83a4d4;
}

p {
  color: #83a4d4;
}

.nuxt-link-active {
  font-weight: bold;
}
</style>