<template>
  <main>
    <h1>Contact Me</h1>
    <table class="shadow-xl">
      <thead class="bg-blue text-white-900">
        <th>platform</th>
        <th>handle</th>
      </thead>
      <tbody v-for="(val, name) in contact" :key="name">
        <tr>
          <td>{{ name }}</td>
          <td>{{ val }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style>
.contact-enter-active,
.contact-leave-active {
  position: relative;
  transition: all 0.5s ease 0s;
}
.contact-enter {
  margin-left: 800px;
  position: relative;
}
.contact-leave {
  margin-right: 800px;
  position: relative;
}

main {
  display: flex;
  width: 100vw;
  align-items: center;
  flex-flow: column nowrap;
}
h1 {
  margin: 20px auto;
  color: rgb(30, 120, 120);
}
table {
  padding: 10px;
  overflow: hidden;
  background: rgba(30, 120, 120, 0.3);
  border: 2px solid rgb(30, 120, 120);
  box-sizing: border-box;
  margin: 0px auto;
}
table tr,
table thead {
  display: flex;
  width: 300px;
  justify-content: space-between;
}
table thead:first-of-type {
  border-bottom: 2px solid rgb(30, 120, 120);
}
table tr > *,
table thead > * {
  width: 50%;
  padding: 15px 35px;
  display: flex;
  text-transform: capitalize;
  justify-content: center;
}
table td:not(:last-child),
table th:not(:last-child) {
  border-right: 1px solid rgb(30, 120, 120);
  margin: 0px;
  box-sizing: border-box;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'contact',
  transition: 'contact',
  data() {
    return {}
  },
  async asyncData({ error }) {
    // ^ called before instantiating the component
    // req & res are passed as arguments to asyncData

    // component loading is paused this until promise is fulfilled
    return axios
      .get('/api/contact')
      .then((res) => {
        let contact = res.data
        return { contact }
        // ^ automatically merged with the components data
      })
      .catch((err) => {
        console.log(`Error fetching contact details : %o`, err)
        error({ statusCode: 404, message: 'Contact info not found' })
        // ^ return 404 error, thereby triggering 404 page
      })
  },
}
</script>
