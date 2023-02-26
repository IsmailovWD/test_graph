import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import naiveUI from 'naive-ui'
import VueKinesis from "vue-kinesis";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
import App from './components/Provider.vue'
import router from './router'
import './assets/main.css'

const httplink = createHttpLink({
  uri: 'http://localhost:3355/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httplink,
  cache
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(createPinia())
app.use(router)
app.use(naiveUI)
app.use(VueKinesis);

app.mount('#app')
