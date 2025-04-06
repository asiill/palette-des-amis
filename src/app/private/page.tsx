import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import UserForm from "./UserForm";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
        <main className="flex justify-center items-center">
          <UserForm user={data.user}/>
        </main>
    );
}