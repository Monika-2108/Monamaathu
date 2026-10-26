import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://ubzhwdskrymjalhwiywi.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_KbVrwwyoBwfZNNh5FykBow_D4wvvsVR';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);