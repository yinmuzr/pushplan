import ajax from "./ajax";
import { baseUrl } from "./baseUrl";
// eslint-disable-next-line
export const getDatapush = (SkipCount) => ajax.get(baseUrl+`/api/services/app/MesData/GetSXQLVBDatas?SkipCount=`+SkipCount);
