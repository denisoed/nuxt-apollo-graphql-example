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
    <button @click="onClick">Filter by age = "28"</button>
    <button @click="reset">Reset</button>
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
    const { result, loading, error, refetch } = useQuery(GET_USERS);

    // -------- Computeds -------- //
    const users = useResult(result, null, data => data.users);

    // --------- methods -------- //
    function onClick() {
      refetch({ age: 28 });
    }

    function reset() {
      refetch({ age: null });
    }

    return {
      users,
      loading,
      error,
      onClick,
      reset
    };
  }
})
</script>
