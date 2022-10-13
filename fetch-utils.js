const SUPABASE_URL = 'https://yldlpaxgnirrjdiptyvb.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZGxwYXhnbmlycmpkaXB0eXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MDIyMjMsImV4cCI6MTk4MDQ3ODIyM30.ExZVmzZe7fxOBeQhlbd5d7fDohtbWCseobSVDSrnLmw';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createPost(post) {
    return await client.from('posts').insert(post);
}
