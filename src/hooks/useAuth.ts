import { useCallback, useState } from 'react'
import type { Profile } from '../types'

// AAM Connect runs entirely as a self-contained demo — there is no backend.
// Sign-in accepts any 10-digit number, then the fixed code below; both are
// shown on screen (LoginPage / OtpPage) so a demo never needs a secret.
// A real phone-OTP backend (e.g. Supabase) can replace this hook later
// without changing its public shape — see supabase/migrations/0001_profiles.sql
// for the schema this was originally built against.

export type AuthStage = 'loading' | 'signed_out' | 'otp_sent' | 'restricted' | 'signed_in'

export const DEMO_OTP = '123456'
const STORAGE_KEY = 'aam.signedIn'

const DEMO_PROFILE: Profile = {
  id: 'demo-cho-ashok-kumar',
  phone: '',
  name: 'mock.person.ashok',
  role: 'CHO',
  facility: 'mock.place.devali',
  district: 'mock.place.salumber',
}

function readStoredSignIn(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function writeStoredSignIn(signedIn: boolean) {
  try {
    if (signedIn) localStorage.setItem(STORAGE_KEY, 'true')
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // best-effort persistence only
  }
}

export function useAuth() {
  const [profile, setProfile] = useState<Profile | null>(() => (readStoredSignIn() ? DEMO_PROFILE : null))
  const [stage, setStage] = useState<AuthStage>(() => (readStoredSignIn() ? 'signed_in' : 'signed_out'))
  const [pendingPhone, setPendingPhone] = useState('')
  const [error, setError] = useState('')
  const [busy] = useState(false)

  const sendOtp = useCallback(async (phone: string) => {
    setError('')
    setPendingPhone(phone)
    setStage('otp_sent')
    return true
  }, [])

  const verifyOtp = useCallback(
    async (token: string) => {
      setError('')
      if (token !== DEMO_OTP) {
        setError('otp.invalidCode')
        return false
      }
      const signedInProfile: Profile = { ...DEMO_PROFILE, phone: pendingPhone }
      setProfile(signedInProfile)
      writeStoredSignIn(true)
      setStage('signed_in')
      return true
    },
    [pendingPhone],
  )

  const signOut = useCallback(async () => {
    writeStoredSignIn(false)
    setProfile(null)
    setPendingPhone('')
    setStage('signed_out')
  }, [])

  return { profile, stage, pendingPhone, error, busy, sendOtp, verifyOtp, signOut }
}
