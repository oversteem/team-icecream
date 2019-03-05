import React, { Fragment } from 'react';
import { StyledLink, UIRow } from '../../GeneralStyles';
import { Text } from '../../components/UI/TextComponent';
import * as ROUTES from '../../constants/routes';
import '../Firebase/firebase';
import MapPage from '../../components/Map/Map';
import '../../index.css';

const MapView = () => {
  return (
    <Fragment>
      <UIRow height="70px">
      </UIRow>
      <UIRow height="calc(100% - 140px)" noPadding relative>
        <MapPage />
      </UIRow>
      <UIRow height="70px" flex endCenter backgroundLight>
        <StyledLink to={ROUTES.HOME}>
          <Text tyle={{ paddingBottom: '26px' }} gold>Back</Text>
        </StyledLink>
      </UIRow>
    </Fragment >
  );
}

export default MapView;