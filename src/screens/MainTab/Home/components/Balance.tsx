import SvgIcon from 'assets/IconSVG';
import { ButtonSwap, Buttons, TextCus, ViewCus } from 'components';
import { useHome } from 'hooks';
import { NavigationService, Routes } from 'navigation';
import React, { FC } from 'react';
import { Colors } from 'theme';
import { convertPoolsToDollar, formatNumber } from 'utils';
import { StyleSheet } from 'react-native';

interface IBalanceProps {
  points?: number;
}

const Balance: FC<IBalanceProps> = () => {
  const { account } = useHome();

  return (
    <ViewCus p-16 items-center justify-space-between br-24 bg-color11 fd-row>
      <ViewCus f-1>
        <TextCus useI18n overline>
          home.tokens
        </TextCus>
        {!account?.[0]?.tokens ? (
          <Buttons
            style={styles.btnConnect}
            onPress={() => NavigationService.navigate(Routes.WalletList)}>
            <TextCus useI18n body2 bold>
              swap.connect_a_wallet
            </TextCus>
          </Buttons>
        ) : (
          <>
            <TextCus title3 my-10>
              {formatNumber(account?.[0]?.tokens, 4) || 0}{' '}
              <TextCus useI18n caption1 colorB1>
                home.pools
              </TextCus>{' '}
              ~
              <TextCus>
                $
                {formatNumber(
                  convertPoolsToDollar(
                    +account?.[0]?.tokens,
                    account?.[0]?.latestExchange?.value?.toFixed(2),
                  ),
                  2,
                )}
              </TextCus>
            </TextCus>
          </>
        )}
        <ViewCus h-1 style={{ width: '100%' }} bg-color33 />
        <TextCus useI18n overline mt-8 textTr-uppercase>
          home.points
        </TextCus>
        <TextCus title3 my-10>
          {formatNumber(account?.[0]?.points || 0, 0)}{' '}
          <TextCus useI18n caption1 colorB1>
            home.points
          </TextCus>
        </TextCus>
      </ViewCus>
      <ViewCus>
        <ButtonSwap
          onPress={() => NavigationService.navigate(Routes.Swap)}
          icon={<SvgIcon.Swap />}
        />
      </ViewCus>
    </ViewCus>
  );
};

export default Balance;

const styles = StyleSheet.create({
  btnConnect: {
    backgroundColor: Colors.color1E,
    height: 32,
    width: 130,
    marginTop: 10,
    marginBottom: 10,
  },
});
