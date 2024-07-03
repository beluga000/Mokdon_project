<template>
<q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 300px">
      <q-card-section>
        <div class="text-h6">LOGIN</div>
      </q-card-section>

      <q-card-section>
        <q-input
          filled
          v-model="username"
          label="ID"
          lazy-rules
          :rules="[val => !!val || 'ID를 입력해주세요.']"
        />
        <q-input
          filled
          v-model="password"
          label="PWD"
          type="password"
          lazy-rules
          :rules="[val => !!val || '패스워드를 입력해주세요.']"
        />
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Login" color="primary" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>

</template>

<script setup>
defineOptions({
  name: 'LoginPage'
});
</script>
```
