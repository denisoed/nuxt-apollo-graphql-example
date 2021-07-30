<template>
  <section>
    <div id="app">
      <table>
        <thead>
          <tr>
            <th >ID</th>
            <th >Name</th>
            <th >Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, key) in users" :key="key">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>The data is loaded before the page is rendered</p>
  </section>
</template>

<script>
import {
  defineComponent
} from '@nuxtjs/composition-api';
import { useQuery, useResult } from '@vue/apollo-composable/dist';
import { GET_USERS } from '@/graphql/types';

export default defineComponent({
  setup() {
    // ------- Get all users -------- //
    const { result, loading, error } = useQuery(GET_USERS);

    // -------- Computeds -------- //
    const users = useResult(result, null, data => data.users);

    return {
      users,
      loading,
      error
    };
  }
})
</script>
