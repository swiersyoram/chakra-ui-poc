import { SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import HomePageView from "@/app/components/HomePageView";

export default async function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <SimpleGrid columns={3} spacing={10} height={400}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </SimpleGrid>
        }
      >
        <HomePageView />
      </Suspense>
    </main>
  );
}
