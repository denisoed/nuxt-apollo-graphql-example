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
        <tbody v-if="users && users.length">
          <tr v-for="(user, key) in users" :key="key">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          No data
        </tbody>
      </table>
    </div>
    <button @click="onClick">Load data</button>
  </section>
</template>

<script>
import {
  defineComponent
} from '@nuxtjs/composition-api';
import { useLazyQuery, useResult } from '@vue/apollo-composable/dist';
import { GET_USERS } from '@/graphql/types';

export default defineComponent({
  setup() {
    // ------- Get all users -------- //
    const { result, loading, error, load } = useLazyQuery(GET_USERS);

    // -------- Computeds -------- //
    const users = useResult(result, null, data => data.users);

    // --------- methods -------- //
    function onClick() {
      load();
    }

    return {
      users,
      loading,
      error,
      onClick
    };
  }
})
</script>
