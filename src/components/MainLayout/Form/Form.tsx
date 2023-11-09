import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import { ScrollViewCus, TextCus, TextInputs, TouchCus } from 'components';
import { Controller, useForm } from 'react-hook-form';
import { IItemFormCreateTicket } from 'types';
import { Colors } from 'theme';
import { styleSpacing } from 'utils';
import { DatePickerForm } from 'components/Form';
import moment from 'moment';

const Form = (props: IItemFormProps) => {
  const { style, isEdit = false, ticket, onSubmit, onEdit } = props;
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IItemFormCreateTicket>();

  return (
    <ScrollViewCus>
      <View style={[styles.wrap, styles.wrapContent, style]}>
        <View style={(styles.p12, styles.wrapContent)}>
          <Controller
            control={control}
            name="name"
            defaultValue={ticket?.name ?? ''}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <View style={[styles.row, styles.spaceItem, styles.cenItem]}>
                <View style={styles.wp25}>
                  <TextCus body2 semibold>
                    Tên việc
                  </TextCus>
                </View>
                <TextInputs
                  style={[styles.input]}
                  caretHidden
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder={'Nhập tên việc'}
                  onChangeText={onChange}
                  value={value}
                  color={Colors.colorLine}
                  success
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <View style={[styles.row, styles.spaceItem, styles.cenItem]}>
                <View style={styles.wp25}>
                  <TextCus body2 semibold mb-10>
                    Mô tả chi tiết
                  </TextCus>
                </View>
                <TextInputs
                  style={[styles.input]}
                  autoCapitalize="none"
                  placeholder={'Nhập mô tả chi tiết'}
                  onChangeText={onChange}
                  value={value}
                  color={Colors.colorLine}
                  success
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="group"
            rules={{ required: true }}
            defaultValue={ticket?.amount ? ticket.amount.toString() : ''}
            render={({ field: { onChange, value } }) => (
              <View style={[styles.row, styles.spaceItem, styles.cenItem]}>
                <View style={styles.wp25}>
                  <TextCus body2 semibold mb-10>
                    Phân nhóm
                  </TextCus>
                </View>
                <TextInputs
                  style={[styles.input]}
                  autoCapitalize="none"
                  placeholder={'Nhập nhóm'}
                  onChangeText={onChange}
                  value={value}
                  color={Colors.colorLine}
                  success
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="assign"
            rules={{ required: true }}
            defaultValue={
              ticket?.commission ? ticket.commission.toString() : ''
            }
            render={({ field: { onChange, value } }) => (
              <View style={[styles.row, styles.spaceItem, styles.cenItem]}>
                <View style={styles.wp25}>
                  <TextCus body2 semibold mb-10>
                    Giao cho
                  </TextCus>
                </View>
                <TextInputs
                  style={[styles.input]}
                  autoCapitalize="none"
                  placeholder={'Giao cho'}
                  onChangeText={onChange}
                  value={value}
                  color={Colors.colorLine}
                  success
                />
              </View>
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePickerForm
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                maxDate={moment().format('DD/MM/YYYY')}
                onConfirmDate={date => {
                  setValue('deadline', moment(date).format('DD/MM/YYYY'), {
                    shouldValidate: true,
                    shouldTouch: true,
                  });
                }}
                error={errors.deadline?.message}
              />
            )}
            name="deadline"
          />
          <View style={[styles.row, styles.spaceItem]}>
            <TouchCus
              onPress={() =>
                (onSubmit && handleSubmit(onSubmit)()) ||
                (onEdit && handleSubmit(onEdit)())
              }
              style={[
                styles.btnSubmit,
                styles.cenItemvh,
                styleSpacing('mt-10'),
              ]}>
              <TextCus whiteColor semibold mx-32 body1 p-16>
                {isEdit ? 'Cập nhật' : 'Hoàn tất'}
              </TextCus>
            </TouchCus>
          </View>
        </View>
      </View>
    </ScrollViewCus>
  );
};

interface IItemFormProps {
  style?: any;
  isEdit?: boolean;
  ticket?: IItemFormCreateTicket;
  onSubmit?: (a: any) => void;
  onEdit?: (a: any) => void;
  onClose: () => void;
}

export default Form;
