import { supabase } from "@/lib/supabase/client";

export async function createWorkshopRequest(values: {
  institution_name: string;
  institution_type: string;
  contact_person: string;
  designation?: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  students?: string;
  preferred_date?: string;
  message?: string;
}) {
  const { error } = await supabase
    .from("workshop_requests")
    .insert(values);

  if (error) throw error;
}