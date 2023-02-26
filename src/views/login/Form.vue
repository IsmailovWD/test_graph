<template>
  <div>
    <n-space vertical size="large">
      <n-layout style="height: 100vh">
        <div style="width: 100%; height: 100vh; display: flex;justify-content: center;align-items: center;">
          <n-card style="width: 400px;">
            <n-tabs type="segment" class="card-tabs" default-value="signin" size="small" animated style="margin: 0 -4px"
              pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
              <n-tab-pane name="signin" tab="Login">
                <n-divider>Login</n-divider>
                <n-form size="large">
                  <n-form-item-row label="Username">
                    <n-input placeholder="Username" />
                  </n-form-item-row>
                  <n-form-item-row label="Password">
                    <n-input placeholder="Password" />
                  </n-form-item-row>
                </n-form>
                <n-button @click="pushs" size="large" type="primary" block secondary strong>
                  Sign In
                </n-button>
              </n-tab-pane>
              <n-tab-pane name="signup" tab="Sign in">
                <n-divider>Sign in</n-divider>
                <n-form size="large">
                  <n-form-item-row label="Username">
                    <n-input placeholder="Username" />
                  </n-form-item-row>
                  <n-form-item-row label="Password">
                    <n-input placeholder="Password" />
                  </n-form-item-row>
                  <n-form-item-row label="Reenter Password">
                    <n-input placeholder="Reenter Password" />
                  </n-form-item-row>
                </n-form>
                <n-button @click="pushs" size="large" type="primary" block secondary strong>
                  Sign up
                </n-button>
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </div>
      </n-layout>
    </n-space>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const pushs = () => {
  router.push('/')
}
</script>