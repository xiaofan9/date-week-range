import Picker from '../picker';
import MonthRangePanel from '../panel/month-range';
import WeekRangePanel from '../panel/week-range';

const getPanel = function(type) {
  if (type === 'monthrange') {
    return MonthRangePanel;
  } else if (type === 'weekrange') {
    return WeekRangePanel;
  }
};

export default {
  mixins: [Picker],

  name: 'ElDatePicker1',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  watch: {
    type(type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = getPanel(type);
        this.mountPicker();
      } else {
        this.panel = getPanel(type);
      }
    }
  },

  created() {
    this.panel = getPanel(this.type);
  }
};
