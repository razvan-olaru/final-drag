// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export const savedForm = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "This is not a POST request" });
    return;
  }
  const createForm = await prisma.form
    .create({
      data: {
        fields: req.body.fields,
      },
    })
    .then((response) => console.log(response))
    .catch((error) => res.send({ message: "Something went wrong: " + error }));
  res.status(201).json(createForm);
};
