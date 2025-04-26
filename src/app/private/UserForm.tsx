"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { type User } from "@supabase/supabase-js";

export default function UserForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [profile, setProfile] = useState<{
    first_name: string;
    last_name: string;
    phone: string;
    avatar_url?: string;
  }>({
    first_name: "",
    last_name: "",
    phone: "",
    avatar_url: "",
  });

  // Charger le profil existant
  const fetchProfile = useCallback(async () => {
    if (user) {
      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name, phone, avatar_url")
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          phone: data.phone || "",
          avatar_url: data.avatar_url || "",
        });
      } else if (error) {
        console.log("Aucun profil existant trouvé.");
      }
    }
  }, [user, supabase]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (user) {
      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        email: user.email,
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone: profile.phone,
        avatar_url: profile.avatar_url,
      });

      if (error) {
        console.error("Erreur lors de la mise à jour du profil :", error.message);
      } else {
        console.log("Profil mis à jour avec succès");
      }
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setProfile((prev) => ({ ...prev, avatar_url: reader.result as string }));
      }
    };
    reader.readAsDataURL(file);

    const fileExt = file.name.split(".").pop();
    const filePath = `${user.id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error("Erreur d’upload :", uploadError.message);
      return;
    }

    const { data } = await supabase.storage.from("avatars").getPublicUrl(filePath);
    const publicUrl = data?.publicUrl;

    if (publicUrl) {
      setProfile((prev) => ({ ...prev, avatar_url: publicUrl }));

      const { error: updateError } = await supabase
        .from("profiles")
        .update({ avatar_url: publicUrl })
        .eq("id", user.id);

      if (updateError) {
        console.error("Erreur lors de l'enregistrement de l'avatar_url :", updateError.message);
      } else {
        console.log("avatar_url mis à jour dans la table profiles !");
      }
    }
  };

  if (!user) {
    return <p>Veuillez vous connecter pour modifier votre profil.</p>;
  }

  return (
    <main className="flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full max-w-4xl bg-white bg-opacity-0 p-8 rounded-lg shadow-2xl mb-[70px]">
        <div className="hidden md:block w-1/2">
          <img
            src="/images/minimalistic_black-and-white_sketch-style_removebg.png"
            className="w-full h-auto mt-[70px]"
            alt="Illustration"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wider">
            Complete your profile
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="profile-pic mb-6 text-center">
              <img
                alt="User Pic"
                src={
                  profile.avatar_url ||
                  "https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
                }
                id="profile-image1"
                height="200"
                className="rounded-full cursor-pointer mx-auto"
                onClick={handleAvatarClick}
              />
              <input
                ref={fileInputRef}
                id="profile-image-upload"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
              />
              <div className="text-sm text-gray-500 mt-2">
                Cliquez sur l’image pour la changer
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="first_name" className="block text-gray-700 mb-2">
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                value={profile.first_name}
                onChange={(e) =>
                  setProfile({ ...profile, first_name: e.target.value })
                }
                className="w-full h-10 px-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="last_name" className="block text-gray-700 mb-2">
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                value={profile.last_name}
                onChange={(e) =>
                  setProfile({ ...profile, last_name: e.target.value })
                }
                className="w-full h-10 px-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                id="phone"
                type="text"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="w-full h-10 px-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full h-10 bg-teal-500 text-white text-sm font-semibold uppercase rounded-full hover:bg-teal-600 transition duration-300 ease-in-out"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
