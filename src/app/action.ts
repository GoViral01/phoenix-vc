"use server";
import { getXataClient } from "@/xata";
import {
  founderRegistrationSchema,
  investorsLoginSchema,
} from "@/lib/types/type";
import { ZodError } from "zod";
import isEmail from "validator/lib/isEmail";

// founder registration
export async function handleRegisterFounder(formData: FormData) {
  try {
    const { pitch_deck, ...data } = founderRegistrationSchema.parse(
      Object.fromEntries(formData.entries())
    );
    const client = getXataClient();
    const record = await client.db.Founders.create({
      ...data,
      id: crypto.randomUUID(),
    });

    await client.files.upload(
      { table: "Founders", column: "pitch_deck", record: record.id },
      pitch_deck
    );

    return {
      success: true,
    };
  } catch (e) {
    console.error(e);
    if (e instanceof ZodError) {
      return {
        error: "Invalid form values",
        errorFields: e.formErrors.fieldErrors,
      };
    } else {
      return {
        error: e instanceof Error ? e.message : "Internal server error",
      };
    }
  }
}

// get Founders email - verify if it exists or not
export async function getRecordByEmail(email: string) {
  email = email.trim();
  const client = getXataClient();
  if (email && isEmail(email)) {
    const record = await client.db.Founders.select(["email"])
      .getFirst({
        filter: {
          email,
        },
      })
      .catch(() => null);

    if (record) {
      return {
        exist: true,
        message: "Record with email already exists",
      };
    }
  }

  return {
    exist: false,
    message: "Record with email already does not exists",
  };
}

// investors registration
export async function handleRegisterInvestor(formData: FormData) {
  try {
    const { ...data } = investorsLoginSchema.parse(
      Object.fromEntries(formData.entries())
    );

    const client = getXataClient();

    await client.db.Investors.create({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      contact_number: data.contact_number,
      address: data.address,
      linkedIn: data.linkedIn,
      background: data.background,
    });

    return {
      success: true,
    };
  } catch (e) {
    console.error(e);
    if (e instanceof ZodError) {
      return {
        error: "Invalid form values",
        errorFields: e.formErrors.fieldErrors,
      };
    } else {
      return {
        error: e instanceof Error ? e.message : "Internal server error",
      };
    }
  }
}
