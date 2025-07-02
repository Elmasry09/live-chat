<template>
    <div v-if="show">
        <login>
            <template #login>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <p>No account yet? <span @click="show = false"
                            class="text-black hover:underline cursor-pointer">Sign up here</span>
                    </p>
                </div>
            </template>
        </login>
    </div>
    <div v-else>
        <singup>
            <template #signup>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <p>Already have an account? <span @click="show = true"
                            class="text-black hover:underline cursor-pointer">Login here</span>
                    </p>
                </div>
            </template>
        </singup>
    </div>
</template>

<script setup>
import login from '@/components/login.vue';
import singup from '@/components/singup.vue';
import { ref } from 'vue';

const show = ref(true);

</script>