import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Home = ({ result }: { result: [] }) => {
  return (
    <>
      <h2>TEST</h2>
      {result.map((item: { email: string; role: string }, index) => {
        return <p key={index}>{`${item?.email} ${item.role}!!`}</p>;
      })}
    </>
  );
};

export async function getStaticProps() {
  const result = await prisma.user.findMany();
  return {
    props: {
      result,
    },
  };
}

export default Home;
