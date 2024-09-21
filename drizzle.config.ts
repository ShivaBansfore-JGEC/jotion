import type { Config } from "drizzle-kit";
import * as detenv from "dotenv"

detenv.config({ path: '.env' })

if (!process.env.DATABASE_URL) {
    console.log("Database not found!");
}

export default {
    schema: './src/lib/superbase/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || ''
    }
} satisfies Config;


