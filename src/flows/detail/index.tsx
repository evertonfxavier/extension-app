/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Heading from "../../components/Heading";
import LoadingBox from "../../components/Loading";
import TrackingDetail from "../../hooks/tracking-detail";
import { COLORS } from "../../themes/colors";
import Error from "../../components/Error";

import {
  GoBackButton,
  Header,
  IconStepWrapper,
  InfoStepWrapper,
  TimelineItem,
  TimelineWrapper,
  UnDataWrapper,
  Wrapper,
} from "./styles";
import {
  bgColorByStatus,
  checkIconByStatus,
  fixDataString,
} from "../../utils/checkStep";
import Text from "../../components/Text";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { dataTrackingState, getTrackingDetail } = TrackingDetail();

  useEffect(() => {
    if (!id) {
      return;
    }
    getTrackingDetail({
      codigo: id,
    });
  }, []);

  !dataTrackingState.isLoading && dataTrackingState.data?.eventos.pop();

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
        <Heading type="h2" weight={500} color={COLORS.MONOCHROMATIC[100]}>
          {id}
        </Heading>
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
          {dataTrackingState.data
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
                    <Text type="body3" color={COLORS.MONOCHROMATIC[100]}>
                      {data.data} • {data.hora}
                    </Text>
                    <Text
                      type="body2"
                      color={bgColorByStatus(data.status)}
                      weight={800}
                    >
                      {data.status}
                    </Text>
                    <Text type="body2" color={COLORS.MONOCHROMATIC[100]}>
                      {fixDataString(data.local)}
                    </Text>
                    {/* <div>
                      {data.status ===
                      "Objeto recebido pelos Correios do Brasil"
                        ? null
                        : data.subStatus.map((sub, i) => (
                            <span key={i}>{fixDataString(sub)}</span>
                          ))}
                    </div> */}
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
