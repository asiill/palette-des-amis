import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { createClient } from "../../../../utils/supabase/server";

export async function POST(req: NextRequest) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        await supabase.auth.signOut();
    }

    revalidatePath("/", "layout");
    return NextResponse.redirect(new URL("login", req.url), {
        status: 302,
    });
}