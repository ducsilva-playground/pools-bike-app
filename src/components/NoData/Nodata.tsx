import CommonSvg from 'assets/svg/CommonSvg';
import { TextCus, ViewCus } from 'components';
import React from 'react';

interface INodata {
  title: string;
}

const Nodata: React.FC<INodata> = ({ title }) => {
  return (
    <ViewCus fd-column items-center justify-center mt-50>
      {CommonSvg.NoData()}
      <TextCus body1 lightPrimaryColor mt-24 useI18n>
        {title}
      </TextCus>
    </ViewCus>
  );
};
export default Nodata;
