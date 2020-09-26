import Picker from '../picker';
import WeekRangePanel from '../panel/week-range';

const getPanel = function() {
  return WeekRangePanel;
};

export default {
  mixins: [Picker],

  name: 'DateWeekRange',

  props: {
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
