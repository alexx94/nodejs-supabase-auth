import supabase from "../src/config/supabase.js";

async function testConnection() {
    try {
        // Test connection in supabase by fetching a simple query from your public table. 


    } catch (err) {
        console.error('Error during Supabase connection test:', err);
    }
}

testConnection();