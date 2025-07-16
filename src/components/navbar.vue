<template>
    <div class="navbar bg-base-100 p-4 shadow-sm fixed top-0 bg-green-light z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="flex gap-2">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li @click="Logout"><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const router = useRouter();

const Logout = async () => {
    try {
        if (auth.currentUser === null) {
            throw new Error('User already logged out')
        }
        const res = await signOut(auth)
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User logged out successfully'
        })
        router.push({ name: 'welcome' })
        
    } catch (error) {
        router.push({ name: 'welcome' })
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
            color: '#dc2626'
        })
    }
    
    
}


</script>
