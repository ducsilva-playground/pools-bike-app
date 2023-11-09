import React, { useRef, useState, useImperativeHandle } from 'react';
import { Dropdown, IDropdownRef } from 'react-native-element-dropdown';
import styles from './styles';
import { Colors } from 'theme';
export default function DropdownCus(props: IDropdown) {
  const [isFocus, setIsFocus] = useState(false);
  const {
    data,
    value,
    setValue,
    search,
    placeholder,
    style,
    maxHeight = 300,
    itemTextStyle,
    rightIcon,
    refD,
    disabled,
  } = props;
  const dropdownRef = useRef<
    React.RefObject<IDropdownRef> | React.MutableRefObject<IDropdownRef>
  >();
  useImperativeHandle(refD, () => {
    return {
      open: () => dropdownRef.current?.open(),
    };
  });

  return (
    <Dropdown
      ref={dropdownRef}
      activeColor={Colors.color1A}
      itemContainerStyle={{ backgroundColor: Colors.color11 }}
      itemTextStyle={itemTextStyle}
      style={[styles.inputContainer, style]}
      containerStyle={styles.containerStyle}
      renderRightIcon={rightIcon}
      placeholderStyle={styles.placeholderText}
      inputSearchStyle={styles.inputSearchStyle}
      selectedTextStyle={styles.selectedInputStyle}
      showsVerticalScrollIndicator={true}
      autoScroll={true}
      data={data}
      disable={disabled}
      search={search}
      maxHeight={maxHeight}
      labelField="label"
      valueField="label"
      placeholder={!isFocus ? placeholder : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item);
      }}
    />
  );
}
export interface IDropdown {
  data: any[];
  value: string;
  search?: boolean;
  placeholder: string;
  setValue: (value: string) => void;
  style?: any;
  maxHeight?: number;
  itemTextStyle?: any;
  rightIcon?: (visible?: boolean) => JSX.Element;
  refD?: any;
  disabled?: boolean;
}
