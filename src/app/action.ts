import { getXataClient } from "@/xata";
import { founderRegistrationSchema } from "@/lib/types/type";
import { ZodError } from "zod";

export async function handleRegisterFounder(data: FormData) {
  try {
    const formData = founderRegistrationSchema.parse(Object.fromEntries(data));
    const client = getXataClient();
    const record = await client.db.Founders.create({
      ...data,
      id: crypto.randomUUID(),
    });

    await client.files.upload(
      { table: "Founders", column: "pitch_deck", record: record.id },
      formData.pitch_deck
    );
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        error: "Invalid form values",
      };
    } else {
      return {
        error: "Internal server error",
      };
    }
  }
}
