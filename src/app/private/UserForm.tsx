"use client"

import { useCallback, useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { type User } from "@supabase/supabase-js"; 

export default function UserForm ({ user }: { user: User | null }) {
    const supabase = createClient()
    return (
        <p>Hello {user?.email}</p>
    );
}