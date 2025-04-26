import { createClient } from "../../../utils/supabase/server";
import Header from "./Header";

async function getUser() {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
        console.error("Error fetching user:", error);
        return null;
    }
    return user;
}

export default async function HeaderWrapper() {
    const user = await getUser();
    
    return <Header user={user} />;
}