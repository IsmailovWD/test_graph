<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useLoadingBar } from 'naive-ui'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@vue/apollo-composable'
import { computed, watchEffect } from 'vue'

// const { result, loading, error } = useQuery(gql`
//   query {
//     salom
//     hello
//     product(id:5){
//       id
//       name
//     }
//     items(q:"dasdas", input: {first:1,after:"dsadsads"}){
//       id
//       name
//     }
//   }
// `)
// // const { mutate, error, called, loading, onDone, onError } = useMutation(gql`
//   mutation{
//     createProduct(input: {id:1,name:"test"}) {
//       id
//       name
//     }
//   }`)
const route = useRoute()
const router = useRouter()
const loadings = useLoadingBar()
const TITLE = 'Admin Panel'
router.beforeEach(() => {
  loadings.start()
})
router.afterEach(() => {
  loadings.finish()
  document.title = route.name + ' - Panel' || TITLE
})
router.onError(() => {
  loadings.error()
})

</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
