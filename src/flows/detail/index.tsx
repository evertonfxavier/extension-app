/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Heading from "../../components/Heading";
import LoadingBox from "../../components/Loading";
import TrackingDetail from "../../hooks/tracking-detail";
import { COLORS } from "../../themes/colors";
import Error from "../../components/Error";

import {
  GoBackButton,
  Header,
  TimelineItem,
  TimelineWrapper,
  UnDataWrapper,
  Wrapper,
} from "./styles";

const mockData = {
  codigo: "LB561874085HK",
  host: "vc",
  eventos: [
    {
      status: "Objeto encaminhado",
      local: "CURITIBA - PR",
      data: "12/01/2023",
      hora: "14:56",
      subStatus: [
        "De:  CURITIBA - PR  -> Para:  Unidade de Tratamento - RECIFE/PE",
      ],
    },
    {
      status: "Fiscalização aduaneira finalizada",
      local: "CURITIBA - PR",
      data: "12/01/2023",
      hora: "14:54",
      subStatus: ["De:  CURITIBA - PR - "],
    },
    {
      status: "Objeto recebido pelos Correios do Brasil",
      local: "CURITIBA - PR",
      data: "12/01/2023",
      hora: "09:53",
      subStatus: [
        "De:  CURITIBA - PR - ",
        '<span class="minhasImportacoes">Acesse o ambiente <a href="https://www.correios.com.br/encomendas-logistica/minhas-importacoes/minhas-importacoes" target="_blank">Minhas Importações</a></span>',
      ],
    },
    {
      status: "Objeto encaminhado",
      local: "Pa�s - /BR",
      data: "09/01/2023",
      hora: "15:05",
      subStatus: ["De:  Pa�s - /BR "],
    },
    {
      status: "Objeto postado",
      local: "",
      data: "09/01/2023",
      hora: "14:44",
      subStatus: [" "],
    },
    {
      status: "Objeto encaminhado",
      local: "CURITIBA - PR",
      data: "12/01/2023",
      hora: "14:56",
      subStatus: [
        "De:  CURITIBA - PR  -> Para:  Unidade de Tratamento - RECIFE/PE",
      ],
    },
  ],
  time: 1.598,
  quantidade: 6,
  servico: "REMESSA INTERNACIONAL",
  ultimo: "2023-01-12T17:56:00.000Z",
};

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

  console.log(dataTrackingState);

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
                  <span>{data.status}</span>
                  <span>{data.local}</span>
                  <span>{data.data}</span>
                  <span>{data.hora}</span>
                </TimelineItem>
              ))
            : null}
        </TimelineWrapper>
      )}
    </Wrapper>
  );
};

export default Detail;
