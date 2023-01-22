/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { PACKTRACKING_ENUM } from "../../constants/localstorage";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";
import TrackingDetail from "../../hooks/tracking-detail";
import LoadingBox from "../../components/Loading";
import Heading from "../../components/Heading";
import { COLORS } from "../../themes/colors";
import Error from "../../components/Error";
import Text from "../../components/Text";
import {
  bgColorByStatus,
  checkIconByStatus,
  fixDataString,
} from "../../utils/checkStep";

import {
  GoBackButton,
  Header,
  HeadingWrapper,
  IconStepWrapper,
  InfoStepWrapper,
  TimelineItem,
  TimelineWrapper,
  UnDataWrapper,
  Wrapper,
} from "./styles";
import { format } from "date-fns";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { dataTrackingState, getTrackingDetail } = TrackingDetail();

  const handleUpdateDateByVerification = () => {
    const getStorageDataList = getLocalStorage(PACKTRACKING_ENUM.KEY);

    const checkSpecificDataStorage = getStorageDataList?.find(
      (item: any) => item.codigo === id
    );

    const updateData = checkSpecificDataStorage
      ? {
          ...checkSpecificDataStorage,
          date: format(new Date(), "dd/MM/yyyy • HH:mm"),
        }
      : null;

    const filterPrevDataList = getStorageDataList?.filter(
      (item: any) => item.codigo !== id
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
  }, [id]);

  const checkData =
    !dataTrackingState.isLoading &&
    dataTrackingState.isError !== 404 &&
    dataTrackingState.data?.eventos.pop();

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
            {id}
          </Heading>
        </HeadingWrapper>
      </Header>
      {!dataTrackingState.isError && dataTrackingState.isLoading ? (
        <UnDataWrapper>
          <LoadingBox />
        </UnDataWrapper>
      ) : null}
      {dataTrackingState.isError === 404 && !dataTrackingState.isLoading ? (
        <UnDataWrapper>
          <Error />
        </UnDataWrapper>
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
                    <Text type="body3">
                      {data.data} • {data.hora}
                    </Text>
                    <Text
                      type="body2"
                      color={bgColorByStatus(data.status)}
                      weight={800}
                    >
                      {data.status}
                    </Text>
                    <Text type="body2">{fixDataString(data.local)}</Text>
                    <div>
                      {data.status ===
                      "Objeto recebido pelos Correios do Brasil"
                        ? null
                        : data.subStatus.map((sub, i) => (
                            <Text type="body3" key={i}>
                              {fixDataString(sub)}
                            </Text>
                          ))}
                    </div>
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
