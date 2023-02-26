<template>
  <div>
    <div style="display: flex;">
      <n-button type="primary" size="large" :strong="true">
        GraphQL
      </n-button>
      <span style="width: 10px;"></span>
      <n-button type="primary" size="large" :strong="true">
        {{ count }}
      </n-button>
    </div>
    <n-divider></n-divider>
    {{ loading }}
    <n-data-table :columns="columns" :data="data" :loading="load" />
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useQuery, useApolloClient } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const columns = ref([
  {
    title: "ID",
    key: "id"
  },
  {
    title: "Ism",
    key: "first_name"
  },
  {
    title: "Familya",
    key: "last_name"
  },
  {
    title: "Email",
    key: "email"
  },
  {
    title: "Jinsi",
    key: "gender"
  },
  {
    title: 'IP manzili',
    key: 'ip_address'
  }
])
const count = ref(0)
onMounted(() => {
  const tmn = setInterval(() => {
    count.value = count.value + 1
  }, 1);
  const { result, loading, error } = useQuery(gql`
    query {
      all {
        id
        first_name
        last_name
        email
        gender
        ip_address
      }
    }
  `).onResult(res => {
    data.value = res.data.all
    load.value = false
    clearInterval(tmn)
  })
})
const load = ref(true)
const data = ref([])

</script>