import { format } from "date-fns";
import { useCallback, useState } from "react";

import { PACKTRACKING_ENUM } from "../../constants/localstorage";
import TrackingDetailRequest from "../../services/requests/linketrack-detail";
import { ITrackingDetailResponse } from "../../services/requests/linketrack-detail/types";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";
import { IDataTrackingState, IGetTrackingDetailParams } from "./types";

const user = process.env.REACT_APP_USER || "";
const token = process.env.REACT_APP_TOKEN || "";

const TrackingDetail = () => {
  const [dataTrackingState, setDataTrackingState] =
    useState<IDataTrackingState>({
      data: {} as ITrackingDetailResponse,
      isLoading: true,
      isError: null,
    });

  const getTrackingDetail = async ({ codigo }: IGetTrackingDetailParams) => {
    try {
      setDataTrackingState({
        ...dataTrackingState,
        isLoading: true,
      });
      const result = new TrackingDetailRequest();
      const response = await result.fetchTrackingDetailRequest({
        user,
        token,
        codigo,
      });

      setDataTrackingState({
        ...dataTrackingState,
        data: response,
        isLoading: false,
      });

      handleSaveCodeInStorage(response.codigo);
    } catch (e) {
      console.log(e);
      setDataTrackingState({
        ...dataTrackingState,
        isLoading: false,
        isError: 404,
      });
    }
  };

  const handleSaveCodeInStorage = useCallback((codigo: string) => {
    const getStorage = getLocalStorage(PACKTRACKING_ENUM.KEY);
    const checkIfExist = getStorage?.find(
      (item: any) => item.codigo === codigo
    );

    //

    if (getStorage) {
      if (Boolean(checkIfExist)) {
        return;
      }
      return setLocalStorage([
        ...getStorage,
        {
          codigo,
          name: codigo,
          date: format(new Date(), "dd/MM/yyyy • HH:mm"),
        },
      ]);
    }
    return setLocalStorage([
      {
        codigo,
        name: codigo,
        date: format(new Date(), "dd/MM/yyyy • HH:mm"),
      },
    ]);
  }, []);

  return { dataTrackingState, getTrackingDetail };
};

export default TrackingDetail;
