import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import { ErrorFallback } from "~/components/ErrorBoundaries";
import { fetchFeedDetailProducer } from "~/layouts/find-producer/utils/api";
import { IFeedDetailModel } from "~/layouts/find-producer/utils/types";
import { LayoutSplashScreen, redirectTo } from "~/lib/authenticate";
import { isEmpty } from "~/lib/helpers";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/router";

const DetailFindProducerPage = dynamic(
  () => import("~/layouts/find-producer/detail/DetailFindProducerPage"),
  {
    suspense: true,
  }
);

interface IPropsDetailFindProducer {
  data: IFeedDetailModel | null;
}

function DetailFindProducer({ data }: IPropsDetailFindProducer) {
  const [producerDetail, setproducerDetail] = useState(data);
  const router = useRouter();

  const setNewData = async () => {
    const response = await fetchFeedDetailProducer(
      router.query.title as string
    );
    if (response.state) {
      setproducerDetail(response.data);
    }
  };

  if (isEmpty(data)) {
    redirectTo("/find-producer");
    return <></>;
  } else {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LayoutSplashScreen />}>
          <DetailFindProducerPage
            producerDetail={producerDetail}
            setNewData={setNewData}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export async function getServerSideProps(context: any) {
  const response = await fetchFeedDetailProducer(context.params.title);
  return {
    props: { data: response.state ? response.data : null },
  };
}

export default DetailFindProducer;
