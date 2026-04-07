# Supabase Setup voor Vercel

## Omgevingsvariabelen (Niet in code pushen!)

Configureer deze in Vercel Project Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://[your-project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key] (server-side only)
```

## Supabase Project Setup

1. **Maak Supabase project aan** op https://supabase.com
2. **Database Schema:**
   ```sql
   -- Dutch business tables
   CREATE TABLE bedrijven (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     kvk_nummer VARCHAR(8) UNIQUE NOT NULL,
     bedrijfsnaam VARCHAR(255) NOT NULL,
     btw_nummer VARCHAR(14),
     postcode VARCHAR(6),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   CREATE TABLE documenten (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     bedrijf_id UUID REFERENCES bedrijven(id),
     type VARCHAR(50) NOT NULL,
     status VARCHAR(50) DEFAULT 'pending',
     content JSONB,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

3. **Row Level Security (RLS):**
   ```sql
   ALTER TABLE bedrijven ENABLE ROW LEVEL SECURITY;
   ALTER TABLE documenten ENABLE ROW LEVEL SECURITY;
   ```

## Vercel Integration

De frontend is al geconfigureerd met:
- `@supabase/supabase-js` voor client-side
- `@supabase/ssr` voor server-side rendering

## Security Notes

- **Nooit API keys in GitHub pushen**
- **Use environment variables in Vercel**
- **RLS enabled by default**
- **AVG/GDPR compliant design**