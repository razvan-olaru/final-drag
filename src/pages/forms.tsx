// forms page
import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Single from "../components/UI/Layout/Single";
import examples from "./api/examples";
import { getSession } from "next-auth/react";
import Main from "../components/UI/Layout/Main";
import NewForm from "../components/UI/Layout/NewForm";

const Forms: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>Clrty New Forms</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Single title="Forms">table here</Single>
        <NewForm></NewForm>
      </Main>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  console.log({ session });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Forms;
