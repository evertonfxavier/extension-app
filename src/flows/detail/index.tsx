import { useEffect } from "react";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { ILocalStorage, PACKTRACKING_ENUM } from "../../constants/localstorage";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";
import TrackingDetail from "../../hooks/tracking-detail";
import LottieComponent from "../../components/Lottie";
import { BoxFloating, NotFound } from "../../assets";
import Heading from "../../components/Heading";
import { COLORS } from "../../themes/colors";
import Text from "../../components/Text";
import {
  bgColorByStatus,
  checkIconByStatus,
  fixDataString,
  STEP_ENUM,
} from "../../utils/checkStep";

import {
  GoBackButton,
  Header,
  HeadingWrapper,
  IconStepWrapper,
  InfoStepWrapper,
  SubStepWrapper,
  TimelineItem,
  TimelineWrapper,
  Wrapper,
} from "./styles";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { dataTrackingState, getTrackingDetail } = TrackingDetail();

  const getStorageDataList: ILocalStorage[] = getLocalStorage(
    PACKTRACKING_ENUM.KEY
  );

  const checkSpecificDataStorage = getStorageDataList?.find(
    (item: ILocalStorage) => item.codigo === id
  );

  const handleUpdateDateByVerification = () => {
    const updateData = checkSpecificDataStorage
      ? {
          ...checkSpecificDataStorage,
          date: format(new Date(), "dd/MM/yyyy • HH:mm"),
        }
      : null;

    const filterPrevDataList = getStorageDataList?.filter(
      (item: ILocalStorage) => item.codigo !== id
    );

    if (updateData === null) return;

    return setLocalStorage([...filterPrevDataList, updateData]);
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    getTrackingDetail({
      codigo: id,
    });

    handleUpdateDateByVerification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkData =
  !dataTrackingState.isLoading &&
  dataTrackingState.isError !== 404 &&
  dataTrackingState.data?.eventos.pop();

const formattedSubStatus = (substatus: string) => {
  const checkData = fixDataString(substatus)
    .replace(/De.*-/, "")
    .replace(/De.*Para:/, "");

  return checkData === " " ? null : `Destino: ${checkData}`;
};
  return (
    <Wrapper>
      <Header>
        <GoBackButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color={COLORS.MONOCHROMATIC[100]}
            style={{
              width: 22,
              height: 22,
            }}
          />
        </GoBackButton>
        <HeadingWrapper>
          <Heading type="h4" weight={500}>
            {id}
          </Heading>
          <Heading type="h2" weight={500}>
            {checkSpecificDataStorage?.name ?? id}
          </Heading>
          <Heading type="h5" weight={500}>
            {!dataTrackingState.isLoading && dataTrackingState.isError !== 404
              ? `Última atualização: ${format(
                  new Date(dataTrackingState.data?.ultimo),
                  "dd/MM/yyyy • HH:mm"
                )}`
              : "..."}
          </Heading>
        </HeadingWrapper>
      </Header>
      {!dataTrackingState.isError && dataTrackingState.isLoading ? (
        <LottieComponent data={BoxFloating} />
      ) : null}
      {dataTrackingState.isError === 404 && !dataTrackingState.isLoading ? (
        <LottieComponent data={NotFound} />
      ) : null}

      {!dataTrackingState.isLoading && dataTrackingState.isError !== 404 && (
        <TimelineWrapper>
          {checkData
            ? dataTrackingState.data.eventos.map((data, idx) => (
                <TimelineItem key={idx}>
                  <IconStepWrapper color={bgColorByStatus(data.status)}>
                    <FontAwesomeIcon
                      icon={checkIconByStatus(data.status)}
                      color={COLORS.WHITE}
                      style={{
                        width: 22,
                        height: 22,
                      }}
                    />
                  </IconStepWrapper>
                  <InfoStepWrapper>
                    <Text type="body4">
                      {data.data} • {data.hora}
                    </Text>
                    <Text
                      type="body2"
                      color={bgColorByStatus(data.status)}
                      weight={800}
                    >
                      {data.status}
                    </Text>
                    <Text type="body3">
                      {data.local && `Local: ${fixDataString(data.local)}`}
                    </Text>
                    <SubStepWrapper>
                      {!(data.status === STEP_ENUM.RECEIVED) &&
                        data.subStatus.map((sub, i) => (
                          <Text type="body4" key={i}>
                            {/* {sub
                              .replace("Origem: País - /", "")
                              .replace("Destino: País - /BR", "")} */}
                              {formattedSubStatus(sub)}
                          </Text>
                        ))}
                    </SubStepWrapper>
                  </InfoStepWrapper>
                </TimelineItem>
              ))
            : null}
        </TimelineWrapper>
      )}
    </Wrapper>
  );
};

export default Detail;
