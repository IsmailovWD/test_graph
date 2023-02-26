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
import axios from 'axios'

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
  axios.get('http://localhost:3355/api/api').then(res => {
    data.value = res.data
    clearInterval(tmn)
    load.value = false
  })
})
const load = ref(true)
const data = ref([])

</script>