import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

export default StyleSheet.create({
  readNotiContainer: {
    backgroundColor: Colors.grayF1,
    borderBottomWidth: 1,
    borderColor: Colors.grayA3,
  },
  unReadNotiContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.grayA3,
  },
  notiContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  notiInfoContainer: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    textAlign: 'left',
  },

  blueText: {
    color: Colors.accent1,
    lineHeight: 20,
    fontWeight: '600',
  },
  textBlack: {
    color: Colors.black,
  },
  timeText: {
    color: Colors.grayA3,
    fontSize: 10,
  },
  markAllReadContainer: {
    alignItems: 'flex-end',
    paddingRight: 24,
  },
  markAllReadText: {
    color: Colors.accent1,
  },
});
