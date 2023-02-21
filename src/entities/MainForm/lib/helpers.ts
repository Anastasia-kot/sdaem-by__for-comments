import { NextRouter } from "next/router";
import { FiltersPayloadType } from "../../../../types/filter_data";
import {
  filtersToUrlString,
  formValuesFormatter,
} from "../../../shared/helpers/urlHelpers";

export const setUrlFilters = (
  filter: FiltersPayloadType,
  router: NextRouter
): void => {
  let searchString = filtersToUrlString(filter);
  router.push(`/catalogue${searchString}`);
};

export const onSubmit = (values, router: NextRouter): void => {
  const formattedValues = formValuesFormatter(values); // преобразуем form-values в адекватный FiltersPayloadType
  setUrlFilters(formattedValues, router);
};
