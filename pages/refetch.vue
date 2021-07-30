<template>
  <section>
    <h1>List users</h1>

    <!-- Filter by ... -->
    <button @click="onClick">Filter by age "28"</button>

    <!-- Show error -->
    <div v-if="error">{{ error }}</div>

    <!-- Show content -->
    <div v-else>
      <p v-if="loading">Loading...</p>
      <ul v-else>
        <li v-for="(user, i) in users" :key="i">
          NAME: {{ user.name }} <br>
          AGE: {{ user.age }} <br><br>
        </li>
      </ul>
    </div>
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

    return {
      users,
      loading,
      error,
      onClick
    };
  }
})
</script>
