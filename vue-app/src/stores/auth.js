import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  auth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut,
} from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user    = ref(null)
  const loading = ref(true)

  // Bootstrap auth state once on app start
  let _unsub = null
  function init() {
    if (_unsub) return
    _unsub = onAuthStateChanged(auth, (u) => {
      user.value    = u
      loading.value = false
      if (u) {
        try {
          localStorage.setItem('er_session', JSON.stringify({
            uid: u.uid, displayName: u.displayName,
            email: u.email, photoURL: u.photoURL,
          }))
        } catch (_) {}
      } else {
        localStorage.removeItem('er_session')
      }
    })
  }

  async function loginWithGoogle() {
    const cred = await signInWithPopup(auth, new GoogleAuthProvider())
    return cred.user
  }

  async function logout() {
    await signOut(auth)
    user.value = null
  }

  return { user, loading, init, loginWithGoogle, logout }
})
