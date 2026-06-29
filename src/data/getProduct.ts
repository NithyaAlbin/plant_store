import { supabase } from "@/lib/supabase";

export async function getProduct() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    return null;
  }

  return data?.[0] ?? null;
}