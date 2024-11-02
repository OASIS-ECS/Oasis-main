"use server";
import { prisma } from "@/db/prisma";
import { ProfileSchema, RegisterSchema } from "@/schemas";
import { hash } from "bcryptjs";
import { cache } from "react";

import * as z from "zod";

export const GetUser = cache(async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    cacheStrategy: { swr: 60, ttl: 60 },
  });
  return user;
});

export async function updateUser(values: z.infer<typeof ProfileSchema>) {
  const validatedFields = ProfileSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password, name, department, semester } = validatedFields.data;

  try {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        department: department.toUpperCase(),
        semester,
      },
    });
    return { success: "Profile Updated Successfully" };
  } catch (error) {
    return { error: "error in registering user" };
  }
}
