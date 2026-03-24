import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient: SupabaseClient | null = null;

if (!supabaseUrl || !supabaseAnonKey || !supabaseUrl.startsWith('http')) {
  console.warn('Supabase credentials missing/invalid. Using mock client. Check .env.local / Vercel dashboard.');
} else {
  try {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase client initialized');
  } catch (error) {
    console.error('Failed to init Supabase:', error);
  }
}

const mockSupabase = {
  from: () => ({
    select: async () => ({ data: [], error: { message: 'Supabase unavailable' }, count: 0 }),
    insert: async () => ({ data: [], error: { message: 'Supabase unavailable' } }),
    update: async () => ({ data: [], error: { message: 'Supabase unavailable' } }),
    delete: async () => ({ data: [], error: { message: 'Supabase unavailable' } }),
    storage: {
      from: () => ({
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
      }),
    },
  }),
  isReady: () => false,
  getError: () => 'Supabase not configured',
};

const enhancedSupabase = (supabaseClient ?? mockSupabase) as any;

enhancedSupabase.isReady = () => !!supabaseClient;
enhancedSupabase.getError = () => (!supabaseClient ? 'Supabase not configured' : undefined);

export const supabase = enhancedSupabase;

