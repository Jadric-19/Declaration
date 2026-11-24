
import { supabase } from "../lib/supabase";

export async function saveResponse(choix) {
    const { error } = await supabase
        .from("responses")
        .insert({
            choix: choix
        });

    if (error) {
        throw error;
    }
}
