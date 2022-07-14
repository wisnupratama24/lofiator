import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import { ErrorFallback } from "~/components/ErrorBoundaries";
import { fetchFeedDetailService } from "~/layouts/find-culvitator/utils/api";
import { IServiceDetailModel } from "~/layouts/find-culvitator/utils/types";
import { LayoutSplashScreen, redirectTo } from "~/lib/authenticate";
import { isEmpty } from "~/lib/helpers";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/router";

const DetailFindCulvitatorPage = dynamic(
  () => import("~/layouts/find-culvitator/detail/DetailFindCulvitatorPage"),
  {
    // suspense: true,
    ssr: false,
  }
);

interface IPropsDetailFindCulvitator {
  data: IServiceDetailModel | null;
}

function DetailFindCulvitator({ data }: IPropsDetailFindCulvitator) {
  const [serviceDetail, setServiceDetail] = useState(data);
  const router = useRouter();
  const { title } = router.query;

  const setNewData = async () => {
    const response = await fetchFeedDetailService(title as string);
    if (response.state) {
      setServiceDetail(response.data);
    }
  };

  if (isEmpty(data)) {
    redirectTo("/find-cultivator");
    return <></>;
  } else {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LayoutSplashScreen />}>
          <DetailFindCulvitatorPage
            serviceDetail={serviceDetail}
            setNewData={setNewData}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export async function getServerSideProps(context: any) {
  const response = await fetchFeedDetailService(context.params.title);
  return {
    props: { data: response.state ? response.data : null },
  };
}

export default DetailFindCulvitator;
