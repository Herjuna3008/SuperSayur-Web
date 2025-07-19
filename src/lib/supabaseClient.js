import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://fsvdhdjrzkaqfxogdgcv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmRoZGpyemthcWZ4b2dkZ2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NDgyMDEsImV4cCI6MjA2ODMyNDIwMX0.vW6cJKqYqkTf5CSJjp5kl_MhKo2O1K0Y3l-00Cn4SIc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
